const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    // const cube = document.getElementsByClassName('face-container');
    const navLinks = document.querySelectorAll('.nav-links li');

    //Toggle Nav

    burger.addEventListener('click', () => {

        const cube = document.getElementById("cube");

        if(cube !== null){
            if(cube.style.display == 'none'){
                cube.style.display = 'block';
            }
    
            else{
                cube.style.display = 'none';
            }
    
        }
        

        nav.classList.toggle('nav-active');
    });

    //Animate Links
    navLinks.forEach((link,index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index /  7 + 0.3}s`
    });
}

navSlide();