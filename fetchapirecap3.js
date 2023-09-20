// Server URL
const API_URL = "https://jsonplaceholder.typicode.com";

// Handles All API Requests
const sendRequest = (url, opts = {}) => fetch(url, opts).then(handleResponse);

// Handles All API Responses
const handleResponse = (response) => {
  console.log("Response:", response);
  if (!response.ok) {
    throw new Error(`Cannot Fetch Data`);
  }
  return response.json();
};

// Get All Posts
const getAllPosts = (_) => sendRequest(`${API_URL}/posts`);

// Get Post By Id
const getPostById = (id) => sendRequest(`${API_URL}/posts/${id}`);

// Get All Users
const getAllUsers = (_) => sendRequest(`${API_URL}/users`);

// Get User By Id
const getUserById = (id) => sendRequest(`${API_URL}/users/${id}`);

// Get All Comments
const getAllComments = (_) => sendRequest(`${API_URL}/comments`);

// Get All Comments
const getCommentById = (id) => sendRequest(`${API_URL}/comments/${id}`);

// Get All Comments By Post Id
const getAllCommentsByPostId = (postId) =>
  sendRequest(`${API_URL}/posts/${postId}/comments`);