import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AiOutlineDelete } from "react-icons/ai";
const AppliedJob = ({ job, handleDelete }) => {
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
    <div className="grid grid-cols-3 justify-center items-center shadow-md py-4">
      {/* Image Part  */}
      <div className="mx-auto">
        <img className="w-[80px] h-[25px]" src={logo} alt="" />
      </div>
      {/* Middle part  */}
      <div className="space-y-3">
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
          <p className="flex justify-center items-center gap-1 text-lg">
            <IoLocationOutline></IoLocationOutline>
            {location}
          </p>
          <p className="flex justify-center items-center gap-1 text-lg">
            <AiOutlineDollarCircle></AiOutlineDollarCircle>
            Slaray: {salary}
          </p>
        </div>
      </div>
      {/* Last Part  */}
      <div className="flex items-center gap-2 mx-auto">
        <Link to={`/jobDetails/${id}`}>
          <button className="px-4 py-2 rounded-md bg-[#8688FE] text-white font-semibold">
            View Details
          </button>
        </Link>
        <AiOutlineDelete onClick={() => handleDelete(+id)} className="text-2xl rounded-full" />
      </div>
    </div>
  );
};

AppliedJob.propTypes = {
  job: PropTypes.object,
  handleDelete: PropTypes.func
};

export default AppliedJob;
