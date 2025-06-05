
document.addEventListener('DOMContentLoaded',()=>{
    //Initialize swiper with desired options

    const swiper=new Swiper('.swiper',{
        //Optional parameters

        direction:'horizontal',
        loop:true,
        autoplay:{
            delay:2000,// every 5second automatic transition
            disableOnInteraction:false,
        },

        navigation:{
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev',
        },

        pagination:{
            el:'.swiper-pagination',
            clickable:true,
        },

        //if you want to click with keyboard add this,

        keyboard:{
            eanble:true,//(Left arrow and right arrow)
            onlyInViewpport:true
        },
        //also if you want mouse wheel

        mouseWheel:{
            invert:true,
        }


        
 
    })
})