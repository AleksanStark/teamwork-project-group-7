import axios from 'axios';

export async function fetchReviews() {
  try {
    const BASE_URL = 'https://portfolio-js.b.goit.study/api/reviews';
    const response = await axios.get(BASE_URL);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Not found', error);
    throw error;
  }
}
fetchReviews();

const posts = {
  email: '',
  comment: '',
};

export async function CreatePost(post) {
  try {
    const BASE_URL = 'https://portfolio-js.b.goit.study/api/requests';
    const response = await axios.post(BASE_URL, post);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Not found', error);
    throw error;
  }
}
