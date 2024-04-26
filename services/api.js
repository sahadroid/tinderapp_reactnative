import http from "../http-common";

const fetchData = async () => {
  try {
    const response = await http.get("/people");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

const reviewPicture = async (obj) => {
  try {
    const response = await http.post("/review", obj);
    return response.data;
  } catch (error) {
    throw new Error("Failed to post data");
  }
};

const api = {
  fetchData,
  reviewPicture,
};

export default api;
