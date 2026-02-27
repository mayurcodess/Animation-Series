gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis({
  duration: 2,
  smoothWheel: true
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 2000)
})

gsap.ticker.lagSmoothing(0)


gsap.utils.toArray(".move").forEach((el)=>{
  gsap.from(el,{
    y:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
      trigger:el,
      start:"top 80%",
      end:"top 30%",
      scrub:true
    }
  })
})