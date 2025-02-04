export const renderAuthor = (id, name) => {
  const authorsList = document.querySelector('#authors-list')

  // create a new list item for the current author
  // put the id of the author on the list item
  const authorElement = document.createElement('li');
  authorElement.id = `author-num-${id}`;
  authorElement.classList.add('author-li');
  authorsList.append(authorElement);

  // add the authors name to the list item 
  const nameHeading = document.createElement('h3');
  nameHeading.textContent = name;
  authorElement.append(nameHeading);

  // add a list for the author's books
  const booksUl = document.createElement('ul');
  booksUl.classList.add('books-list')
  booksUl.innerHTML = 'No books have been added for this author.';
  authorElement.append(booksUl)
};


export const renderBooks = (id, books) => {
  // use the id of the author to find the appropriate author li
  // and the ul.books-list inside that li
  const booksUl = document.querySelector(`#author-num-${id}>ul.books-list`);

  // if somehow this is invoked when no books exist, return
  if (books.length === 0) {
    return;
  }

  // otherwise, empty the list and refill it with books from the author
  booksUl.innerHTML = '';
  books.forEach((book) => {
    const li = document.createElement('li');
    li.textContent = book.title;
    booksUl.append(li);
  });
}


export const updateDropDown = (allAuthors) => {
  let authorSelect = document.querySelector('#authors-select')

  authorSelect.innerHTML = '';

  // Options should look like this:
  // <option value="1">bell hooks</option>
  allAuthors.forEach(author => {
    const option = document.createElement('option');
    option.textContent = author.name
    option.value = author.id;
    authorSelect.append(option);
  });
}
