function Book(title, author, description, pages, read){
this.title = title;
this.author = author;
this.description = description;
this.pages = pages;
this.read = read;
}
Book.prototype.showInfo = function(){
    return `Title: ${this.title}, Author: ${this.author}, Desc: ${this.description}, Pages ${this.pages} and is it read? ${this.read}!`;
}



const books = [];
const searchBooksButton = document.querySelector('#searchBtn');
const addBookButton = document.querySelector('#addBtn');
const modal = document.querySelector('.modal-container');
const closeModalButton = document.querySelector('.close');
const addBookModalButton = document.querySelector('.add');
const bookForm = document.querySelector('#bookForm');
const booksList = document.querySelector('.books');

const titleField = document.querySelector('#title');
const authorField = document.querySelector('#author');

function addBookToThePage(book){
    console.log(book.title, book.author);
    const bookItem = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const description = document.createElement('p');
    const pages = document.createElement('p');

    bookItem.classList.add('book-card');
    title.classList.add('title');
    title.textContent = `Title: ${book.title}`;
    author.classList.add('author');
    author.textContent = `Authot: ${book.author}`;
    description.classList.add('description');
    description.textContent = `Description: ${book.description}`
    pages.classList.add('pages');
    pages.textContent = `Pages: ${book.pages}`;
    bookItem.appendChild(title);
    bookItem.appendChild(author);
    bookItem.appendChild(description);
    bookItem.appendChild(pages);
    bookItem.dataset.index = books.length - 1;

    booksList.appendChild(bookItem);
    console.log('okej je')
}


const harryPotterBook = new Book('Harry Potter V', 'J.R.R', 'Best book wizard booo', 705, true);
console.log(harryPotterBook.showInfo());

addBookButton.addEventListener('click', e => {
    console.log('ok')
    modal.style.display = 'block';
})

closeModalButton.addEventListener('click', e => {
    modal.style.display = "none";
})

addBookModalButton.addEventListener('click', e => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const description = document.querySelector('#descripton').value;
    const pages = document.querySelector('#pages').value;


    const newBook = new Book(title, author, description, pages, null);
    books.push(newBook);
    addBookToThePage(newBook);
    modal.style.display = "none";
})