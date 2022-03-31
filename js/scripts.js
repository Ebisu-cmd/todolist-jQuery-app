function newItem () {
    // add new item to list of items
    let li = $('<li></li>')
    inputValue = $('#input').val();
    li.append(document.createTextNode(inputValue));
    if(inputValue === '') {
        alert('You must write something!');
    }
    else {
        $('#list').append(li);
    }

    
}