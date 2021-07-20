const sections = document.getElementsByClassName('question');

Array.from(sections).forEach(s => {
    s.addEventListener('click', (e)=> {
        const sib = e.target.parentElement.nextSibling.nextSibling;
        sib.classList.toggle("hide")
    })
})

