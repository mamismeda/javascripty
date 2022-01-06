// FIRST FUNC

function oneFunction(farenheit){
 return(5/9) * (farenheit - 32);
}

let divID = document.getElementById("show");

divID.innerHTML = oneFunction(100);
console.log(oneFunction(100));


// SECOND FUNC

let changED = "my new js"


function changeFunc(change){
  let newC = "my newest js"
  return changED = newC;
}
console.log(changeFunc());


// THIRD FUNC

function place(flir) {
  return flir.replaceAll("HTML", " ");
}
let filtered = place("HTML is markup language")

console.log(filtered);


// FOURTH FUNC

function card() {
  let boots = `<div class="card mt-5" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`
frix.innerHTML= boots;

}
card();

// FIFTH FUNC

function mata(x,y) {
    return x * y;
}
console.log(mata(45.12, 23.3).toFixed(1));
console.log(mata(37.44, 61.52).toFixed(2));
console.log(mata(15.13, 42.55).toFixed(3));

//END OF FUNCTIONS


let fst = "name : skittles" ;
let secun = 'pic/skittles.jpg';
let won = "weight:0.250";
let fas = "price:1.5";
let qya = "Quantity :5";



let boxy = `<div class="card" style="width: 18rem;">
<img src="${secun}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${fst}</h5>
  <h5 class="card-title">${won}</h5>
  <h5 class="card-title">${fas}</h5>
  <h5 class="card-title">${qya}</h5>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
`
objy.innerHTML= boxy;


let myObject = {
  name: "skittles",
  photo:"pic/skittles.jpg",
  weight:0.250,
  price:1.5,
  Quantity:5,
     
    buy:function(count) {
      return this.price * count ;
    }
}


console.log(myObject.buy(2));

let hallo ;
let Quantity = 5;
if (Quantity == 0){
  hallo = ("არ არის მარაგში");
  console.log("არ არის მარაგში");

} else (Quantity > 0)
  hallo = ("მარაგშია" + " " + "რაოდენობა" + " " + "5");
  console.log("მარაგშია" + " " + "რაოდენობა" + " " + "5");

 let dums = document.getElementById("domy");
 dums.innerHTML = hallo;




 let basketBall = [
   {
     name:"michael",
     photo:'pic/layer.png',
     age:24,
     registration:2021,
     course:"UI/UX",
     attendence:100,
     stinepdy:true,
   },
   {
    name:"john",
    photo:'pic/layer.png',
    age:22,
    registration:2020,
    course:"programming",
    attendence:60,
    stinepdy:true,
  },
  {
    name:"miky",
    photo:'pic/layer.png',
    age:30,
    registration:2019,
    course:"programming",
    attendence:100,
    stinepdy:true,
  },
  {
    name:"allen",
    photo:'pic/layer.png',
    age:24,
    registration:2019,
    course:"UI/UX",
    attendence:50,
    stinepdy:true,
  },
  {
    name:"michael",
    photo:'pic/layer.png',
    age:22,
    registration:2019,
    course:"programming",
    attendence:80,
    stinepdy:true,
  },
  {
    name:"hugo",
    photo:'pic/layer.png',
    age:26,
    registration:2021,
    course:"UI/UX",
    attendence:100,
    stinepdy:true,
  },
  {
    name:"michael",
    photo:'pic/layer.png',
    age:30,
    registration:2019,
    course:"programming",
    attendence:100,
    stinepdy:true,
  },
  {
    name:"kimmy",
    photo:'pic/layer.png',
    age:25,
    registration:2022,
    course:"programming",
    attendence:50,
    stinepdy:true,
  },
  {
    name:"suny",
    photo:'pic/layer.png',
    age:22,
    registration:2018,
    course:"UI/UX",
    attendence:50,
    stinepdy:true,
  },
  {
    name:"michael",
    photo:'pic/layer.png',
    age:22,
    registration:2018,
    course:"UI/UX",
    attendence:100,
    stinepdy:true,
  },



 ]
 let agArray = basketBall.filter(els=>{
     return els.age == 22;
 })

 console.log(agArray);

 let regArray = basketBall.filter(elements=>{
   return elements.registration == 2019;
 })
 console.log(regArray);

 let uiUx = basketBall.filter(el1=>{
   return el1.course == "programming";
 })
console.log(uiUx);

let attY = basketBall.filter(el2=>{
  return el2.attendence == 100;
})
console.log(attY);

let stip = basketBall.filter(el3=>{
  return el3.stipendy == true;
})
console.log(stip);

let namy = basketBall.filter(el4=>{
  return el4.name == "michael";
})
console.log(namy);


let kislo = document.getElementById("jumpy");
jumpy.innerHTML = basketBall;




