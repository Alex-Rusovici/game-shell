import axios from 'axios';

const baseUrl = 'https://plastic-elite-bayberry.glitch.me/';

export const client = axios.create({
  baseURL: baseUrl,
});
