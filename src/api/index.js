import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://ec2-13-125-246-85.ap-northeast-2.compute.amazonaws.com:8080',
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
