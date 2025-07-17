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
    

    $('#main-visual .slide-wrap .slide:gt(0)').css('opacity', 0); // 처음엔 첫 슬라이드만 보이게
        let i = 0;
        let total = $('.slide').length;

        setInterval(function () {
            $('.slide').eq(i).animate({ opacity: 0 }, 1500); // 현재 슬라이드 숨김

            i = (i + 1) % total; // 다음 슬라이드 인덱스 계산

            $('.slide').eq(i)
            .css({ opacity: 0 }) // 미리 투명하게 만들고
            .animate({ opacity: 1 }, 1500); // 자연스럽게 나타남
    }, 4000);

    
      


    $('.sect01-wrap').slick({
      autoplay : true ,
      autoplaySpeed : 2000 ,
      infinite: true ,
      slidesToShow: 3,
      nextArrow:$('.next'),
      prevArrow:$('.prev')
    });




    const tabItem = document.querySelectorAll(".tab__item");
    const tabContent = document.querySelectorAll(".tab__content");

    tabItem.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        
        e.preventDefault(); 
        
        tabContent.forEach((content) => {
        content.classList.remove("active");
        });

        tabItem.forEach((content) => {
        content.classList.remove("active");
        });

        tabItem[index].classList.add("active");
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