import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
const Token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjJlNzA2Zjk1YTNlYWY5NGViZDg2OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMDQzOTQwMCwiZXhwIjoxNzEwNjk4NjAwfQ.tnLkT2L4clEAKCQ8mmc5HZw9R-nPV0HNmE-WOBRBKj4';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {Authorization:`Bearer ${Token}` },
});
