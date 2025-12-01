const listContainer = document.getElementById('book-list-container');

bookSettings.forEach(book => {
    const listItem = document.createElement('li');
    
    const bookLink = document.createElement('a');
    bookLink.href = `book-details.html?id=${book.id}`; 
    bookLink.style.textDecoration = 'none'; 
    
    let content = `<b>${book.title}</b> (${book.shortDetails})`;
    
    if (book.isRare) {
        content = `✨ ${content}`;
        listItem.style.fontWeight = 'bold'; 
    }
    
    bookLink.innerHTML = content;
    listItem.appendChild(bookLink);
    listContainer.appendChild(listItem);
});
