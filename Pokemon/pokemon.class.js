'use strict';

class Pokemon {
    constructor(image,nombre,hp,experiencia,ataque,ataqueEspecial,defensa)
    {
        this.image = image;
        this.nombre = nombre;
        this.hp = hp;
        this.experiencia = experiencia;
        this.ataque = ataque;
        this.ataqueEspecial = ataqueEspecial;
        this.defensa = defensa;
    }
    static getPokemon(numeroPokemon)
    {
        return HTTP.ajax('GET',
        `https://pokeapi.co/api/v2/pokemon/` + numeroPokemon).then(data => {
            console.log(data)
 
            let nombre = data.name
            console.log(nombre)
            let hp = data.stats[0].base_stat
            console.log(hp);
            let experiencia = data.base_experience
            console.log(experiencia)
            let ataque = data.stats[1].base_stat
            console.log(ataque);
            let defensa = data.stats[2].base_stat
            console.log(defensa)
            let ataqueEspecial = data.stats[3].base_stat
            console.log(ataqueEspecial);
            let image = data.sprites.front_default
            console.log(image)

            let pokemon = new Pokemon(image,nombre,hp,experiencia,ataque, defensa, ataqueEspecial)
            pokemon.PintaPokemon()
           
        }
        )
    }
    PintaPokemon(objetoPokemon)
    {
        document.querySelector('.PokemonImagen').innerHTML="<img src='"+this.image +"' alt='imagen header card' class='card-header'>"
        document.querySelector('.card-title').innerHTML= this.nombre+"<div> "+this.hp+"hp"+"</div>"
        document.querySelector('.card-body-text').textContent= this.experiencia+"  exp"
        document.querySelector('.card-footer').innerHTML=
        "<div class='card-body'>" + "<div class='card-title'>" + "Ataque" + "</div>"+
        "<div class='card-tex'>"+ this.ataque+"K"+ "</div> " + "</div>" +
        "<div class='card-body'>" + "<div class='card-title'>" + "Ataque Especial" + "</div>" + 
        "<div class='card-tex'>" + this.ataqueEspecial+"K" + "</div>" + "</div>" + 
        "<div class='card-body'>" + "<div class='card-title'>" + "Defensa" + "</div>" +
        "<div class='card-tex'>" + this.defensa+"K" + "</div> " + "</div>"
    }
 }