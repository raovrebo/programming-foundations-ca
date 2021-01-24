// Question 1
console.log("Question 1");

const outOfStock = true;

if (outOfStock === true) {
    console.log("Out of stock");
} else {
    console.log("In stock");
}

// Question 2
console.log("Question 2");

for (let i = 15; i <= 25; i++) {
    if (i === 17 || i === 20) {
    console.log(i);
    }
}


// Question 3
console.log("Question 3");

var games = [
	{
		title: "Grand Theft Auto",
		rating: 4.48,
	},
	{
		title: "Portal 2",
		rating: 3.5,
	},
	{
		title: "Team Fortress",
		rating: null,
	},
	{
		title: "The Witcher",
		rating: 3.0,
	},
	{
		title: "The Elder Scrolls",
		rating: 2.9,
	},
];

const gamesContainer = document.querySelector("ul");

for (let i = 0; i < games.length; i++) {
    const rating = games[i].rating;
        
    if (rating < 3.5) {
        gamesContainer.innerHTML += "<li>" + games[i].title + ": " + games[i].rating + "</li>";
        console.log(games[i].title + ": " + games[i].rating);
    }
}

// Question 4
console.log("Question 4");

function whatIDontLike(myDislikes) {
    var typeofMyDislikes = typeof myDislikes;

    if (typeofMyDislikes !== "string") {    
        console.log("Please send in a string");
    } else {
        console.log("I don't like " + myDislikes);
    }
}

whatIDontLike("constant headaches");

// Question 5
console.log("Question 5");

function subtract(num1, num2) {
    
    const convertedNum1 = parseFloat(num1);
    const convertedNum2 = parseFloat(num2);
    
    if (isNaN(convertedNum1) || isNaN(convertedNum2)) {
        return "Invalid argument(s)";
    }

    const typeofNum1 = typeof num1;
    const typeofNum2 = typeof num2;
    
    if (typeofNum1 === "number" || typeofNum2 === "number") {
        return convertedNum2 - convertedNum1;
    }
}

const sum = subtract(5, 20);

subtraction.innerHTML = sum;
console.log(sum);

// Question 6
console.log("Question 6");

const buttonPage = document.querySelector(".page");



buttonPage.onclick = function () {
    
    const out = document.querySelector("title");

    out.innerHTML = "";  

    const title = document.querySelector("title");

    title.innerHTML += "Updated title";

    document.body.style.backgroundColor = "yellow";

    const heading = document.querySelector("h1");

    heading.style.color = "green";

    heading.style.fontFamily = "impact";

    let headingContent = heading.innerHTML;
    
    let newHeadingContent = "<a href=#>" + headingContent + "</a>";

    heading.innerHTML = newHeadingContent;
 
    const gamesList = document.querySelector(".games");
      
    gamesList.style.listStyle= "none";

    gamesList.style.padding = 0;
}

// Question 7
console.log("Question 7");

var toys = [
	{
		name: "Lego",
		price: 15.6,
	},
	{
		name: "Master of the Universe",
		price: "28.3",
	},
	{
		name: "Barbie",
		price: null,
	},
	{
		name: "Mr Potato Head",
		price: 89.99,
	},
];

const buttonPrice = document.querySelector(".price");

buttonPrice.onclick = function () {

    for (let toy of toys) {
    console.log(toy);
    }

    let priceLego = toys[0].price;
    console.log(priceLego);
        
    let priceMasterOfTheUniverse = toys[1].price;
    console.log(priceMasterOfTheUniverse);
    
    let priceBarbie = toys[2].price;
    console.log(priceBarbie);
    
    let priceMrPotatoHead = toys[3].price;
    console.log(priceMrPotatoHead);
    
    let convertedPriceLego = parseFloat(priceLego);
    console.log(convertedPriceLego);
    
    let convertedPriceMasterOfTheUniverse = parseFloat(priceMasterOfTheUniverse);
    console.log(convertedPriceMasterOfTheUniverse);
    
    // let convertedPriceBarbie = parseFloat(priceBarbie);
    // console.log(ConvertedPriceBarbie);
    /* console.log(priceBarbie) logs out null which is NaN
    It makes no sense to try to convert the value of null to a number.*/
    
    let convertedPriceMrPotatoHead = parseFloat(priceMrPotatoHead);
    console.log(convertedPriceMrPotatoHead);

    /* convertedPriceBarbie is NaN. 
    If I try to use NaN in a mathematical operation, the result will be NaN. 
    My interpretation of Question 7 is that it should output a number and not NaN */ 
    const totalPriceToys = (convertedPriceLego + convertedPriceMasterOfTheUniverse + convertedPriceMrPotatoHead);
    console.log(totalPriceToys);

    //const total  = document.querySelector("total");
    total.innerHTML = totalPriceToys;
}



