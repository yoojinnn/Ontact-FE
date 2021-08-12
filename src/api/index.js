import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_ADDRESS,
});

async function getWords(userId) {
  // 워드클라우드
  try {
    const response = await instance.get(`/api/word/?user_id=${userId}`);
    return response;
  } catch (err) {
    console.log(err);
  }
}

async function getUserInfo(userId) {
  // 사용자 정보
  try {
    const response = await instance.get(`/api/user/?user_id=${userId}`);
    return response;
  } catch (err) {
    console.log(err);
  }
}

async function getDatas(userId) {
  // 첫화면 평균온도
  try {
    const response = await instance.get(`/api/sentence?user_id=${userId}`);
    return response;
  } catch (err) {
    console.log(err);
  }
}

async function getGraph(userId) {
  // 그ㄹㅐ프
  try {
    const response = await instance.get(`/api/temp_avg/?user_id=${userId}`);
    return response;
  } catch (err) {
    console.log(err);
  }
}

async function getDates(userId) {
  // 캘린더
  try {
    const response = await instance.get(`/api/calendar/?user_id=${userId}`);
    return response;
  } catch (err) {
    console.log(err);
  }
}

async function getTem(userId) {
  // 온중냉
  try {
    const response = await instance.get(`/api/word_temp?user_id=${userId}`);
    return response;
  } catch (err) {
    console.log(err);
  }
}

export { getWords, getUserInfo, getDatas, getDates, getGraph, getTem };
