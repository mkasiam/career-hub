const getIdsFromLocalStorage = () => {
  const appliedJobs = localStorage.getItem("jobs");
  if (appliedJobs) {
    return JSON.parse(appliedJobs);
  }
  return [];
};

const saveIdsToLocalStorage = (id) => {
  const appliedJobs = getIdsFromLocalStorage();
  const exists = appliedJobs.find((job) => job.id === id);
  if (!exists) {
    appliedJobs.push(id);
    localStorage.setItem("jobs", JSON.stringify(appliedJobs));
  }
};

export { saveIdsToLocalStorage, getIdsFromLocalStorage };
