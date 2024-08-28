import { useLoaderData, useParams } from "react-router-dom";

import {
  AiOutlineDollarCircle,
  AiFillPhone,
  AiOutlineMail,
  AiTwotoneHome,
  AiOutlineCalendar,
} from "react-icons/ai";

import {
  getIdsFromLocalStorage,
  saveIdsToLocalStorage,
} from "../utility/JobsIdLocalStorage.js";
import Swal from "sweetalert2";

const JobDetails = () => {
  const { jobsId } = useParams();
  const jobs = useLoaderData();
  const targetedJob = jobs.find((job) => job.id === +jobsId);
  const {
    id,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
    salary,
    job_title,
  } = targetedJob;
  const { phone, email, address } = contact_information;
  const handleApplyJobs = (id) => {
    const isExists = getIdsFromLocalStorage().includes(id);
    if (!isExists) {
      saveIdsToLocalStorage(+id);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Succesfully Applied",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Already Applied",
      });
    }
  };
  return (
    <div>
      <h1 className="text-center text-5xl py-8">Job Details</h1>
      <div className="flex justify-center py-10 gap-5">
        {/* Job Description: JD  */}
        <div className="w-2/3 space-y-5">
          <p>
            <span className="font-bold">Job Description: </span>
            {job_description}
          </p>
          <p>
            <span className="font-bold">Job Responsibility: </span>
            {job_responsibility}
          </p>

          <p>
            <span className="font-bold">
              Educational Requirements: <br />
            </span>
            {educational_requirements}
          </p>

          <p>
            <span className="font-bold">
              Experience: <br />
            </span>
            {experiences}
          </p>
        </div>
        {/* Right Side Content  */}
        <div className="w-1/3 space-y-2">
          <span className="font-bold">Job Details</span>
          <hr />
          <p className="flex items-center text-lg gap-2">
            <AiOutlineDollarCircle></AiOutlineDollarCircle>
            <span className="font-bold">Salary: </span>
            {salary}
          </p>
          <p className="flex items-center text-lg gap-2">
            <AiOutlineCalendar />
            <span className="font-bold">Job Title:</span>
            {job_title}
          </p>
          <p className="font-bold">Contact Information</p>
          <hr />
          <p className="flex items-center text-lg gap-2">
            <AiFillPhone />
            Phone: {phone}
          </p>
          <p className="flex items-center text-lg gap-2">
            <AiOutlineMail />
            Email: {email}
          </p>
          <p className="flex  text-lg gap-2">
            <AiTwotoneHome className="mt-1" />
            Address: {address}
          </p>
          <button
            onClick={() => handleApplyJobs(id)}
            className="w-full btn btn-primary text-white"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
