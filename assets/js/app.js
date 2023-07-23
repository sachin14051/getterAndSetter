let cl = console.log;

// Accessor Property
// In JavaScript, accessor properties are methods that get or set the value of an object.
// For that, we use these two keywords:

// get - to define a getter method to get the property value
// set - to define a setter method to set the property value

//get method
//must written return keyword
//no paramter add

let user = {
    fname: "jhon",
    lname: "dow",

    get fullName() {
        return `this is ${user.fname} ${user.lname}`
    }

}
cl(user.fullName)






// setter/////////////
// set method one parameter add
//return keyword not used


let person = {
    fname: "jhon",
    lname: "dow",

    // get chnageName(){
    //      return this.fname
    // },
    set chnageName(n) {
        this.fname = n
    }
}
person.chnageName = "tony"
cl(person)