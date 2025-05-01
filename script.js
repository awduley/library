const display = document.querySelector('.display');

const myLibrary = [
  {
    name: 'Halloweenie',
    author: 'Sam Mam',
    yearPublished: 1965,
    id: self.crypto.randomUUID()
  },
  {
    name: 'The Lobster Man',
    author: 'Martin Spleash',
    yearPublished: 1889,
    id: self.crypto.randomUUID()
  },
];

function Book(name, author, yearPublished) {
  this.name = name;
  this.author = author;
  this.yearPublished = yearPublished;
  this.id = self.crypto.randomUUID();
}

function addBookToLibrary(n, a, y) {
  myLibrary.push(new Book(n, a, y));
}

addBookToLibrary('The Great Pizza', 'Andrew', 2025);
addBookToLibrary('The Great Pizza', 'Andrew', 2025);

myLibrary.forEach(item => {
  const newDiv = document.createElement('div');
  newDiv.textContent = JSON.stringify(item);
  display.appendChild(newDiv);
});