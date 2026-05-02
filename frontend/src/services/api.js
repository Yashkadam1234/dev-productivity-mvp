import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const getDevelopers = () => API.get("/developers");
export const getMetrics = (id) => API.get(`/developers/${id}/metrics`);
export const getInterpretation = (id) => API.get(`/developers/${id}/interpretation`);