class Pelicula
{
    constructor(title, overview, vote_average, release_date, poster_path)
    {
        this.title = title;
        this.overview = overview;
        this.vote_average = vote_average;
        this.release_date = release_date;
        this.poster_path = IMAGE_BASE+poster_path;
    }
    DibujaPopular(objetoPopular)
    {
        document.querySelector('.movie').innerHTML= "<img src='"+ this.poster_path +"' class='imagen'>" +
        "<div class='contenedor'>" + "<h3 class='titulo'>" + this.title + "</h3>" +
        "<p class='sinopsis'>" + "Sinopsis: " + this.overview + "</p>" + 
        "<p class='nota'>" + "Calificación: "+this.vote_average + "</p>" +
        "<p class='fecha'>" + "Estreno: " + this.release_date + "</p>"
    }
    DibujoCartelera(objetoCartelera)
    {
        
    }
}