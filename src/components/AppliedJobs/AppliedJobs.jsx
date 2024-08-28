import { getIdsFromLocalStorage } from "../utility/JobsIdLocalStorage.js";
import useFetch from "../hooks/useFetch.jsx";
import { useEffect, useState } from "react";
import AppliedJob from "../AppliedJob/AppliedJob.jsx";
import { removeIdFromLocalStorage } from "../utility/JobsIdLocalStorage.js";
import Swal from "sweetalert2";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";

const AppliedJobs = () => {
  const [jobs, loading] = useFetch("/jobs.json");

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  useEffect(() => {
    if (!loading) {
      const appliedJobIdsFromLs = getIdsFromLocalStorage();
      const filtered = jobs.filter((job) =>
        appliedJobIdsFromLs.includes(parseInt(job.id))
      );

      setAppliedJobs(filtered);
      setDisplayJobs(filtered);
    }
  }, [loading, jobs]);

  const handleFilterJobs = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

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
      <div className="flex justify-end">
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn m-1">
            Filter By
            <AiOutlineDown className="mt-1" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li
              onClick={() => {
                handleFilterJobs("all");
              }}
            >
              <a>All</a>
            </li>
            <li
              onClick={() => {
                handleFilterJobs("remote");
              }}
            >
              <a>Remote</a>
            </li>
            <li onClick={() => handleFilterJobs("onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 py-5">
        {displayJobs.map((job) => (
          <AppliedJob
            key={job.id}
            job={job}
            handleDelete={handleDelete}
          ></AppliedJob>
        ))}
        {displayJobs.length === 0 && (
          <>
            <div>
              <h1 className="text-4xl text-center mb-4">No Jobs Found</h1>
              <p className="flex items-center btn btn-primary">
                <Link to={"/"}>Add Jobs</Link>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;
