const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);



function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function hozzaad(termek) {
    db = Number(prompt('Mennyit kérsz?'))
    localStorage.setItem(termek, db)
}

var ads = 121999
var ak47 = 450000
var ak74 = 139999
var cm901 = 359999
var m4a1 = 74999
var gyújtógránát = 175599
var füstgránát = 9499
var villanógránát = 77000
var karambit = 44999
var pillangókés = 149999
var assaultlőszer = 5900
var pisztolylőszer = 3399
var késtartó = 16290
var hátizsák = 12999
var holografikus = 10499
var mellény = 149999
var cz = 372922
var glock17 = 266999
var eu18 = 57999
var mp5 = 76999
var p90 = 51499
var pp19 = 96299
var thompson = 81999
var uzi = 122999
