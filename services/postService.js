import axios from "axios";

api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const getPosts = () => {
  return api.get("/posts");
};

export const getPostById = (id) => {
  return api.get(`/posts/${id}`);
};

export const getCommentsByPostId = (id) => {
  return api.get(`/posts/${id}/comments`);
};
