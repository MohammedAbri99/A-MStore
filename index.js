//this to connect html side by id
let image =document.getElementById('image');
//array of images that we display it in banner 
let images = ['./imge/016.jpg','./imge/017.png','./imge/018.png'];
var flag = 0;
//this function to change imge in banner after 3000ms which is 3 seconds 
setInterval(function(){
    if(flag ==0){
        image.src=images[flag];
        flag = 1;
    }
    else if(flag==1){
        image.src=images[flag];
        flag = 2;
    }
    else{
        image.src=images[flag];
        flag = 0;
    }
} ,3000 )


    


//bring the time and the day from Date object
var Time = new Date().toLocaleTimeString();
var DateToady = new Date().toLocaleDateString();

//the text that eill be display it
let text = [
    "Welcome to the A&M Store Website! ,Today is "+DateToady+" and the time is "+Time,
];

let banner = document.getElementById("banner");
let xposition = -1000;
let textindex= 0;

function runBanner(){
    setTextindex();
    xposition++;
    banner.style.left = xposition+"px";
    banner.innerText = text[textindex];
    setTimeout(runBanner,1); //loop to run runBanner() function again after he hidenn
}
function setTextindex(){
    if(xposition > window.innerWidth){
        xposition=-1000;
        textindex++
    }

    //to restart from beginnig of texts
    if(textindex > text.length-1){
        textindex=0;
    }
}
runBanner();
