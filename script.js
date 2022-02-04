let carousel = document.querySelector('.carousel')
let btnRight = document.querySelector('.chevronR')
let btnLeft = document.querySelector('.chevronL')
let circul1 = document.getElementById("circul1")
let circul2 = document.getElementById("circul2")
let circul3 = document.getElementById("circul3")
let scrolling = document.querySelector('.cardsContainer')
let btnNextRight = document.getElementById("btnRight")
let btnNextLeft = document.getElementById("btnLeft")
let btnR = document.getElementById("btnR")
let btnL = document.getElementById("btnL")
let scrolling1 = document.querySelector('.containerCards')

// console.log(circul1.style +"Circul1");
var amoutRightClicks = [];
var counter = 0;
CirculCheck(amoutRightClicks);
// circul1.style.border = ("4px solid rgba(0, 0, 0, 1)")
btnRight.addEventListener('click',()=>{
    console.log('click')
    console.log(counter);
    var i = 'click';
    amoutRightClicks.push(i);
    console.log(amoutRightClicks.length); 
    if(amoutRightClicks.length == 3){
        amoutRightClicks.length=0;
        // circul1.style.border = ("4px solid rgba(0, 0, 0, 1)")
        // circul2.style.border = ("4px solid rgba(0, 0, 0, 0.5)")
        // circul3.style.border = ("4px solid rgba(0, 0, 0, 0.5)")
    }
    counter = -490*amoutRightClicks.length;
    // if (amoutRightClicks.length == 1) {
    //     circul1.style.border = ("4px solid rgba(0, 0, 0, 0.5)")
    //     circul2.style.border = ("4px solid rgba(0, 0, 0, 1)")
    //     circul3.style.border = ("4px solid rgba(0, 0, 0, 0.5)")
    // }
    // if (amoutRightClicks.length == 2) {
    //     circul1.style.border = ("4px solid rgba(0, 0, 0, 0.5)")
    //     circul2.style.border = ("4px solid rgba(0, 0, 0, 0.5)")
    //     circul3.style.border = ("4px solid rgba(0, 0, 0, 1)")
    // }
    // console.log(counter);
    str_counter = String(counter); 
    carousel.style.transform = ("translateX("+str_counter+"px)"); 
    CirculCheck(amoutRightClicks);
}
)
btnLeft.addEventListener('click',()=>{
    console.log('click')
    console.log(counter);
    if(counter == 0){
        carousel.style.transform = ("translateX("+-490*2+"px)");
        counter = -490*2;
        amoutRightClicks.length=2;

    }
    else{
        counter = counter + 490;
        amoutRightClicks.length=amoutRightClicks.length-1;
        carousel.style.transform = ("translateX("+counter+"px)"); 
    }
    CirculCheck(amoutRightClicks);
    
}
)
function CirculCheck(amoutRightClicks){
    console.log(amoutRightClicks.length +"arr");
    if(amoutRightClicks.length == 0 || amoutRightClicks.length==null){
           var c1 = circul1.style.border = ("4px solid rgba(0, 0, 0, 1)")
           var c2 = circul2.style.border = ("4px solid rgba(0, 0, 0, 0.5)")
           var c3 = circul3.style.border = ("4px solid rgba(0, 0, 0, 0.5)")
           var b = console.log("i am here")
        
    }
    if(amoutRightClicks.length == 1) {
        var c1 = circul1.style.border = ("4px solid rgba(0, 0, 0, 0.5)")
        var c2 = circul2.style.border = ("4px solid rgba(0, 0, 0, 1)")
        var c3 = circul3.style.border = ("4px solid rgba(0, 0, 0, 0.5)")
        var b = console.log("2 i am here")
    }
    if(amoutRightClicks.length == 2){
        var c1 = circul1.style.border = ("4px solid rgba(0, 0, 0, 0.5)")
        var c2 = circul2.style.border = ("4px solid rgba(0, 0, 0, 0.5)")
        var c3 = circul3.style.border = ("4px solid rgba(0, 0, 0, 1)")
        var b = console.log("3 i am here")
    }
    return c1,c2,c3,b;
}

var amoutRightNextClicks = [];
var count = 0;
btnNextRight.addEventListener('click',()=>{
    console.log('click')
    console.log(count);
    var i = 'click';
    amoutRightNextClicks.push(i);
    console.log(amoutRightNextClicks.length); 
    if(amoutRightNextClicks.length == 4){
        amoutRightNextClicks.length = 0;
    }
    count = -334*amoutRightNextClicks.length;
  ;
    str_counter = String(count); 
    scrolling.style.transform = ("translateX("+str_counter+"px)"); 
}
)
btnNextLeft.addEventListener('click',()=>{
    console.log('click')
    console.log(count);
    if(count == 0){
        scrolling.style.transform = ("translateX("+-334*3+"px)");
        count = -334*3;
        amoutRightNextClicks.length=3;

    }
    else{
        count = count + 334;
        amoutRightNextClicks.length=amoutRightNextClicks.length-1;
        scrolling.style.transform = ("translateX("+count+"px)"); 
    }
    
}
)
var amoutRightPrevClicks = [];
var count1 = 0;
btnR.addEventListener('click',()=>{
    console.log('click')
    console.log(count1);
    var i = 'click';
    amoutRightPrevClicks.push(i);
    console.log(amoutRightPrevClicks.length); 
    if(amoutRightPrevClicks.length == 5){
        amoutRightPrevClicks.length = 0;
    }
    count1 = -12.5*amoutRightPrevClicks.length;
    str_counter = String(count1); 
    scrolling1.style.transform = ("translateX("+str_counter+"%)"); 
}
)
btnL.addEventListener('click',()=>{
    console.log('click')
    console.log(count1);
    if(count1 == 0){
        scrolling1.style.transform = ("translateX("+-12.5*4+"%)");
        count1 = -12.5*4;
        amoutRightPrevClicks.length=4;

    }
    else{
        count1 = count1 + 12.5;
        amoutRightPrevClicks.length=amoutRightPrevClicks.length-1;
        scrolling1.style.transform = ("translateX("+count1+"%)"); 
    }
    
}
)