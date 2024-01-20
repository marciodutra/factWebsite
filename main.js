window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(recycle)
  activateMenuAtCurrentSection(curiosities)
  activateMenuAtCurrentSection(ecopoint)
    activateMenuAtCurrentSection(gallery)
  activateMenuAtCurrentSection(about)
}

function activateMenuAtCurrentSection(section) {
  //Linha Alvo (cria uma linha imaginaria no meio da tela)
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop //topo da seção
  const sectionHeight = section.offsetHeight //altura da seção
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop //Verificar se a linha top alcançou ou ultrapassou a linha alvo

  //verificar se a linha a base esta abaixo da linha alvo
  const sectionEndAt = sectionTop + sectionHeight
  const sectionEndAtPassedTargetLine = sectionEndAt <= targetLine

  const sectionBoudaries =
    sectionTopReachOrPassedTargetLine && !sectionEndAtPassedTargetLine

  // essa é a forma de pegar um "objeto" no html e trazer como uma string pro Js
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoudaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #recycle,
  #recycle header,
  #recycle .card
  #curiosities, 
  #curiosities header, 
  #curiosities .content`)
