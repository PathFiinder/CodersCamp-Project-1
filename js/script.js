window.addEventListener('DOMContentLoaded', function() {

//Navbar
const barsButton = document.querySelector('.header__barButtonIcon');
const headerNav = document.querySelector('.header__nav');


barsButton.addEventListener('click', () => {
    headerNav.classList.toggle('nav--active')
})

//Scroll
function toScroll(PosTop, navH) {
    $("body, html").animate(
      {
        scrollTop: PosTop - navH
      },
      1000
    );
    
    headerNav.classList.remove("nav--active");
  }

  let headerHeight = $(".header").height();
  let aboutMePosTop = $(".about-me").offset().top;
  let skillsPosTop = $(".skills").offset().top;
  let portfolioPosTop = $(".portfolio").offset().top;
  let contactPosTop = $(".contact").offset().top;


  $(".nav__link--aboutMe").on("click", function() {
    toScroll(aboutMePosTop, headerHeight);
  });

  $(".nav__link--skills").on("click", function() {
    toScroll(skillsPosTop, headerHeight);
  });

  $(".nav__link--portfolio").on("click", function() {
    toScroll(portfolioPosTop, headerHeight);
  });

  $(".nav__link--contact").on("click", function() {
    toScroll(contactPosTop, headerHeight);
  });

  window.onresize = () => {
    headerHeight = $(".header").height();
    aboutMePosTop = $(".aboutMe").offset().top;
    skillsPosTop = $(".skills").offset().top;
    portfolioPosTop = $(".portfolio").offset().top;
    contactPosTop = $(".contact").offset().top;
  };







})