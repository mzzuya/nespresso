jQuery(document).ready(function(){

    $(function(){
        $(document).on('scroll', function(){
            if($(window).scrollTop() > 100){
                $("header .inner").removeClass("deactive");
                $("header .inner").addClass("active");
            }else{
                $("header .inner").removeClass("active");
                $("header .inner").addClass("deactive");
            }
        })
    
    });
    

    const $slides = $('.slide');
    let i = 0;
    const total = $slides.length;

    $slides.not(':first').css('opacity', 0).removeClass('active');
    $slides.first().addClass('active');

    setInterval(function () {
        $slides.eq(i).animate({ opacity: 0 }, 1500).removeClass('active');
        i = (i + 1) % total;
        $slides.eq(i)
        .css({ opacity: 0 })
        .addClass('active')
        .animate({ opacity: 1 }, 1500);
    }, 4000);

    
      


    $('.sect01-wrap').slick({
      autoplay : true ,
      autoplaySpeed : 2000 ,
      infinite: true ,
      slidesToShow: 3,
      responsive: [
        {
        breakpoint: 426,
        settings: {
            slidesToShow: 1
        }
        }
      ],
      nextArrow:$('.next'),
      prevArrow:$('.prev')
    });




    const tabButtons = document.querySelectorAll(".tab__item button");
    const tabContent = document.querySelectorAll(".tab__content");

    tabButtons.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        // 버튼 active 관리
        tabButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        // 탭 콘텐츠 active 관리
        tabContent.forEach((content) => content.classList.remove("active"));
        tabContent[index].classList.add("active");
    });
    });




    $(".btn").click(function(){
        $("#menu,.page_cover,html").addClass("open");
        window.location.hash = "#open";
    });
    window.onhashchange = function(){
        if (location.hash != "#open") {
          $("#menu,.page_cover,html").removeClass("open");
        }
    };

});