function newItem() {
    // add new item to list of items
    inputValue = $('#input').val();
    let li = $('<li></li>').append(document.createTextNode(inputValue));
    if (inputValue === '') {
        alert('You must write something!');
    }
    else {
        $('#list').append(li);
    }

    // crossing out an item from the list of items
    li.on('dblclick', function () {
        li.toggleClass('strike');
    });

    // Deleting an item from the list of item
    let crossOutButton = $('<crossOutButton></crossOutButton>').append(document.createTextNode('X'));
    li.append(crossOutButton);
    crossOutButton.on('click', function () {
        li.addClass('delete');
    })

    // Reordering items on the list
    $('#list').sortable();
}


$('form').on('submit', function(event) {
    event.preventDefault();
    newItem();
});