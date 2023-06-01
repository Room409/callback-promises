function getPets(callback = () => { }) {
    const pets = ['cat', 'dog', 'bird', 'turttle']
    callback(pets);
};

function names(callback = () => { }) {
    const names = 'Doy los nombres'
    callback(names)
};

function petsNames(callback = () => { }) {
    const petName = ['kan', 'kira', 'kiba', 'kibo']
    callback(petName)
}

//callback hell

getPets(function (pets) {
    console.log('pets', pets)

    names(function (names) {
        console.log(names)
    });

    petsNames(function (petName) {
        console.log('Cat Names', petName)
    });
});

