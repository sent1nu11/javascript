var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage:    2810
}

function prequal(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
            return false;
    }
    return true;
}

var worthALook = prequal(taxi);

if (worthALook) {
    console.log("The " + taxi.model + " is worth a look!")
} else {
    console.log("Skip it.")
}