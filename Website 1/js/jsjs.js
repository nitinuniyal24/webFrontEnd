// newsLetter closing
let newsLetterCover = document.getElementById("newsLetterCover");
let closeNewsLetter = document.getElementById("closeNewsLetter");
function newsLetterBlock() {
  newsLetterCover.style.display = "block";
}
setTimeout(newsLetterBlock, 5000);
function newsLetterNone() {
  newsLetterCover.style.display = "none";
}

// function to close banner
function closeBanner() {
  let banner = document.getElementById("banner");
  let header = document.getElementById("header");
  banner.style.display = "none";
  header.style.top = "0px";
  sideNavbar.style.top = "135px";
}

// product mouse over and mouseout operations
let product = document.getElementById("product");
let subProduct = document.getElementById("subProduct");
let arrow = document.getElementById("arrow");

product.addEventListener("mouseover", function subProductAppear() {
  subProduct.style.display = "flex";
  arrow.style.transform = "rotate(90deg)";
  product.style.color = "#83a4d4";
  product.style.borderBottom = "5px solid #83a4d4";
});

product.addEventListener("mouseout", function subProductDisappear() {
  subProduct.style.display = "none";
  arrow.style.transform = "rotate(0deg)";
  product.style.color = "black";
  product.style.borderBottom = "none";
});
subProduct.addEventListener("mouseover", function subProductAppear() {
  subProduct.style.display = "flex";
  product.style.color = "#83a4d4";
  product.style.borderBottom = "5px solid #83a4d4";
  arrow.style.transform = "rotate(90deg)";
});

subProduct.addEventListener("mouseout", function subProductDisappear() {
  subProduct.style.display = "none";
  product.style.color = "black";
  product.style.borderBottom = "none";
  arrow.style.transform = "rotate(0deg)";
});

//SLide newReleases
// photo
let controlSurface = document.getElementById("controlSurface");
let synth = document.getElementById("synth");
let pitchCorrection = document.getElementById("pitchCorrection");

//text
let controlInfo = document.getElementById("controlInfo");
let synthInfo = document.getElementById("synthInfo");
let pitchInfo = document.getElementById("pitchInfo");
let headBro = document.getElementsByClassName("headBro");

let slideShowForwardTI = setInterval(slideShowForward, 8000);
let textForwardTI = setInterval(textForward, 8000);

function slideShowForward() {
  if (controlSurface.style.display === "block") {
    controlSurface.style.display = "none";
    synth.style.display = "block";
    pitchCorrection.style.display = "none";
  } else if (synth.style.display === "block") {
    controlSurface.style.display = "none";
    synth.style.display = "none";
    pitchCorrection.style.display = "block";
  } else {
    controlSurface.style.display = "block";
    synth.style.display = "none";
    pitchCorrection.style.display = "none";
  }
}

function textForward() {
  if (controlInfo.style.display === "block") {
    controlInfo.style.display = "none";
    synthInfo.style.display = "block";
    pitchInfo.style.display = "none";
  } else if (synthInfo.style.display === "block") {
    controlInfo.style.display = "none";
    synthInfo.style.display = "none";
    pitchInfo.style.display = "block";
  } else {
    controlInfo.style.display = "block";
    synthInfo.style.display = "none";
    pitchInfo.style.display = "none";
  }
}

function slideShowBackward() {
  if (controlSurface.style.display === "block") {
    controlSurface.style.display = "none";
    synth.style.display = "none";
    pitchCorrection.style.display = "block";
  } else if (pitchCorrection.style.display === "block") {
    controlSurface.style.display = "none";
    synth.style.display = "block";
    pitchCorrection.style.display = "none";
  } else {
    controlSurface.style.display = "block";
    synth.style.display = "none";
    pitchCorrection.style.display = "none";
  }
}

function textBackward() {
  if (controlInfo.style.display === "block") {
    controlInfo.style.display = "none";
    synthInfo.style.display = "none";
    pitchInfo.style.display = "block";
  } else if (pitchInfo.style.display === "block") {
    controlInfo.style.display = "none";
    synthInfo.style.display = "block";
    pitchInfo.style.display = "none";
  } else {
    controlInfo.style.display = "block";
    synthInfo.style.display = "none";
    pitchInfo.style.display = "none";
  }
}
// slide show new-releases end

//Burger menu
let burgerMenu = document.querySelector(".burgerMenu");
let sideNavbar = document.getElementById("sideNavbar");
let mainContent = document.getElementById("mainContent");
let sideBar = document.getElementById("sidebar");
let everythingId = document.getElementById("everythingId");
let burgerMenuOpen = false;

burgerMenu.addEventListener("click", function toogleBurgerMenu() {
  if (!burgerMenuOpen) {
    burgerMenu.classList.add("open");
    burgerMenuOpen = true;
    sideNavbar.style.display = "flex";
  } else {
    burgerMenu.classList.remove("open");
    burgerMenuOpen = false;
    navbar.classList.remove("sideNavbar");
    sideNavbar.style.display = "none";
    mainContent.style.width = "100%";
  }
});
window.addEventListener("resize", function hideSideBar() {
  if (
    window.innerWidth < 1268 &&
    window.innerWidth > 466 &&
    burgerMenuOpen == true
  ) {
    sideNavbar.style.display = "flex";
    everythingId.style.flexDirection = "row";
    sideNavbar.classList.remove("topNavbar");
  } else if (window.innerWidth < 466 && burgerMenuOpen == true) {
    sideNavbar.style.display = "flex";
    everythingId.style.flexDirection = "column-reverse";
    sideNavbar.classList.add("topNavbar");
  } else {
    sideNavbar.style.display = "none";
    mainContent.style.width = "100%";
  }
});

// Toogle sideProduct
let sideSubProduct = document.getElementById("sideSubProduct");
function toogleSideProduct() {
  if (sideSubProduct.style.display != "block") {
    sideSubProduct.style.display = "block";
  } else {
    sideSubProduct.style.display = "none";
  }
}

// Auto scroll functionality
function scrollNewReleases() {
  $("html, body").animate(
    {
      scrollTop: $("#newReleases").position().top - 120,
    },
    500
  );
}

function scrollArtists() {
  $("html, body").animate(
    {
      scrollTop: $("#artists").position().top - 70,
    },
    500
  );
}

//halo
let haloChild = document.getElementsByClassName("haloChild");
function haloChildColorIn(numIn) {
  haloChild[numIn].classList.add("haloChildMain");
  haloChild[numIn + 1].classList.add("haloChildNeighbour");
  haloChild[numIn - 1].classList.add("haloChildNeighbour");
  haloChild[numIn + 15].classList.add("haloChildNeighbour");
  haloChild[numIn - 15].classList.add("haloChildNeighbour");
  haloChild[numIn + 16].classList.add("haloChildNeighbour");
  haloChild[numIn - 16].classList.add("haloChildNeighbour");
  haloChild[numIn + 17].classList.add("haloChildNeighbour");
  haloChild[numIn - 17].classList.add("haloChildNeighbour");
}
function haloChildColorOut(numOut) {
  haloChild[numOut].classList.remove("haloChildMain");
  haloChild[numOut + 1].classList.remove("haloChildNeighbour");
  haloChild[numOut - 1].classList.remove("haloChildNeighbour");
  haloChild[numOut + 15].classList.remove("haloChildNeighbour");
  haloChild[numOut - 15].classList.remove("haloChildNeighbour");
  haloChild[numOut + 16].classList.remove("haloChildNeighbour");
  haloChild[numOut - 16].classList.remove("haloChildNeighbour");
  haloChild[numOut + 17].classList.remove("haloChildNeighbour");
  haloChild[numOut - 17].classList.remove("haloChildNeighbour");
}
$(document).ready(() => {
  $(".haloChild").mouseover(function In() {
    let positionIn = $(this).index();
    try {
      haloChildColorIn(positionIn);
    } catch (ignore) {}
  });
});

$(document).ready(() => {
  $(".haloChild").mouseout(function colorOut() {
    let positionOut = $(this).index();
    try {
      haloChildColorOut(positionOut);
    } catch (ignore) {}
  });
});

// Artists Slide show
let mainArtistsTestimony = document.getElementsByClassName(
  "mainArtistsTestimony"
);
let testimonySelector = document.getElementsByClassName("testimonySelector");
let indexMax = 6;
let i = 0;
let index4 = indexMax - i;

let index1;
let index2;
let index3;

function slideTestimonyForward() {
  if (i <= indexMax) {
    index4 = indexMax - i;
    index1 = index4 + 1;
    index2 = index4 + 2;
    index3 = index4 - 1;

    if (index4 == indexMax + 1) {
      index4 = 0;
    } else if (index4 == indexMax + 2) {
      index4 = 1;
    } else if (index4 == indexMax - (indexMax + 1)) {
      index4 = indexMax;
    } else {
      index4 = indexMax - i;
    }

    if (index1 == indexMax + 1) {
      index1 = 0;
    } else if (index1 == indexMax + 2) {
      index1 = 1;
    } else if (index1 == indexMax - (indexMax + 1)) {
      index1 = indexMax;
    } else {
      index1 = index4 + 1;
    }

    if (index2 == indexMax + 1) {
      index2 = 0;
    } else if (index2 == indexMax + 2) {
      index2 = 1;
    } else if (index2 == indexMax - (indexMax + 1)) {
      index2 = indexMax;
    } else {
      index2 = index4 + 2;
    }

    if (index3 == indexMax + 1) {
      index3 = 0;
    } else if (index3 == indexMax + 2) {
      index3 = 1;
    } else if (index3 == indexMax - (indexMax + 1)) {
      index3 = indexMax;
    } else {
      index3 = index4 - 1;
    }

    // // Test-bench
    // console.log("i", i);
    // console.log(index3);
    // console.log(index4);
    // console.log(index1);
    // console.log(index2);
    // console.log("...............................");

    // right goes none
    mainArtistsTestimony[index2].classList.remove("artistsTestimonyRight");
    mainArtistsTestimony[index2].classList.remove("artistsTestimonyLeft");
    mainArtistsTestimony[index2].classList.remove("artistsTestimonyCenter");

    // center goes right
    mainArtistsTestimony[index1].classList.remove("artistsTestimonyCenter");
    mainArtistsTestimony[index1].classList.remove("artistsTestimonyLeft");
    mainArtistsTestimony[index1].classList.add("artistsTestimonyRight");

    // left goes center
    mainArtistsTestimony[index4].classList.remove("artistsTestimonyLeft");
    mainArtistsTestimony[index4].classList.remove("artistsTestimonyRight");
    mainArtistsTestimony[index4].classList.add("artistsTestimonyCenter");

    //none goes left
    mainArtistsTestimony[index3].classList.add("artistsTestimonyLeft");
    mainArtistsTestimony[index3].classList.remove("artistsTestimonyright");
    mainArtistsTestimony[index3].classList.remove("artistsTestimonyCenter");

    testimonySelector[index4].style.backgroundColor = "black";
    for (let k = 0; k <= indexMax; k++) {
      if (k !== index1 && k !== index2 && k !== index3 && k !== index4) {
        mainArtistsTestimony[k].classList.remove("artistsTestimonyRight");
        mainArtistsTestimony[k].classList.remove("artistsTestimonyLeft");
        mainArtistsTestimony[k].classList.remove("artistsTestimonyCenter");
      }
      if (k !== index4) {
        testimonySelector[k].style.backgroundColor = "white";
      }
    }
    i++;
  } else {
    i = 0;
  }
}

let j = index4;
function slideTestimonyBackward() {
  if (j >= 0) {
    console.log(index4);
    index4 = indexMax - j;
    index1 = index4 + 1;
    index2 = index4 + 2;
    index3 = index4 - 1;

    if (index4 == indexMax + 1) {
      index4 = 0;
    } else if (index4 == indexMax + 2) {
      index4 = 1;
    } else if (index4 == indexMax - (indexMax + 1)) {
      index4 = indexMax;
    } else {
      index4 = indexMax - j;
    }

    if (index1 == indexMax + 1) {
      index1 = 0;
    } else if (index1 == indexMax + 2) {
      index1 = 1;
    } else if (index1 == indexMax - (indexMax + 1)) {
      index1 = indexMax;
    } else {
      index1 = index4 + 1;
    }

    if (index2 == indexMax + 1) {
      index2 = 0;
    } else if (index2 == indexMax + 2) {
      index2 = 1;
    } else if (index2 == indexMax - (indexMax + 1)) {
      index2 = indexMax;
    } else {
      index2 = index4 + 2;
    }

    if (index3 == indexMax + 1) {
      index3 = 0;
    } else if (index3 == indexMax + 2) {
      index3 = 1;
    } else if (index3 == indexMax - (indexMax + 1)) {
      index3 = indexMax;
    } else {
      index3 = index4 - 1;
    }

    // // Test-bench
    // console.log("i", i);
    // console.log(index3);
    // console.log(index4);
    // console.log(index1);
    // console.log(index2);
    // console.log("...............................");

    // right goes none
    mainArtistsTestimony[index2].classList.remove("artistsTestimonyRight");
    mainArtistsTestimony[index2].classList.remove("artistsTestimonyLeft");
    mainArtistsTestimony[index2].classList.remove("artistsTestimonyCenter");

    // center goes right
    mainArtistsTestimony[index1].classList.remove("artistsTestimonyCenter");
    mainArtistsTestimony[index1].classList.remove("artistsTestimonyLeft");
    mainArtistsTestimony[index1].classList.add("artistsTestimonyRight");

    // left goes center
    mainArtistsTestimony[index4].classList.remove("artistsTestimonyLeft");
    mainArtistsTestimony[index4].classList.remove("artistsTestimonyRight");
    mainArtistsTestimony[index4].classList.add("artistsTestimonyCenter");

    //none goes left
    mainArtistsTestimony[index3].classList.add("artistsTestimonyLeft");
    mainArtistsTestimony[index3].classList.remove("artistsTestimonyright");
    mainArtistsTestimony[index3].classList.remove("artistsTestimonyCenter");

    testimonySelector[index4].style.backgroundColor = "black";
    for (let k = 0; k <= indexMax; k++) {
      if (k !== index1 && k !== index2 && k !== index3 && k !== index4) {
        mainArtistsTestimony[k].classList.remove("artistsTestimonyRight");
        mainArtistsTestimony[k].classList.remove("artistsTestimonyLeft");
        mainArtistsTestimony[k].classList.remove("artistsTestimonyCenter");
      }
      if (k !== index4) {
        testimonySelector[k].style.backgroundColor = "white";
      }
    }
    j--;
  } else {
    j = indexMax;
  }
}
$(document).ready(() => {
  $(".testimonySelector").click(function outputI() {
    index4 = $(this).index();
    i = indexMax - index4;
    slideTestimonyForward();
  });
});
