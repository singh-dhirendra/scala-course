

function displayPopup(heroImageSrc, hotelName) {
    $("#heroImage").attr("src", heroImageSrc);
    $("h4.modal-title").text(hotelName);
    $("#heroImageModal").modal({show: true})
}
