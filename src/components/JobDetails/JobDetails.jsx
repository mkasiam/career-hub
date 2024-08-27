import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  const jobs = useLoaderData();
  const targetedJob = jobs.find((job) => job.id === +id);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
    salary,
    job_title,
  } = targetedJob;
  const { phone, email, address } = contact_information;
  console.log(phone, email, address);
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
          <p>Salary: {salary}</p>
          <p>Job Title: {job_title}</p>
          <span className="font-bold">Contact Information</span>
          <hr />
          <p>Phone: {phone}</p>
          <p>Email: {email}</p>
          <p>Address: {address}</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
