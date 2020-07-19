var tl = gsap.timeline()

tl.from("#raindrop", {y:"-300", duration: 0.3})
  .to("#raindrop", {height: 0, duration: 0.2})
  .from(".main", {clipPath: "circle(0%)", duration: 1.5, ease:'Power1.easeInOut'}, "-=0.15")