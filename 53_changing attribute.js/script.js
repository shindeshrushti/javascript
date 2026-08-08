let img = document.getElementById("img");

img.src = "dog.jpg";

console.log(img.getAttribute("src"));

img.setAttribute("width", "300");

img.removeAttribute("width");