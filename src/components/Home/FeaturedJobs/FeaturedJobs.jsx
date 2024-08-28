import { useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
import useFetch from "../../hooks/useFetch";

const FeaturedJobs = () => {
  const [jobs, loading] = useFetch('/jobs.json');
  const [dataLength, setDataLength] = useState(4);
 
  return (
    <div>
      <div className="grid grid-cols-2 gap-10">
        {jobs.slice(0, dataLength).map((job) => (
          <FeaturedJob key={job.id} job={job}></FeaturedJob>
        ))}
      </div>
      {jobs.length !== dataLength && (
        <div
          onClick={() => setDataLength(jobs.length)}
          className="flex justify-center my-8"
        >
          <button className="btn btn-outline btn-primary">Show All Jobs</button>
        </div>
      )}
    </div>
  );
};

export default FeaturedJobs;
