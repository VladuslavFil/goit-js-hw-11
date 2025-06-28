import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';


const form = document.querySelector(".form")
const input = document.querySelector(".search-inp")

form.addEventListener('submit', async e => {
  e.preventDefault();

  const query = input.value.trim();

  if (!query) {
    iziToast.warning({ message: 'Enter something!', position: 'topRight' });
    return;
    }
    
  showLoader();
  clearGallery();

  try {
    const data = await getImagesByQuery(query);

    if (data.hits.length === 0) {
      iziToast.info({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        color: 'red'
      });
      return;
    }

    createGallery(data.hits);
  } catch (err) {
    iziToast.error({ message: 'Something went wrong!', position: 'topRight' });
    console.error(err);
  } finally {
    hideLoader();
  }
});