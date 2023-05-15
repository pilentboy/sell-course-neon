const toggleBTN=document.querySelector(".toggle-btn")
const links=document.querySelector(".links")
const webImg=document.querySelector(".web-img")


toggleBTN.addEventListener("click",()=>{
    links.classList.toggle("display")
    webImg.classList.toggle("visible")

})

window.addEventListener("resize",()=>{
    if(window.innerWidth > 650){
        webImg.classList.remove("visible")
        links.classList.remove("display")
    }
})



//-------course type select
let cards=document.querySelectorAll(".card");
let courseTypeSelect=document.querySelector("#course-type");


courseTypeSelect.addEventListener("change",function(type){
    cards.forEach(e =>{
        e.style.display="flex"
    })

    if(this.value == 'all'){
        return 
    }

    cards.forEach(e =>{
        if(e.dataset.course != this.value){
            e.style.display="none"
        }
    })
})


//----------course cost select
let courseCost=document.querySelector("#course-cost");

courseCost.addEventListener("change",function(){
    cards.forEach(e =>{
        e.style.display="flex"
    })

    if(this.value == 'all'){
        return
    }

    cards.forEach(e =>{
        if(e.dataset.cost != this.value){
            e.style.display="none"
        }
    })


})



//----------search
let searchInput=document.querySelector("#search")
let searchBTN=document.querySelector("#searchBTN")
let searchForm=document.querySelector("#search-form")
let cardTitles=document.querySelectorAll(".card .title")

searchForm.addEventListener("submit",()=>{
    cards.forEach(e =>{
        e.style.display="flex"
    })

    let searchValue=searchInput.value

    if(searchValue.length > 0){
       cardTitles.forEach(e =>{
            if (!e.innerHTML.includes(searchValue)){
                e.parentElement.style.display="none"
            }
        })
    }


    return false
})