
var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider_dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


/*--------------------------------Выпадающее меню*/
        var el = document.getElementsByClassName('menu-item');
        for(var i=0; i<el.length; i++) {
            el[i].addEventListener('mouseenter', showSub, false);
            el[i].addEventListener('mouseleave', hideSub, false);
        }

        function showSub(){
            if(this.children.length>1){
                this.children[1].style.height = "auto";
                this.children[1].style.opacity = "1";
                this.children[1].style.overflow = "visible";
            } else {
                return false;
            }
        }

        function hideSub(){
            if(this.children.length>1){
                this.children[1].style.height = "0";
                this.children[1].style.opacity = "0";
                this.children[1].style.overflow = "hidden";
            } else {
                return false;
            }
        }
