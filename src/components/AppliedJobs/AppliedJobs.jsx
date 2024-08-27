import { getIdsFromLocalStorage } from "../utility/JobsIdLocalStorage.js";
import useFetch from "../hooks/useFetch.jsx";
import { useEffect, useState } from "react";
import AppliedJob from "../AppliedJob/AppliedJob.jsx";
import { removeIdFromLocalStorage } from "../utility/JobsIdLocalStorage.js";
import Swal from "sweetalert2";

const AppliedJobs = () => {
  const [jobs, loading] = useFetch("../../../public/jobs.json");
  const [displayJobs, setDisplayJobs] = useState([]);

  useEffect(() => {
    if (!loading) {
      const appliedJobs = getIdsFromLocalStorage();
      const filtered = jobs.filter((job) =>
        appliedJobs.includes(parseInt(job.id))
      );

      setDisplayJobs(filtered);
    }
  }, [loading, jobs]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const afterDelete = displayJobs.filter((job) => job.id !== id);
        removeIdFromLocalStorage(id);
        setDisplayJobs(afterDelete);
        Swal.fire({
          title: "Deleted!",
          text: "Your Selected Job Has Been Deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <h1 className="text-5xl text-center py-10">Applied Jobs</h1>
      <div className="flex flex-col justify-center items-center gap-5 py-5">
        {displayJobs.map((job) => (
          <AppliedJob
            key={job.id}
            job={job}
            handleDelete={handleDelete}
          ></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
