//toggle class active
const navbarNav=document.querySelector('.navbar-nav');
//ketika hambuger menu di klik
document.querySelector('#hamburger-menu').onclick=()=>{
    navbarNav.classList.toggle('active');
};

//klik di luar side bar untuk menghilangkan nav
const hamburger=document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target)&&!navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})


const about=document.querySelector('#about');
document.addEventListener('click',function(e){
    if(!about.contains(e.target)){
        window.open("https://www.w3schools.com/html/html_links.asp",'_blank');

    }
})




