
const drawer = document.querySelector(".drawer")
const drawerOpenButton = document.querySelector(".drawer-open-button")
const drawerCloseButton = document.querySelector(".drawer-close-button")
const drawerToggle = document.querySelector(".drawer-toggle")

var drawerState = 'closed'

drawerToggle.addEventListener('click', () => {
  if (drawerState === 'closed') {
    drawer.classList.add('drawer-open')
    drawerOpenButton.classList.add('hidden')
    drawerCloseButton.classList.remove('hidden')
    drawerState = 'open'
  } else {
    drawer.classList.remove('drawer-open')
    drawerOpenButton.classList.remove('hidden')
    drawerCloseButton.classList.add('hidden')
    drawerState = 'closed'
  }
})