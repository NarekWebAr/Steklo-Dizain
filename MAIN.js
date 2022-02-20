//Burger Menu Script
const toggleMenu = document.querySelector('.burger_menu')
const navBar = document.querySelector('.nav')

toggleMenu.onclick = function(){
    toggleMenu.classList.toggle('active')
    navBar.classList.toggle('active')
}    

document.onclick = function(e){
    if(e.target.id !== 'nav' && e.target.id !== 'burger_menu'){
        toggleMenu.classList.remove('active')
        navBar.classList.remove('active')
    }
}

// PRELOADER

document.body.onload = function(){
    setTimeout(function(){
        let preloader = document.querySelector('.load');
        if( !preloader.classList.contains('done')){
            preloader.classList.add('done');
        }
    }, 1000);
}





















































































































