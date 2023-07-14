interface Bird {
    type: "bird"
    flyingSpeed: number;
}

interface Horse {
    type: "horse"
    runningSpeed: number;
}

type Animal = Bird | Horse;

// Unlike class, you cannot use instanceOf for interfaces as they are NOT compiled to JS

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;    
    }
    console.log("Moving at speed: " + speed);
}

moveAnimal( {type: 'bird', flyingSpeed: 10} );