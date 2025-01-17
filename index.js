document.addEventListener("DOMContentLoaded",() =>{

//Problem 1
submit = document.querySelector("#submitBtn")
submit.addEventListener("click",()=>{

    let input = document.querySelector("#input")
    let heading = document.querySelector("#header")
    heading.innerText = input.value

})

//Problem 2
let results =  [
    { "name" : "Anne" },
    { "name" : "Bri" },
    { "name" : "Chaz" },
    { "name" : "Darlene" }
  ]
let ul = document.createElement("ul")

results.forEach(element => {
    let li = document.createElement("li")
    li.innerText = element.name
    ul.appendChild(li)   
    
});
    
document.querySelector("#ProblemTwo").appendChild(ul)

//Problem 3
let results2 = [
    {
      "gender": "female",
      "name": {
        "title": "mademoiselle",
        "first": "ruth",
        "last": "nicolas"
      },
      "nat": "CH"
    },
    {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "رها",
        "last": "سلطانی نژاد"
      },
      "nat": "IR"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "patricia",
        "last": "hale"
      },
      "nat": "GB"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "fernando",
        "last": "cooper"
      },
      "nat": "US"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "یسنا",
        "last": "صدر"
      },
      "nat": "IR"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "eino",
        "last": "tuomala"
      },
      "nat": "FI"
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "gonca",
        "last": "özkara"
      },
      "nat": "TR"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "kyle",
        "last": "castillo"
      },
      "nat": "US"
    },
    {
      "gender": "female",
      
      "name": {
        "title": "miss",
        "first": "olivia",
        "last": "kumar"},
      
        "nat": "NZ"
    },
    {
      "gender": "male",
      "name": {
        "title": "monsieur",
        "first": "raymond",
        "last": "durand"
      },
      "nat": "CH"
    }
  ]

let ul2 = document.createElement("ul")

results2.forEach(element => {
    let li2 = document.createElement("li")
    li2.innerText =  element.name.first + " " + element.name.last + " " + element.nat
    ul2.appendChild(li2)   
    
});
    
document.querySelector("#problem3").appendChild(ul2)


//PROBLEM 4
let results3 = [
    {
        "name": "Alderaan",
        "rotation_period": "24",
        "orbital_period": "364",
        "diameter": "12500",
        "climate": "temperate",
        "gravity": "1 standard",
        "terrain": "grasslands, mountains",
        "surface_water": "40",
        "population": "2000000000",
        "residents": [
            "https://swapi.co/api/people/5/",
            "https://swapi.co/api/people/68/",
            "https://swapi.co/api/people/81/"
        ],
        "films": [
            "https://swapi.co/api/films/6/",
            "https://swapi.co/api/films/1/"
        ],
        "created": "2014-12-10T11:35:48.479000Z",
        "edited": "2014-12-20T20:58:18.420000Z",
        "url": "https://swapi.co/api/planets/2/"
    },
    {
        "name": "Yavin IV",
        "rotation_period": "24",
        "orbital_period": "4818",
        "diameter": "10200",
        "climate": "temperate, tropical",
        "gravity": "1 standard",
        "terrain": "jungle, rainforests",
        "surface_water": "8",
        "population": "1000",
        "residents": [],
        "films": [
            "https://swapi.co/api/films/1/"
        ],
        "created": "2014-12-10T11:37:19.144000Z",
        "edited": "2014-12-20T20:58:18.421000Z",
        "url": "https://swapi.co/api/planets/3/"
    },
    {
        "name": "Hoth",
        "rotation_period": "23",
        "orbital_period": "549",
        "diameter": "7200",
        "climate": "frozen",
        "gravity": "1.1 standard",
        "terrain": "tundra, ice caves, mountain ranges",
        "surface_water": "100",
        "population": "unknown",
        "residents": [],
        "films": [
            "https://swapi.co/api/films/2/"
        ],
        "created": "2014-12-10T11:39:13.934000Z",
        "edited": "2014-12-20T20:58:18.423000Z",
        "url": "https://swapi.co/api/planets/4/"
    },
    {
        "name": "Dagobah",
        "rotation_period": "23",
        "orbital_period": "341",
        "diameter": "8900",
        "climate": "murky",
        "gravity": "N/A",
        "terrain": "swamp, jungles",
        "surface_water": "8",
        "population": "unknown",
        "residents": [],
        "films": [
            "https://swapi.co/api/films/2/",
            "https://swapi.co/api/films/6/",
            "https://swapi.co/api/films/3/"
        ],
        "created": "2014-12-10T11:42:22.590000Z",
        "edited": "2014-12-20T20:58:18.425000Z",
        "url": "https://swapi.co/api/planets/5/"
    },
    {
        "name": "Bespin",
        "rotation_period": "12",
        "orbital_period": "5110",
        "diameter": "118000",
        "climate": "temperate",
        "gravity": "1.5 (surface), 1 standard (Cloud City)",
        "terrain": "gas giant",
        "surface_water": "0",
        "population": "6000000",
        "residents": [
            "https://swapi.co/api/people/26/"
        ],
        "films": [
            "https://swapi.co/api/films/2/"
        ],
        "created": "2014-12-10T11:43:55.240000Z",
        "edited": "2014-12-20T20:58:18.427000Z",
        "url": "https://swapi.co/api/planets/6/"
    },
    {
        "name": "Endor",
        "rotation_period": "18",
        "orbital_period": "402",
        "diameter": "4900",
        "climate": "temperate",
        "gravity": "0.85 standard",
        "terrain": "forests, mountains, lakes",
        "surface_water": "8",
        "population": "30000000",
        "residents": [
            "https://swapi.co/api/people/30/"
        ],
        "films": [
            "https://swapi.co/api/films/3/"
        ],
        "created": "2014-12-10T11:50:29.349000Z",
        "edited": "2014-12-20T20:58:18.429000Z",
        "url": "https://swapi.co/api/planets/7/"
    },
    {
        "name": "Naboo",
        "rotation_period": "26",
        "orbital_period": "312",
        "diameter": "12120",
        "climate": "temperate",
        "gravity": "1 standard",
        "terrain": "grassy hills, swamps, forests, mountains",
        "surface_water": "12",
        "population": "4500000000",
        "residents": [
            "https://swapi.co/api/people/3/",
            "https://swapi.co/api/people/21/",
            "https://swapi.co/api/people/36/",
            "https://swapi.co/api/people/37/",
            "https://swapi.co/api/people/38/",
            "https://swapi.co/api/people/39/",
            "https://swapi.co/api/people/42/",
            "https://swapi.co/api/people/60/",
            "https://swapi.co/api/people/61/",
            "https://swapi.co/api/people/66/",
            "https://swapi.co/api/people/35/"
        ],
        "films": [
            "https://swapi.co/api/films/5/",
            "https://swapi.co/api/films/4/",
            "https://swapi.co/api/films/6/",
            "https://swapi.co/api/films/3/"
        ],
        "created": "2014-12-10T11:52:31.066000Z",
        "edited": "2014-12-20T20:58:18.430000Z",
        "url": "https://swapi.co/api/planets/8/"
    },
    {
        "name": "Coruscant",
        "rotation_period": "24",
        "orbital_period": "368",
        "diameter": "12240",
        "climate": "temperate",
        "gravity": "1 standard",
        "terrain": "cityscape, mountains",
        "surface_water": "unknown",
        "population": "1000000000000",
        "residents": [
            "https://swapi.co/api/people/34/",
            "https://swapi.co/api/people/55/",
            "https://swapi.co/api/people/74/"
        ],
        "films": [
            "https://swapi.co/api/films/5/",
            "https://swapi.co/api/films/4/",
            "https://swapi.co/api/films/6/",
            "https://swapi.co/api/films/3/"
        ],
        "created": "2014-12-10T11:54:13.921000Z",
        "edited": "2014-12-20T20:58:18.432000Z",
        "url": "https://swapi.co/api/planets/9/"
    },
    {
        "name": "Kamino",
        "rotation_period": "27",
        "orbital_period": "463",
        "diameter": "19720",
        "climate": "temperate",
        "gravity": "1 standard",
        "terrain": "ocean",
        "surface_water": "100",
        "population": "1000000000",
        "residents": [
            "https://swapi.co/api/people/22/",
            "https://swapi.co/api/people/72/",
            "https://swapi.co/api/people/73/"
        ],
        "films": [
            "https://swapi.co/api/films/5/"
        ],
        "created": "2014-12-10T12:45:06.577000Z",
        "edited": "2014-12-20T20:58:18.434000Z",
        "url": "https://swapi.co/api/planets/10/"
    },
    {
        "name": "Geonosis",
        "rotation_period": "30",
        "orbital_period": "256",
        "diameter": "11370",
        "climate": "temperate, arid",
        "gravity": "0.9 standard",
        "terrain": "rock, desert, mountain, barren",
        "surface_water": "5",
        "population": "100000000000",
        "residents": [
            "https://swapi.co/api/people/63/"
        ],
        "films": [
            "https://swapi.co/api/films/5/"
        ],
        "created": "2014-12-10T12:47:22.350000Z",
        "edited": "2014-12-20T20:58:18.437000Z",
        "url": "https://swapi.co/api/planets/11/"
    }
]

let ul3 = document.createElement("ul")

results3.forEach(element => {
    let li3 = document.createElement("li")
    li3.innerText =  element.name + " " + "population:" + element.population 
    ul3.appendChild(li3)   
    
});
    
document.querySelector("#problem4").appendChild(ul3)

// Problem 5
submit = document.querySelector("#listBtn")

submit.addEventListener("click",()=>{

    let input = document.querySelector("#listInput")

    let ul4 = document.createElement("ul")
    let li4 = document.createElement("li")
    li4.innerText = input.value
    ul4.appendChild(li4)  
    document.querySelector("#problem5").appendChild(ul4)
})


// Problem 6
submit = document.querySelector("#listManyBtn")

submit.addEventListener("click",()=>{

    let inputItem = document.querySelector("#listItemInput")
    let inputNum = document.querySelector("#listNumInput")

   let ul5 = document.createElement("ul")
    
 for(let i = 0; i < inputNum.value; i ++){

    let li5 = document.createElement("li")
    li5.innerText = inputItem.value
    ul5.appendChild(li5)  

 }

 document.querySelector("#problem6").appendChild(ul5)



})


// problem 7
let section7 = document.querySelector("#problem7")
let p1 = document.createElement("p")
p1.innerText = "Enter Number Here"
let numInput= document.createElement("input")

section7.appendChild(p1)
section7.appendChild(numInput)

let numButton = document.createElement("button")
numButton.innerText = "submit"
section7.appendChild(numButton)
let h3 = document.createElement("h3")
h3.innerText = "List of your Numbers"
section7.appendChild(h3)

let avg = document.createElement("p")
let min = document.createElement("p")
let max = document.createElement("p")


let numberList = []

const averager = (arr) => {
let averager = 0 

arr.forEach((number) =>{
averager += number
})

return averager/arr.length

}

const minNum = (arr) => {
  let min = arr[0]
  arr.forEach((number) =>{
    if(number< min) min = number
  })
  return min
  }
  const maxNum = (arr) => {
    let max = arr[0]
    arr.forEach((number) =>{
      if(number> max) max = number
  })
    return max
  }

ul = document.createElement("ul")

numButton.addEventListener("click", () =>{

  li = document.createElement("li")
  li.innerText = numInput.value
  numberList.push(Number(numInput.value))

  ul.appendChild(li)
  section7.appendChild(ul)

  avg.innerText = "avg: " + averager(numberList)
  min.innerText = "min: " + minNum(numberList)
  max.innerText = "max: " + maxNum(numberList)

  section7.appendChild(max)
  section7.appendChild(min)
  section7.appendChild(avg)



})








})
   
