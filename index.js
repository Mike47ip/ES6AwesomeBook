import BookCollection from './modules/BookList.js';
import Navpage from './modules/pageNav.js';
import { DateTime } from './modules/luxon.js';

const bookCollection = new BookCollection();
const nav = new Navpage();

const addBookForm = document.getElementById('addBookForm');
addBookForm.addEventListener('submit', (event) => bookCollection.addBook(event));

bookCollection.displayBooks();

const dateTime = document.querySelector('.date-time');
const now = DateTime.now();
dateTime.innerHTML = `${now.day}/${now.month}/${now.year} ${now.hour}:${now.minute}`;

window.onload = (nav);
