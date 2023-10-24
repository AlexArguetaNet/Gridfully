
window.onload = () => {

    try {

        var popupElements = document.getElementsByClassName('popup');

    } catch (err) {
        console.log(err);
    }

}

// Opens a popup form container
const openPopUp = (event) => {

    const popupElement = document.querySelectorAll(`.popup.${event.target.classList[0]}`)[0];

    if (!popupElement.style.display || popupElement.style.display == 'none') {
        popupElement.style.display = 'block';
    }

}

// Closes a popup form container
const closePopUp = (event) => {

    if (event.target.classList.contains('close-button')) {
        var popupElement = document.getElementsByClassName(`popup ${event.target.classList[1]}`)[0];
        popupElement.style.display = 'none';
    } else if (event.target.classList.contains('popup')) {
        event.target.style.display = 'none';
    }

}


// Creates new column
const newColumn = (event) => {
    
    event.preventDefault();

    const tableElem = document.getElementById('sheet');
    
    var newColumn = document.createElement('th');
    newColumn.innerHTML += '<input class="column-heading" type="text">';

    tableElem.appendChild(newColumn);

}

// Creates a new entry
const newEntry = (event) => {

    event.preventDefault();

    // Get the number of columns
    const tableElem = document.getElementById('sheet');
    const columnCount = tableElem.getElementsByTagName('th').length;
    
    const newEntry = document.createElement('tr');
    newEntry.setAttribute('class', 'entry');

    for (var i = 0; i < columnCount; i++) {

        var cell = document.createElement('td');
        cell.setAttribute('class', 'cell');
        cell.innerHTML += `<input type="text">`;
        newEntry.appendChild(cell);

    }

    tableElem.appendChild(newEntry);


}



