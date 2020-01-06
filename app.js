db.collection('books').get()
    .then((snapshot) => {
        console.log(snapshot.docs)
    })