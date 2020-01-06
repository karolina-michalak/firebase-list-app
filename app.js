const bookList = document.querySelector('#book-list')

//create element and render book
function renderBook(doc){
    let li = document.createElement('li')
    let title = document.createElement('span')
    let author = document.createElement('span')

    li.setAttribute('data-id', doc.id)
    title.textContent = doc.data().title
    author.textContent = doc.data().author

    li.appendChild(title)
    li.appendChild(author)

    bookList.appendChild(li)
}

db.collection('books').get()
    .then((snapshot) => {
        snapshot.docs.forEach(doc => {
            renderBook(doc)
        })
    })