const catNames = new Promise(function(resolve, reject){
    const catNames = ['kan','kibo','kiba','kira']
    resolve(catNames)
    reject('Error')
});

catNames
    .then(function(names){
        console.log('Nombres de gatos', names)
    })
    .catch(function(error){
        console.log('error', error)
    })
    .finally(function(){
        console.log('Terminado')
    })