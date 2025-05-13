import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000',
});

// Fetch all categories
export const fetchCategories = async () => {
  const response = await API.get('/categories/');
  return response.data;
};

// Fetch all products
export const fetchProducts = async () => {
  const response = await API.get('/products/');
  return response.data;
};

// Fetch all reviews
export const fetchReviews = async () => {
  const response = await API.get('/reviews/');
  return response.data;
};
