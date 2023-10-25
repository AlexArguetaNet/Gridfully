
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

    const sheetHeading = document.getElementById('sheet-heading');
    const tableElem = document.getElementById('sheet');
    const entryCount = tableElem.getElementsByTagName('tr').length - 1;

    // Check if there are entires
    if (entryCount > 0) {

        // Get each row and append a text input element
        const entires = document.getElementsByClassName('entry');

        for (var i = 0; i < entires.length; i++) {
            var cell = document.createElement('td');
            cell.setAttribute('class', 'cell');
            cell.innerHTML += `<input type="text" name="entry${i}">`;
            entires[i].appendChild(cell);
        }

    } 
    
    var newColumn = document.createElement('td');
    newColumn.innerHTML += '<input class="column-heading" type="text" name="column">';

    sheetHeading.appendChild(newColumn);

}

// Creates a new entry
const newEntry = (event) => {

    event.preventDefault();

    // Get the number of columns
    const tableElem = document.getElementById('sheet');
    const sheetHeading = document.getElementById('sheet-heading');
    const columnCount = sheetHeading.getElementsByTagName('td').length;

    if (columnCount == 0) {

    } else {

        const newEntry = document.createElement('tr');
        newEntry.setAttribute('class', 'entry');
    
        for (var i = 0; i < columnCount; i++) {
    
            var cell = document.createElement('td');
            cell.setAttribute('class', 'cell');
            cell.innerHTML += `<input type="text" name="entry${i}">`;
            newEntry.appendChild(cell);
    
        }
    
        tableElem.appendChild(newEntry);

    }
    
}



