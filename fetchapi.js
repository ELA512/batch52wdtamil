const API_URL = "https://jsonplaceholder.typicode.com";

async function sendRequest(url, init = {}) {
  try {
    const response = await fetch(url, init);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  } catch (err) {
    throw new Error(err);
  }
}

const getPosts = _ => sendRequest(`${API_URL}/post`);
const getUsers = _ => sendRequest(`${API_URL}/users`);
const getComments = _ => sendRequest(`${API_URL}/comments`);

async function getData() {
  try {
    const posts = await getPosts();
    const users = await getUsers();
    const comments = await getComments();
    console.log(posts, users, comments);
  } catch(err) {
    console.error(err);
  }
}