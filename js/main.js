/* Custom js file made by JeanDoe */

//getting html elements

const nav = document.querySelector('.nav-menu'),
    toggleBtn = nav.querySelector('.nav-menu .toggle_btn');

    toggleBtn.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    //js code to make draggable nav
    function onDrag({movementY}){//movementY gets mouse vertical value
        const navStyle = window.getComputedStyle(nav),  //getting all css style of nav
            navTop = parseInt(navStyle.top), //getting nav top value & convert it
            navHeight = parseInt(navStyle.height),//getting nav height value &
            windHeight = window.innerHeight; //Getting window height
            
        nav.style.top = navTop > 0 ? `${navTop + movementY}px` : '1px';
        if(navTop > windHeight - navHeight){
            nav.style.top = `${windHeight-navHeight}px`;
        }
    }
    //This function will call user click mouse's button and move on nav
    nav.addEventListener('mousedown', () => {
        nav.addEventListener('mousemove', onDrag);
    });

    //these function will hen release mouse button and leave  mouse from nav
    nav.addEventListener('mouseup', () => {
        nav.addEventListener('mousemove', onDrag);
    });
    nav.addEventListener('mouseleave', () =>{
        nav.removeEventListener('mousemove', onDrag);
    });