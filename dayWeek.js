// Write a C program to print day of week name using switch case.
const dayNAme = (day) => {
    let dayNAme;
    if (day == 1) {
        dayNAme = 'sat'
    }
    else if (day == 2) {
        dayNAme = 'sun'
    }
    else if (day == 3) {
        dayNAme = 'mon'
    }
    else if (day == 4) {
        dayNAme = 'mon'
    }
    else if (day == 5) {
        dayNAme = 'thu'
    }
    else if (day == 6) {
        dayNAme = 'wed'
    }
    else {
        dayNAme = 'Friday'
    }
    return dayNAme;
}
const result = dayNAme(7);
console.log(result)