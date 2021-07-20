const sections = document.getElementsByClassName('question');

Array.from(sections).forEach(s => {
    s.addEventListener('click', (e)=> {
        if (e.target.firstElementChild == null) {
            const sib = e.target.parentElement.nextSibling.nextSibling;
            const bold = e.target.parentElement.firstElementChild;
            bold.classList.toggle('bold');
            sib.classList.toggle("hide");
            bold.nextSibling.nextSibling.classList.toggle('up-arrow')
        } else {
            const sib = e.target.nextSibling.nextSibling;
            const bold = e.target.firstElementChild;
            bold.nextSibling.nextSibling.classList.toggle('up-arrow')
            bold.classList.toggle('bold');
            sib.classList.toggle("hide");
        }
    })
})

