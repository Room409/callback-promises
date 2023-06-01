const catNames = new Promise(function(resolve, reject){
    const catNames = ['kan','kibo','kiba','kira']
    resolve(catNames) //Camino que se ejecutara si se llega a cumplir la promesa
    reject('Error')  //Camino que se ejecutara si no se llega a cumplir la promesa
});

catNames
    .then(function(names){
        console.log('Nombres de gatos', names) 
    }) //Si la promesa se cumple .then se ejecutara
    .catch(function(error){
        console.log('error', error)
    }) //Si la promesa no se ejecuta .catch se ejecutara
    .finally(function(){
        console.log('Terminado')
    }) //Finally se ejecuta cuando la promesa se ejecuto y se finalizo