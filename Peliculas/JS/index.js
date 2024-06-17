let página = 1
document.addEventListener("DOMContentLoaded", async function()
{
    let películas = await Cartelera.getNuevasPelículas(página)
    console.log(películas)
})

document.addEventListener("DOMContentLoaded", async function()
{
    let populares = await Populares.getMásPopulares(página)
    console.log(populares)
    document.getElementById('myCarousel').innerHTML = '';
        populares.forEach(item=> {
            const {title, poster_path, vote_average, overview, release_date, original_title} = item;
            const movieEl = document.createElement('div');
            movieEl.classList.add('movie');
            movieEl.innerHTML = `
            
            <img src="${poster_path? IMAGE_BASE+poster_path: "http://via.placeholder.com/1080x1580" }" alt="${title}">

            <div class="movie-info">
            <h3>${title}</h3>
                <div class="Original">Titulo original: ${original_title}</div>
                <div class="fecha">${release_date}</div>
                <span class="Nota">${vote_average}</span>
            </div>

            <div class="overview">

                <h3>Sinopsis</h3>
                ${overview}
            </div>
            `
            document.getElementById('myCarousel').appendChild(movieEl);
        })
});  
document.getElementById('flecha-derecha').addEventListener('click', () => {
	document.querySelector('.principal').scrollLeft += document.querySelector('.principal').offsetWidth;

});

document.getElementById('flecha-izquierda').addEventListener('click', () => {
	document.querySelector('.principal').scrollLeft -= document.querySelector('.principal').offsetWidth;

});
document.querySelector("#Siguiente").addEventListener("click",async function(){
    if( página == 500)
    {
        página = 1
    }
    else
    {
        página = página + 1
    }
    let populares = await Populares.getMásPopulares(página)
    document.getElementById('myCarousel').innerHTML = '';
        populares.forEach(item=> {
            const {title, poster_path, vote_average, overview, release_date, original_title} = item;
            const movieEl = document.createElement('div');
            movieEl.classList.add('movie');
            movieEl.innerHTML = `
            
            <img src="${poster_path? IMAGE_BASE+poster_path: "http://via.placeholder.com/1080x1580" }" alt="${title}">

            <div class="movie-info">
            <h3>${title}</h3>
                <div class="Original">Titulo original: ${original_title}</div>
                <div class="fecha">${release_date}</div>
                <span class="Nota">${vote_average}</span>
            </div>

            <div class="overview">

                <h3>Sinopsis</h3>
                ${overview}
            </div>
            `
            document.getElementById('myCarousel').appendChild(movieEl);
        })
})
document.querySelector("#Anterior").addEventListener("click",async function(){
    if(página == 1)
    {
        página = 500
    }
    else{
        página = página - 1
    }
    let populares = await Populares.getMásPopulares(página)
    document.getElementById('myCarousel').innerHTML = '';
        populares.forEach(item=> {
            const {title, poster_path, vote_average, overview, release_date, original_title} = item;
            const movieEl = document.createElement('div');
            movieEl.classList.add('movie');
            movieEl.innerHTML = `
            
            <img src="${poster_path? IMAGE_BASE+poster_path: "http://via.placeholder.com/1080x1580" }" alt="${title}">

            <div class="movie-info">
            <h3>${title}</h3>
                <div class="Original">Titulo original: ${original_title}</div>
                <div class="fecha">${release_date}</div>
                <span class="Nota">${vote_average}</span>
            </div>

            <div class="overview">

                <h3>Sinopsis</h3>
                ${overview}
            </div>
            `
            document.getElementById('myCarousel').appendChild(movieEl);
        })
})