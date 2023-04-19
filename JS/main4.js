const mobileMenu = document.querySelector('.mm-menu');
const screenBlock = document.querySelector('.screen-block');
function viewMenu() {
  if (mobileMenu.style.display == 'block') {
    mobileMenu.style.display = 'none'
    // screenBlock.style.display = 'block'
  } else {
    mobileMenu.style.display = 'block'
    // screenBlock.style.display = 'none'
  };
};
