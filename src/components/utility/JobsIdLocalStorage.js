const getIdsFromLocalStorage = () => {
  const appliedJobs = localStorage.getItem("jobs");
  if (appliedJobs) {
    return JSON.parse(appliedJobs);
  }
  return [];
};

const saveIdsToLocalStorage = (id) => {
  const appliedJobs = getIdsFromLocalStorage();
  if (!appliedJobs.includes(id)) {
    appliedJobs.push(id);
    localStorage.setItem("jobs", JSON.stringify(appliedJobs));
  }
};

const removeIdFromLocalStorage = (id) => {
  let appliedJobs = getIdsFromLocalStorage();
  appliedJobs = appliedJobs.filter((jobId) => jobId !== id);
  localStorage.setItem("jobs", JSON.stringify(appliedJobs));
};

export {
  saveIdsToLocalStorage,
  getIdsFromLocalStorage,
  removeIdFromLocalStorage,
};
