const display = document.querySelector('.display');
const add = document.querySelector('.add');
// const remove = document.querySelector('.remove');
const dialog = document.querySelector('.dialog');
const submit = document.querySelector('.submit');
const cancel = document.querySelector('.cancel');
const form = document.querySelector('form');

const myLibrary = [];

function Book(title, author, yearPublished) {
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
  this.id = self.crypto.randomUUID();
}

function addBookToLibrary(t, a, y) {
  myLibrary.push(new Book(t, a, y));
}

myLibrary.forEach(item => {
  const newDiv = document.createElement('div');

  const title = document.createElement('h3');
  title.textContent = item.title;
  newDiv.appendChild(title);

  const author = document.createElement('p');
  author.textContent = item.author;
  newDiv.appendChild(author);

  const yearPublished = document.createElement('p');
  yearPublished.textContent = item.yearPublished;
  newDiv.appendChild(yearPublished);

  const id = document.createElement('p');
  id.textContent = item.id;
  newDiv.appendChild(id);

  display.appendChild(newDiv);
});

add.addEventListener('click', () => {
  dialog.classList.add('show');
});

// remove.addEventListener('click', () => {
//   // Do something
// })

cancel.addEventListener('click', (e) => {
  dialog.classList.remove('show');
  e.preventDefault();
});

form.addEventListener('submit', (e) => {
  const formData = new FormData(form);
  const title = formData.get('title');
  const author = formData.get('author');
  const yearPublished = formData.get('year-published');

  addBookToLibrary(title, author, yearPublished);

  // myLibrary.forEach(item => {
  //   const newDiv = document.createElement('div');
  
  //   const title = document.createElement('h3');
  //   title.textContent = item.title;
  //   newDiv.appendChild(title);
  
  //   const author = document.createElement('p');
  //   author.textContent = item.author;
  //   newDiv.appendChild(author);
  
  //   const yearPublished = document.createElement('p');
  //   yearPublished.textContent = item.yearPublished;
  //   newDiv.appendChild(yearPublished);
  
  //   const id = document.createElement('p');
  //   id.textContent = item.id;
  //   newDiv.appendChild(id);
  
  //   display.appendChild(newDiv);
  // });

  e.preventDefault();

  form.reset();
})