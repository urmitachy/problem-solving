// kilometer to meter(1st problem)

function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
    
}
var result = kilometerToMeter(6);
console.log(result);


// budgetCalculator(2nd)
 
function budgetCalculator(watch, mobile, laptop){
    var isWatch = watch * 50;
    var isMobile = mobile * 100;
    var isLaptop = laptop * 500;
     var add = isWatch + isMobile + isLaptop ;
     return add ;
}

 var budget = budgetCalculator(4, 5, 2);
 console.log(budget);


//  hotelCost(3rd problem)


function hotelCost(hotelStay){
    if (hotelStay <=10) {
        var payment = hotelStay * 100;
        return payment;
    }
    else if(hotelStay >=11 && hotelStay <= 20){
        var payment = 10*100 + (hotelStay - 10) * 80;
        return payment ;
    }
   else if(hotelStay >=11){
    var payment = 10*100 + 10*80 + (hotelStay - 20)*50;
    return payment;
   }
}

var  price = hotelCost(25);
console.log(price);


// megaFriend(4th problem)

function megaFriend (friendsName){
    var biggerName = friendsName[0];
    for( var i = 0 ; i > friendsName.length; i++){
    var currentName = friendsName[i];
    if(currentName.length > biggerName.length){
        biggerName = currentName;
        }
    }
    return biggerName;
}

var friendsName = ['urmita', 'moon', 'munni' ,'ma' , 'mim']
var megaName = megaFriend(friendsName);
console.log(megaName);
