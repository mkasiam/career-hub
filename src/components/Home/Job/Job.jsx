const Job = ({ jobCategory }) => {
  const { id, logo, category_name, availability } = jobCategory;
  return (
    <div className="spaace-y-4">
      <div className="p-2 mb-3">
        <img className="w-[40px] " src={logo} alt="" />
      </div>
      <p className="text-lg font-medium mb-2">{category_name}</p>
      <p>{availability}</p>
    </div>
  );
};

export default Job;
