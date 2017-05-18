var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];

var contenedor = document.getElementsByClassName('otras-imagenes')[0];

//Se recorre el arreglo:
pictures.forEach(function(f){
	var img = document.createElement('img'); //Creo un elemento imagen
	img.setAttribute("src", f); //Le doy el source o fuente de las imagenes
	img.setAttribute("class","fotos-pandas"); //Le doy una clase
	contenedor.appendChild(img); //Lo inserto dentro del contenedor creado en html	
})