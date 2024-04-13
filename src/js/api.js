import axios from 'axios';

export async function fetchReviews() {
  const BASE_URL = 'https://portfolio-js.b.goit.study/api/reviews';
  const response = await axios.get(BASE_URL);
  return response.data;
}

export async function CreatePost(post) {
  const BASE_URL = 'https://portfolio-js.b.goit.study/api/requests';
  const response = await axios.post(BASE_URL, post);
  console.log(response);
  return response.data;
}
