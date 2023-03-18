var clickCount = 0; 
var multiplier = 1;
var drinkCount = 0;
var veganCount = 0;
var drinkPrice = 1;
var veganPrice = 1;

var totalSpent = 0;
document.getElementById("drinkCount").innerText = `${drinkCount}`; 
document.getElementById("drinkPrice").innerText = `${drinkPrice} Clicks`; 
document.getElementById("veganPrice").innerText = `${veganPrice} Clicks`; 
document.getElementById("veganCount").innerText = `${veganCount}`; 
document.getElementById("counter").innerText = `Clicked ${clickCount} times.`; 
document.getElementById("total").innerText = `${totalSpent}`; 

document.getElementById("burger").addEventListener("click", function() {
  clickCount ++; 
  clickCount *= multiplier;
  clickCount = Math.round(clickCount);
  document.getElementById("counter").innerText = `Clicked ${clickCount} times.`; 
  if (clickCount < 0)
  clickCount = 0;
});
document.getElementById("drink").addEventListener("click", function() {
    if(clickCount >= drinkPrice){
    document.getElementById("drinkPrice").innerText = `${drinkPrice} Clicks`; 
    multiplier+= 0.1;
    clickCount -= 100;
    document.getElementById("cup").style.display="block";
    drinkCount++;
    document.getElementById("drinkCount").innerText = `${drinkCount}`; 
    totalSpent += drinkPrice;
    drinkPrice *= 1.2;
    document.getElementById("total").innerText = `${totalSpent}`; 
   }
   if (clickCount < 0)
   clickCount = 0;

});
document.getElementById("vegan-button").addEventListener("click", function() {
    if(clickCount >= veganPrice){
    multiplier+= 0.3;
    clickCount -= 300;
    document.getElementById("vegan-label").style.display = "block";
    document.getElementById("burger__top").style.backgroundColor = "#475e47";
    document.getElementById("burger__meat").style.backgroundColor = "green";
    document.getElementById("burger__cheese").style.backgroundColor = "green";
    document.getElementById("burger__bottom").style.backgroundColor = "#475e47";
    veganCount++;
    document.getElementById("veganCount").innerText = `${veganCount}`; 
    totalSpent += veganPrice;
    document.getElementById("veganPrice").innerText = `${veganPrice} Clicks`; 
    veganPrice *= 1.6;
    document.getElementById("total").innerText = `${Math.round(totalSpent)}`; 
   }
   if (clickCount < 0)
    clickCount = 0;

});
