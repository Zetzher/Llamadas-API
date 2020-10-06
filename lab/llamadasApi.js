//Iteration 1 -- Chuck Norris

//Solo hay que enseñar una broma en la consola y acceder a la broma.

fetch("http://api.icndb.com/jokes/random")
        .then((response) => response.json())
        .then((data) => console.log(data.value.joke));



//Iteration 2 -- Dungeon and Dragons

//2.1 Traer todas las clases
fetch("https://www.dnd5eapi.co/api/classes")
        .then((response) => response.json())
        .then((data) => console.log(data.results.map(data => data.name)));


//2.2 Traer los nombres de los equipos

        fetch("https://www.dnd5eapi.co/api/equipment")
        .then((response) => response.json())
        .then((data) => console.log(data.results.map(data => data.name)));

//2.3 Buscar las razas, elegir una a tu elección y que se muestre en la pantalla el string => "Soy Artorias, líder de los <RAZA> y utilizo mi <INDEX> para atemorizar a mis enemigos".

        fetch("https://www.dnd5eapi.co/api/races")
        .then((response) => response.json())
        .then((data) => console.log(`Soy Artorias, líder de los ${data.results[0].name} y utilizo mi ${data.results[0].index} para atemorizar a mis enemigos`, ));

