// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryListEl = document.querySelector('.gallery');

const markup = createGalleryItemsMarkup(galleryItems);

galleryListEl.innerHTML = markup;

function createGalleryItemsMarkup(items) {
  return items.map(({ original, preview, description }) => {
    return `<li class='gallery__item'>
                <a class='gallery__link'
                href='${original}'>
                    <img class='gallery__image'
                    src='${preview}'
                    alt='${description}' />
                </a>
            </li>`;
  }).join('');
}

new SimpleLightbox('.gallery a',
  { captionsData: 'alt', captionPosition: 'bottom', captionDelay: 300 });