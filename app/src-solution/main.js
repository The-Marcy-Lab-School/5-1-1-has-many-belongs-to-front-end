import './style.css'
import { renderAuthor, renderBooks, updateDropDown } from './render-functions.js';
import Author from './models/Author.js';

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
  renderAuthor(author.id, author.name);
  updateDropDown(Author.getAllAuthors());

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

  // Hard Code Some Authors and Books
  const bellHooks = new Author('bell hooks');
  bellHooks.addBook('all about love');

  const jamesBaldwin = new Author('James Baldwin');
  jamesBaldwin.addBook('The Fire Next Time');
  jamesBaldwin.addBook('If Beale Streate Could Talk');

  // Render Everything
  renderAuthor(bellHooks.id, bellHooks.name);
  renderAuthor(jamesBaldwin.id, jamesBaldwin.name);
  updateDropDown(Author.getAllAuthors());

  renderBooks(bellHooks.id, bellHooks.getBooks());
  renderBooks(jamesBaldwin.id, jamesBaldwin.getBooks());
}

main();