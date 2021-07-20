const sections = document.getElementsByClassName('question');

Array.from(sections).forEach(s => {
    s.addEventListener('click', (e)=> {
        if (e.target.firstElementChild == null) {
            const sib = e.target.parentElement.nextSibling.nextSibling;
            const bold = e.target.parentElement.firstElementChild;
            bold.classList.toggle('bold');
            sib.classList.toggle("hide");
        } else {
            const sib = e.target.nextSibling.nextSibling;
            const bold = e.target.firstElementChild;
            bold.classList.toggle('bold');
            sib.classList.toggle("hide");
        }
    })
})

