const btnAddSlidebar=document.querySelector(".btn-addsidbar");
const overlay=document.querySelector(".overlay");
const btnCloseSlidebar=document.querySelector(".btn-closeSidbar");
btnAddSlidebar.onclick=(e)=>{
    overlay.classList.toggle("list");
};
btnCloseSlidebar.onclick=(e)=>{
    overlay.classList.toggle("list");
};
