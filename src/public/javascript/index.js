
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

    if (event.target.classList.contains('popup')) {
        event.target.style.display = 'none';
    }

}

