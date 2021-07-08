import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.API_ADDRESS,
});

async function searchUser(userId) {
  try {
    const response = await instance.get(`/api/sentence?user_id=${userId}`);
    return response;
  } catch (err) {
    console.log(err);
  }
}

export { searchUser };
