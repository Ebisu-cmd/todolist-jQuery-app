function newItem () {
    // add new item to list of items
    inputValue = $('#input').val();
    let li = $('<li></li>').append(document.createTextNode(inputValue));
    if(inputValue === '') {
        alert('You must write something!');
    }
    else {
        $('#list').append(li);
    }


    // crossing out an item from the list of items
    li.on('dblclick', function () {
        li.toggleClass('strike');
    });

 

}