import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_ADDRESS,
});

// async function searchUser(userId) {
//   try {
//     const response = await instance.get(`/api/sentence?user_id=${userId}`);
//     return response;
//   } catch (err) {
//     console.log(err);
//   }
// }

async function getWords(userId) {
  try {
    const response = await instance.get(`/api/word/?user_id=${userId}`);
    return response;
  } catch (err) {
    console.log(err);
  }
}

async function getUserInfo(userId) {
  try {
    const response = await instance.get(`/api/user/?user_id=${userId}`);
    return response;
  } catch (err) {
    console.log(err);
  }
}

export { getWords, getUserInfo };
