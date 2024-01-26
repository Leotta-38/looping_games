const blackOutElem = document.querySelector('.black-out')
const doorWrapperElem = document.querySelector('.door-wrapper')
const contentWrapperElem = document.querySelector('.content-wrapper')
const audioElem = document.querySelector('audio[data-key="door"]')
const hintElem = document.querySelector('.hint')
const eachHintElemAll = document.querySelectorAll('.each-hint')

hintElem.childNodes[1].addEventListener('click', () => {
  hintElem.childNodes[3].classList.toggle('display-none')
})

for (let eachHintElem of eachHintElemAll) {
  eachHintElem.addEventListener('click', () => {
    eachHintElem.childNodes[1].classList.toggle('display-none')
  })
}

