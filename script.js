// function loco() {
//     gsap.registerPlugin(ScrollTrigger);

//     // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

//     const locoScroll = new LocomotiveScroll({
//         el: document.querySelector(".main"),
//         smooth: true
//     });
//     // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//     locoScroll.on("scroll", ScrollTrigger.update);

//     // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
//     ScrollTrigger.scrollerProxy(".main", {
//         scrollTop(value) {
//             return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//         }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//         getBoundingClientRect() {
//             return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//         },
//         // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//         pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
//     });




//     // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//     // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//     ScrollTrigger.refresh();



// }
// loco()


const lenis = new Lenis()

lenis.on('scroll', (e) => {
  
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 700)
})

gsap.ticker.lagSmoothing(0)

gsap.to('.page1-text h1', {
    transform: "translate(-120%)",
    scrollTrigger: {
        trigger: ".page1",
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        scrub: 1,
        // markers:true,
    }
})
Shery.mouseFollower({
    

});
gsap.from('.page2 h1', {
    // transform:"translate(-120%)",
    opacity: 0,
   
    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        start: "top 50%",
        end: "top 0%",
        scrub: 1,
        // markers: true,
    }
})

const page5H1 = document.querySelectorAll(".page5-images h1");
const page5Img = document.querySelectorAll(".box")

page5H1.forEach(function(elem,index){
elem.addEventListener("mouseenter",function(){
        gsap.to(page5Img[index],{
            opacity:1,
        })
})
elem.addEventListener("mouseleave",function(){
    gsap.to(page5Img[index],{
        opacity:0,
    })
})
})

gsap.from('.page2-1 h1', {
    // transform:"translate(-120%)",
    opacity: 0,
   
    scrollTrigger: {
        trigger: ".page2-1",
        scroller: "body",
        start: "top 50%",
        end: "top 0%",
        scrub: 1,
        // markers: true,
    }
})

gsap.from('.page3-1 h1', {
    // transform:"translate(-120%)",
    opacity: 0,
   
    scrollTrigger: {
        trigger: ".page3-1",
        scroller: "body",
        start: "top 50%",
        end: "top 0%",
        scrub: 1,
        // markers: true,
    }
})

gsap.from('.page5 ', {
    // transform:"translate(-120%)",
    opacity: 0,
   
    scrollTrigger: {
        trigger: ".page5",
        scroller: "body",
        start: "top 50%",
        end: "top 0%",
        scrub: 1,
        // markers: true,
    }
})

gsap.from('.page6 h1', {
    // transform:"translate(-120%)",
    opacity: 0,
   
    scrollTrigger: {
        trigger: ".page6",
        scroller: "body",
        start: "top 50%",
        end: "top 0%",
        scrub: 1,
        // markers: true,
    }
})

gsap.from('.page7 h1', {
    // transform:"translate(-120%)",
    opacity: 0,
   
    scrollTrigger: {
        trigger: ".page7",
        scroller: "body",
        start: "top 50%",
        end: "top 0%",
        scrub: 1,
        // markers: true,
    }
})
gsap.from('.page8 img', {
    // transform:"translate(-120%)",
    opacity: 0,
   
    scrollTrigger: {
        trigger: ".page8",
        scroller: "body",
        start: "top 50%",
        end: "top 0%",
        scrub: 1,
        // markers: true,
    }
})

gsap.from('.page9 h1', {
    // transform:"translate(-120%)",
    opacity: 0,
   
    scrollTrigger: {
        trigger: ".page9",
        scroller: "body",
        start: "top 50%",
        end: "top 0%",
        scrub: 1,
        // markers: true,
    }
})


function themeChange() {

    var obys = document.querySelector(".nav img");

    obys.addEventListener("click", function () {
        document.documentElement.style.setProperty("--primary", "#fff");
        document.documentElement.style.setProperty("--secondary", "#0A0A0A");
    })
};

themeChange();



// var themeButton =  document.querySelector(".page1-text>h1");



// themeButton.addEventListener("click",function(){
//     console.log("hey");
// //    document.documentElement.style.setProperty('--primary','#fff');
// });

// var hiddenDiv = document.querySelector(".page1-hidden");
// var btn = document.querySelector("#button");

// document.getElementById('button').addEventListener('click',function(){
//     var hiddenDiv = document.getElementById('hiddenDiv');

//     if(hiddenDiv.style.display === 'none' || hiddenDiv.style.display === '')
//       {
//         hiddenDiv.style.display = 'block';
//       }

//       else{
//         hiddenDiv.style.display = 'none';
//       }
// });
// btn.addEventListener('mouseenter',function(){
//     console.log("hey");
// });
let flag = false;
var hidden = document.querySelector(".page1-hidden");
var click  = document.querySelector(".nav #button");
click.addEventListener('click',function(){
if(flag)
   
{    
           hidden.style.opacity = 1;
           hidden.style.transition = "all ease 0.5s"
           hidden.style.zIndex = "9999";
           click.style.rotate = "45deg";
           click.style.transition = "all ease 0.5s";
           
}

else
    {
        hidden.style.opacity = 0;
        hidden.style.transition = "all ease 0.5s"
        hidden.style.zIndex = "0";
        click.style.rotate = "0deg";
        click.style.transition = "all ease 0.5s";
       
    }

flag =! flag;
    
    
    //    hidden.style.zindex = 999999999999999999999999999999999999999999;
});
// click.addEventListener('click',function(){
//     {

        
//         {
//             hidden.style.opacity = 0;
//             hidden.style.transition = "all ease 0.5s"
//             hidden.style.zIndex = "0";
//             click.style.rotate = "0deg";
//             click.style.transition = "all ease 0.5s";
           
//         }
        
//         }
        
//            hidden.style.zindex = 999999999999999999999999999999999999999999;
//     });




// click.addEventListener('mouseleave',function(){

//     hidden.style.opacity = 0;
//     hidden.style.zIndex = -9999999999;
// });




Shery.imageEffect(".foot", {
  style: 5, //Select Style
//   debug: true, // Debug Panel
  gooey:true,
  config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":"9","range":[-9999999,9999999]},"aspect":{"value":2.1852764600431778},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
});
