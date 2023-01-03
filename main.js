const navv=document.querySelector(`.nav__navbar`);
const navvBtn=document.querySelector(`.nav__burger-btn`);
const allNavvItems=document.querySelectorAll(`.nav__item`);

const handleNavv=()=>{
    navv.classList.toggle(`nav__navbar--active`)

    allNavvItems.forEach(item=>{
        item.addEventListener(`click`,()=>{
            navv.classList.remove(`nav__navbar--active`)
        })
    })
}

navvBtn.addEventListener(`click`, handleNavv)