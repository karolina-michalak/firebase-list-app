const bookList = document.querySelector('#book-list')
const form = document.querySelector('#add-book-form')

//create element and render book
function renderBook(doc){
    let li = document.createElement('li')
    let title = document.createElement('span')
    let author = document.createElement('span')
    let x = document.createElement('div')

    li.setAttribute('data-id', doc.id)
    title.textContent = doc.data().title
    author.textContent = doc.data().author
    x.textContent = 'x'

    li.appendChild(title)
    li.appendChild(author)
    li.appendChild(x)

    bookList.appendChild(li)

    //deleting data
    x.addEventListener('click', e => {
        let id = e.target.parentElement.getAttribute('data-id')
        
    })
}

//getting data
db.collection('books').get()
    .then((snapshot) => {
        snapshot.docs.forEach(doc => {
            renderBook(doc)
        })
    })


//saving data
form.addEventListener('submit', e => {
    e.preventDefault()
    db.collection('books').add({
        title: form.title.value, 
        author: form.author.value
    })
    form.title.value = ''
    form.author.value = ''
})