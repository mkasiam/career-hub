import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FeaturedJob = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="space-y-4 shadow-md p-7 rounded-lg">
      <div className="mb-4">
        <img className="w-[80px] h-[25px]" src={logo} alt="" />
      </div>
      <h3 className="text-xl font-semibold">{job_title}</h3>
      <p>{company_name}</p>
      <div className="flex justify-start items-center gap-4">
        <button className="px-4 py-2 border rounded-md text-[#8688FE] border-[#8688FE]">
          {remote_or_onsite}
        </button>
        <button className="px-4 py-2 border rounded-md text-[#8688FE] border-[#8688FE]">
          {job_type}
        </button>
      </div>
      <div className="flex gap-6">
        <p>{location}</p>
        <p>Slaray: {salary}</p>
      </div>
      <Link to={`/jobDetails/${id}`}>
        <button className="px-4 py-2 rounded-md bg-[#8688FE] text-white font-semibold">
          View Details
        </button>
      </Link>
    </div>
  );
};

FeaturedJob.propTypes = {
  job: PropTypes.object,
};

export default FeaturedJob;
