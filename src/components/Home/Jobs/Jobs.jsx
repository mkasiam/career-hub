import { useLoaderData } from "react-router-dom";
import Job from "../Job/Job";

const Jobs = () => {
  const jobCategories = useLoaderData();
  return (
    <div className="grid grid-cols-4">
      {jobCategories.map((jobCategory) => (
        <Job key={jobCategory.id} jobCategory={jobCategory}></Job>
      ))}
    </div>
  );
};

export default Jobs;
