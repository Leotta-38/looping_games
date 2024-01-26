const fadeTime = 750

window.onload = () => {
  blackOutElem.style.display = 'block'
  contentWrapperElem.style.display = 'none'
  audioElem.play()
  
  $('.black-out').fadeOut(fadeTime, () => {
    $('.content-wrapper').fadeIn(fadeTime);
  });
}

