var timelineSwiper = new Swiper(".timeline .swiper-container", {
    direction: "vertical",
    loop: false,
    speed: 1600,
    pagination: ".swiper-pagination",
    paginationBulletRender: function(swiper, index, className) {
      var year = document
      .querySelectorAll(".swiper-slide")
      [index].getAttribute("data-year");
      return '<span class="' + className + '">' + year + "</span>";
    },
    paginationClickable: true,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    breakpoints: {
      768: {
        direction: "horizontal"
      }
    }
  });

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } 
    });
  });

  let summary = document.querySelector('.intro');

let htmlSummaryText = `<div class="subhead"></div>`
summary.innerHTML+= htmlSummaryText;

let summaryTextValue = `Student at Faculty of Computer and Information Sciences Ain Shams`

let summaryText = document.querySelector(".subhead");
summaryText.innerHTML = '';

//type animation summary
let wordIndex = 0;

function typeAnim(){
    let text = '';
    text = summaryTextValue.substring(0, text.length + wordIndex);
    summaryText.innerHTML = text
    if(wordIndex!=summaryTextValue.length){
        setTimeout(typeAnim, 95);
        wordIndex++;
    }
}
typeAnim()