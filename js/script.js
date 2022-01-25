// parallax
// js Ketika halaman di-load
$(window).on('load', function() {
  setTimeout(function() {
    $('.info-panel').addClass('ipMuncul');
  }, 700);
})

$(window).on('load', function() {
  setTimeout(function() {
    $('.picture').addClass('jMuncul');
    $('.name').addClass('jMuncul');
    $('.ket').addClass('jMuncul');
  }, 400);
})


$(window).on('load', function() {
  setTimeout(function() {
  $('.h2about').addClass('pMuncul');
  $('.pLeft').addClass('pMuncul');
  $('.pRight').addClass('pMuncul');
  }, 400);
})



// jsScroll
$(window).scroll(function() {
  var wScroll = $(this).scrollTop();
  
  // munculin langsung semua
  // if( wScroll > $('.projects').offset().top - 250 ) {
  //   $('.projects .card').addClass('muncul');
  // }

  // muncul satu-satu
  if( wScroll > $('.projects').offset().top - 250 ) {
    $('.projects .card').each(function(i) {
      setTimeout(function() {
        $('.projects .card').eq(i).addClass('muncul');
      }, 300 * (i+1));
    });
  }

});

// get button
let mybutton = document.getElementById("btn-back-to-top");

// navbar change color
const navbar = document.querySelector('.navbar');

window.onscroll = function(){
  scrollFunction();
  function scrollFunction() {
  // button to top
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  } 

  // navbar change color
  var top = window.scrollY;
  console.log(top);
  if(top >= 500) {
    navbar.classList.add('change')
  }else{
    navbar.classList.remove('change');
  }

  // menu navbar active ketika scroll
  var scrollTop = $(document).scrollTop();
  var anchors = $('body').find('section');
    for (var i = 0; i < anchors.length; i++){
      if (scrollTop > $(anchors[i]).offset().top - 190 && scrollTop < $(anchors[i]).offset().top + $(anchors[i]).height() - 200) {
         $('nav ul li a[href="#' + $(anchors[i]).attr('id') + '"]').addClass('active');
        }else{
          $('nav ul li a[href="#' + $(anchors[i]).attr('id') + '"]').removeClass('active');
        }
    }
}

// klik button akan kembali ke atas
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// untuk merubah class active pada menu yang diklik
var btns = 
$(".navbar .navbar-nav .nav-link");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document
        .getElementsByClassName("active");

      current[0].className = current[0]
        .className.replace(" active", "");
      this.className += " active";
    });
  }