import axios from 'axios';

export default class SearchPhotos {
  constructor() {
    this.personalKey = '35614956-4718a491a419b04b9017fc1bc';
    this.formQuery = '';
    this.image_type = 'photo';
    this.orientation = 'horizontal';
    this.safesearch = 'true';
    this.page = '1';
    this.per_page = '40';
  }

  async getGallery() {
    try {
      const BASE_URL = 'https://pixabay.com/api/?';
      const url = `${BASE_URL}key=${this.personalKey}&q=${this.formQuery}&image_type=${this.image_type}&orientation=${this.orientation}&safesearch=${this.safesearch}&page=${this.page}&per_page=${this.per_page}`;
      const response = await axios.get(url);
      this.incrementPage();
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  get query() {
    return this.formQuery;
  }

  set query(newQuery) {
    this.formQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
