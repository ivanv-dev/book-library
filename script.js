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



let books = [];
const searchBooksButton = document.querySelector('#searchBtn');
const addBookButton = document.querySelector('#addBtn');
const modal = document.querySelector('.modal-container');
const closeModalButton = document.querySelector('.close');
const addBookModalButton = document.querySelector('.add');
const bookForm = document.querySelector('#bookForm');
const booksList = document.querySelector('.books');
const bookDeleteBtn = document.querySelector('.delete');

const titleField = document.querySelector('#title');
const authorField = document.querySelector('#author');

function addBookToThePage(book){
    console.log(book.title, book.author);
    const bookItem = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const description = document.createElement('p');
    const pages = document.createElement('p');
    const read = document.createElement('p');
    const deleteBtn = document.createElement('button');


    const readMessage = book.read ? 'it is read' : 'not read yet';


    bookItem.classList.add('book-card');
    title.classList.add('title');
    title.textContent = `Title: ${book.title}`;
    author.classList.add('author');
    author.textContent = `Authot: ${book.author}`;
    description.classList.add('description');
    description.textContent = `Description: ${book.description}`
    pages.classList.add('pages');
    pages.textContent = `Pages: ${book.pages}`;

    read.classList.add('read');
    read.textContent = `Read status: ${readMessage}`;

    deleteBtn.classList.add('delete');
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', e => {
        bookDeleteHelper(e);
      })

    bookItem.appendChild(title);
    bookItem.appendChild(author);
    bookItem.appendChild(description);
    bookItem.appendChild(pages);
    bookItem.appendChild(read);
    bookItem.appendChild(deleteBtn);

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
    const read = document.querySelector('#read').checked;


    const newBook = new Book(title, author, description, pages, read);
    books.push(newBook);
    addBookToThePage(newBook);
    bookForm.reset();
    modal.style.display = "none";
})

bookDeleteBtn

function bookDeleteHelper(e){
    const elementForRemoval = e.target.parentElement;
    const indexForRemoval = elementForRemoval.dataset.index;
    console.log(books, 'prve books')
    books = books.filter((book, index) => {
        return index != indexForRemoval;
    })
    console.log(books, 'books a sada')
    console.log(e.target.parentElement.remove(), 'hmm');
}