import './style.css'
import { renderAuthor, renderBooks, updateDropDown } from './utils/render-functions.js';
import Author from './models/has-many.js';

/* 
After a user submits an authors name, generate a new Author
instance, add their name to the drop down options, and render
the author in the collection below
*/
const handleAuthorSubmit = (e) => {
  e.preventDefault();
  // get inputs from the form
  const form = e.target;
  const name = form.name.value;

  // create a new Author
  const author = new Author(name);

  // Render updated data
  updateDropDown(Author.getAllAuthors());
  renderAuthor(author.id, author.name);

  form.reset();
}

/* 
After a user chooses an author and enters a book title, add 
the book title to the chosen's author's list
*/
const handleBookSubmit = (e) => {
  e.preventDefault();

  // get inputs from the form
  const form = e.target;
  const id = form.id.value;
  const title = form.title.value;

  // find the author by id and add a new book to their list
  const author = Author.findBy(Number(id));
  author.addBook(title);
  renderBooks(author.id, author.getBooks());

  // just reset the title
  form.title.value = '';
}

const main = () => {
  document.getElementById('author-form').addEventListener('submit', handleAuthorSubmit);
  document.getElementById('book-form').addEventListener('submit', handleBookSubmit);
}

main();