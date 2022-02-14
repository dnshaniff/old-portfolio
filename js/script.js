// parallax
// js Ketika halaman di-load
$(window).on('load', function() {
  setTimeout(function() {
    $('.jintro').addClass('jMuncul');
    $('.ptype').addClass('jMuncul');
    $('.sosmed').addClass('jMuncul');
    $('.cv').addClass('jMuncul');
    $('.jimg').addClass('jMuncul');
  }, 200);
})
  
  
  
// jsScroll
$(window).scroll(function() {
  var wScroll = $(this).scrollTop();
    
// munculin langsung semua
if( wScroll > $('.about').offset().top - 150 ) {
  $('.about').addClass('aMuncul');
}
if( wScroll > $('.skills').offset().top - 150 ) {
  $('.skills').addClass('sMuncul');
}
if( wScroll > $('.projects').offset().top - 150 ) {
  $('.projects').addClass('pMuncul');
}
if( wScroll > $('.contact').offset().top - 100 ) {
  $('.contact').addClass('cMuncul');
}
  
// muncul satu-satu
    if( wScroll > $('.projects').offset().top - 250 ) {
      $('.projects .main-card').each(function(i) {
        setTimeout(function() {
          $('.projects .main-card').eq(i).addClass('muncul');
        }, 350 * (i+1));
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
    if(top >= 140) {
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

// typing effect
  const typedTextSpan=document.querySelector(".typed-text");
  const cursorSpan=document.querySelector(".cursor");
  const textArray=["Web Developer","Front-End Developer","Freshgraduate"];
  const typingDelay=200;
  const erasingDelay=100;
  const newTextDelay=1500;
    let textArrayIndex=0;
    let charIndex=0;
    function type() {
      if(charIndex<textArray[textArrayIndex].length)  {
        if(!cursorSpan.classList.contains("typing"))cursorSpan.classList.add("typing");
          typedTextSpan.textContent+=textArray[textArrayIndex].charAt(charIndex);
          charIndex++;
          setTimeout(type,typingDelay);
      }else{
        cursorSpan.classList.remove("typing");setTimeout(erase,newTextDelay);
      }
    }

    function erase()  {
      if(charIndex>0) {
        if(!cursorSpan.classList.contains("typing"))cursorSpan.classList.add("typing");
          typedTextSpan.textContent=textArray[textArrayIndex].substring(0,charIndex-1);
          charIndex--;
          setTimeout(erase,erasingDelay);
        }else{
          cursorSpan.classList.remove("typing");
          textArrayIndex++;
          if(textArrayIndex>=textArray.length)textArrayIndex=0;
          setTimeout(type,typingDelay+1100);
        }
      }
    document.addEventListener("DOMContentLoaded",function(){if(textArray.length)setTimeout(type,newTextDelay+250);
    });