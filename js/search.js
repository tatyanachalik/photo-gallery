// function that takes a user's input and displays appropriate photos in gallery

function searchPhotos() {
    // get search value from search box
    let searchVal = document.getElementById('search');
    searchVal = searchVal.value.toUpperCase();
    let image = document.getElementsByClassName('photo');
 
    // loop through 12 images to find caption matches to search value
    // display those matches and hide the rest
    for (let i = 0 ; i < 12; i++) {
        let grabCaption = image[i].getAttribute('data-caption');
        grabCaption = grabCaption.toUpperCase();

        if (grabCaption.includes(searchVal)){
            image[i].style.display = 'inherit';
        } else {
            image[i].style.display = 'none';
        }

}

}