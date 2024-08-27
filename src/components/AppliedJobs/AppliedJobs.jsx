import { getIdsFromLocalStorage } from "../utility/JobsIdLocalStorage.js";
import useFetch from "../hooks/useFetch.jsx";
import { useEffect, useState } from "react";
import AppliedJob from "../AppliedJob/AppliedJob.jsx";

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

  return (
    <div>
      <h1>Applied Jobs:</h1>
      {
        displayJobs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
      }
    </div>
  );
};

export default AppliedJobs;
