//Docs link https://greensock.com/get-started/

//from() is used to animate elements from the values you provide to the current css values

// to() is used to animate elements to the values you provide from the values they have in css

// Animations in a absolute manner without any relation to each other

// gsap.from(".header", { duration: 2, y: "-10%", ease: "bounce" });
// gsap.from(".link", { duration: 1, opacity: 0, delay: 1, stagger: ".5s" });

// gsap.from(".right", { duration: 1, x: "-100vw", delay: 1, ease: "power2.in" });

// gsap.from(".left", { duration: 1, delay: 1.5, x: "-100%" });
// gsap.to(".footer", { duration: 1, y: 0, ease: "elastic", delay: 2.5 });

// gsap.fromTo(
//   ".button",
//   { opacity: 0, scale: 0, rotation: 720 },
//   { opacity: 1, scale: 1, rotation: 0, duration: 1, delay: 3.5 }
// );

// const obj = { x: 0 };

// gsap.to(obj, { x: 100, onUpdate: () => console.log(obj.x), duration: 2 });

// Timeline provides relation between the animation,one is executed after the other is finished and is related to it
// Default parameters can be passed to the timeline which will be common for all the animations in the timeline

// const timeline = gsap.timeline({ defaults: { duration: 1 } });

// timeline
//   .from(".header", {
//     y: "-100%",
//     ease: "bounce",
//     onComplete: (param) => console.log(param),
//     onCompleteParams: ["Header Animation Completed"],
//     onStart: () => console.log("Header Animation started"),
//     onUpdate: () => console.log("Header Animation is being updated"),
//     onRepeat: () => console.log("Header Animation is being repeated"),
//     onReverseComplete: () => console.log("Header Animation revered completed"),
//   })
//   .from(".link", { opacity: 0, stagger: ".5s", ease: "steps(5)" }) // stagger property allows you to execute animation on targeted elements in linear/asynchronous manner
//   .set(".link", { fontSize: 50 }) // when you want to set properties on the element during animation
//   .from(".right", { x: "-100vw", ease: "power2.in" }, 1) // 1 shows absolute delay when the timeline is started
//   .from(".left", { x: "-100%" }, "<.5") // "<.5 defines the offset with the last animation , in this case this animation will start after .5s second of the last animation is started"
//   .to(".footer", { y: 0, ease: "elastic" })
//   .fromTo(
//     ".button",
//     { opacity: 0, scale: 0, rotation: 720 },
//     { opacity: 1, scale: 1, rotation: 0 }
//   );

// // timeline gives you many features, it allows you to reverse the timeline and with the speed you want, in case it is reversed 3 times the speed of the animation
// const button = document.querySelector(".button");

// button.addEventListener("click", () => {
//   timeline.timeScale(3);
//   timeline.reverse();
// });

// var tween = gsap.from(".header", { duration: 2, y: "-10%", ease: "bounce" });
// tween.pause();
// tween.resume();

// tween.reverse();

// jumping animation to this time
// tween.seek(1);

// jumping animation to the 3/4 of total time
// tween.progress(0.75);

// speeding up the animation 5 times
// tween.timeScale(5);

//killing the animation
// tween.kill();

// restarting the animation after .5s
// setTimeout(() => {
//   tween.restart();
// }, 500);

/* 
    Things to do
1 Plugins
2 Callbacks
3 Easing functions
3 Staggers
4 Controlling Animations
5 And following topics...

*/
