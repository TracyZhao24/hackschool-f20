const boilWater = () => {
    console.log('Start boiling!');
    setTimeout( () => {              
        console.log('Water boiled!');
        addRamen();
    }, 3000);                        
};


const washVeggies = () => {
    console.log('Start washing!');
    setTimeout( () => {              
        console.log('Veggies washed!');
        addVeggies();
    }, 2000);                        
};                                    

function addRamen() {
    console.log('Ramen in da wata~');
};

function addVeggies() {
    console.log('Veggies in da pan~');
};

boilWater();
washVeggies();