
export function toggleList(listId, imageTriangle) {
    var list = document.getElementById(listId);
    var image = document.getElementById(imageTriangle);
    if (list.style.display === "none") {
        list.style.display = "block";
        image.src = '/Images/triangule down Nosotros.png'
    } else {
        list.style.display = "none";
        image.src = "/Images/triangule right Nosotros.png";
    }
}

