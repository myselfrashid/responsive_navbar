const toggleBtn = document.querySelector('.burger');
const nav = document.querySelector('.list');
const links = document.querySelectorAll('.list-items');

toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('true');

    links.forEach((link, index) => {
        if (link.style.animation){
            link.style.animation = '';
        }
        else{
            link.style.animation = `listfade 1s ease-in ${index / 100}s`
            console.log(index);
        }

    });
    toggleBtn.classList.toggle('toggle');
})