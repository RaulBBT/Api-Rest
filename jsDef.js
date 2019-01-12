var superContador=3;
var div5Pelis;
var posters = new Array();
var titulos = new Array();
var anos = new Array();
var w=0;
var s=0;
comprobador=false;
$(document).ready(function() {
	$(window).scroll(function() {
			if($(window).scrollTop() + $(window).height() >= $(document).height()-10) {
				var peticionEnCurso = false;
				if (!peticionEnCurso){
					peticionEnCurso=true;
					$('img#cargando').show();
				$.getJSON("http://www.omdbapi.com/?apikey=234b163d&s="+$("input").val()+"&page="+superContador, function(pelis){
					$('img#cargando').hide('2000');
					for (peli of pelis.Search){
						posters[w] = peli.Poster;
						titulos[w] = peli.Title;
						anos[w]= peli.Year;
						w++;
					}
					generar(pelis);
				});
				superContador++;
				peticionEnCurso=false;  
				}
			}
	});
	$("#buscar").click(function() {
		if(comprobador){
			$("#contenedor").empty();
			posters.splice(0, posters.length);
			titulos.splice(0, titulos.length);
			anos.splice(0, anos.length);
		}
		$.getJSON("http://www.omdbapi.com/?apikey=234b163d&s="+$("input").val()+"&page="+1, function(pelis){
			for (peli of pelis.Search){
			posters[w] = peli.Poster;
			titulos[w] = peli.Title;
			anos[w]= peli.Year;
			w++;
		}
			generar(pelis);
			generar(pelis);
		});
		comprobador=true;
	});
});
function generar(pelis){
	div5Pelis=$("<div id='div5Pelis'></div>")
		
		for (var x=0;x<5;x++){
			div5Pelis.append($("<div id='divPeli'><img src="+posters[s]+"><p><h2>"+titulos[s]+"</h2></p><p>"+anos[s]+"</p></div>"));
			s++;
		}
		$("#contenedor").append(div5Pelis);
}