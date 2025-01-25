
// //Revision the Javascript basics 

// //primitives which contain only singe values  and their data types

// let movieName = "Sarikari vaari paata" //string
// let movieGenre = "Drama/ACtion" //string 
// let rating = 4.0;  //number
// let isBlockBluster  = true //boolean

// console.log(movieName, `Which of Data type is: ${typeof movieName}`);

// console.log(movieGenre, `Which of Data type is: ${typeof movieGenre}`);

// console.log(rating, `Which of Data type is: ${typeof rating}`);

// console.log(isBlockBluster, `Which of Data type is: ${typeof isBlockBluster}`);

// //objects which contain multiple values - Non-primitives 

// let movie = {
//     name:"Dhruva",
//     rating: 4.2,
//     genre: "suspense/action",
//     actors : ["Ramcharan", "arvindswamy"]
    
// }   //object

// console.log(movie, `Which of Data type is: ${typeof movie}`);

// let bestFriends  = ["Prasad","Harsha","Satish","Jaysair","Surya"]
// console.log(bestFriends, `Which of Data type is: ${typeof bestFriends}`);



let mobile = {
    brand: "Samsung S23 Ultra",
    price:120000,
    color:"Grey",
    is5G: true,
}

console.log(mobile)

let school = {}
school.name = "st.anns school";
school.location = "Tadepalligudem";
school.study = "10th Class"


console.log(school["name"])


let prices = [250,620,8520]
console.log(prices.length)
console.log(prices[0])

let seats = new Array(20,6,0,8,0)
console.log(seats.length)
console.log(seats[0])
console.log(seats)


let codes = Array.from(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    // "abcdefghijklmnopqrstuvwxyz"
)
console.log(codes.length)
console.log(codes)