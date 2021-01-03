const mediaQuery = window.matchMedia("(max-width: 600px)");
if (mediaQuery.matches) {
  const slides = document.querySelectorAll(".slide");
  const indicators = document.querySelectorAll(".indicator");

  let current = 0,
      prev = 3, 
      next = 1, 
      oldPrev;

  // initial state
  slides[0].classList.add("current");
  slides[3].classList.add("prev");
  slides[1].classList.add("next");
  indicators[0].classList.add("active");

  // 💬 there are 4 slides, and always slide from right. 
  setInterval(() => {
    if (next === 3) {
      newNext = 0;       
    } else {
      newNext = next + 1;
    }

    oldPrev = prev;
    prev = current;
    current = next;
    next = newNext;

    slides[oldPrev].classList.remove("prev");
    slides[prev].classList.replace("current", "prev");
    slides[current].classList.replace("next", "current");
    slides[next].classList.add("next");

    // change indicator
    indicators[prev].classList.remove("active");
    indicators[current].classList.add("active");
  }, 2000);  
}