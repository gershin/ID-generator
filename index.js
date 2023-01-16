function getmilk(money){

console.log("you bought " + formula(money) + " bottles of milk");

}

function formula(money){

    var getTheExactBottles = money / 1.5;
    //how to get the exact number of bottles thru the amount you gave
    return getTheExactBottles;
}

getmilk(5);