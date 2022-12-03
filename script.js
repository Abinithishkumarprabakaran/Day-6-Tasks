console.log("-------------Movie-------------");

class Movie{
    constructor(title, studio, rating){
        this.title = title;
        this.studio = studio;
        if(rating == undefined){
            this.rating = "PG";
        }
        else{
            this.rating = rating;
        }
    }

    getPG(arr){
        let res = [];
        for(let i = 0; i<arr.length; i++){
            if(arr[i].rating == "PG"){
                res.push(arr[i]);
            }
        }
        return res;
    }
}

let mov1 = new Movie("Ae dil Hai Mushkil","ABC","PG12")   // mov1, mov2, mov3 is all instance of Class Movie!..
let mov2 = new Movie("Half Girlfriend", "DC")
let mov3 = new Movie("Abi","jk");
let arr = [mov1, mov2, mov3];

console.log(mov1);
console.log(mov2);

console.log(mov1.getPG(arr));

// d) Write a piece of code that creates an instance of the 
// class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

let casino = new Movie("Casino Royale", "Eon Productions", "PG13");

console.log(casino);

console.log("-------------Circle-------------");

class Circle{
    constructor(radius, colour){
        this.radius = radius;
        this.colour = colour;
    }

    get Radius(){
        return this.radius;
    }

    set Radius(radius){
        this.radius = radius;
    }

    get Colour(){
        return this.colour;
    }

    set Colour(colour){
        this.colour = colour;
    }

    get AreaCircle(){
        return Math.PI * this.radius * this.radius;
    }

    get CircumCircle(){
        return 2 * Math.PI * this.radius;
    }

    get toString(){
        return `The radius of the circle is ${this.radius} and the colour of the circle is ${this.colour}`
    }
}

let obj = new Circle(4, 'red');
console.log(obj.AreaCircle);      // Area of the circle
console.log(obj.CircumCircle);    // Circumference of the circle

obj.radius = 2;                   // set radius
console.log(obj.Radius);          // get radius

obj.Colour = 'blue';              // set colour
console.log(obj.Colour);          // get colour

console.log(obj.toString);

console.log("---------------Person Details-----------------");

class Person{
    constructor(name, age, gender, designation, contact_num, salary){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.designation = designation;
        this.contact_num = contact_num;
        this.salary = salary;
    }
}

let person1 = new Person("Abi", 22, "Male", "Developer", 9999999999, 50000);
console.log(person1);

console.log("---------------Calculate Uber Price-----------------");

class UberPrice{
    constructor(kmetres){
        this.kmetres = kmetres;
    }

    get Price(){
        return this.kmetres * 10;
    }
}

let ride1 = new UberPrice(10);
console.log(ride1.Price);

let ride2 = new UberPrice(20);
console.log(ride2.Price);