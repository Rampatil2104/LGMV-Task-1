burger = document.querySelector('.burger ')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightNav')

burger.addEventListner('click',()=>{
   rightNav.classList.toggle('v-class-resp');
   navList.classList.toggle('v-class-resp');
   navbar.classList.toogle('h-nav-resp')

})