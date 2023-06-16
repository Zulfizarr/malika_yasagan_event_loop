const header = document.querySelector("header")
const handleClass = () => {
    header.classList.add("header_default")
    header.classList.remove("header_active")
}
let timer = setTimeout(handleClass, 3000)
const handleScroll = () =>{
    if(window.scrollY > 30){
        header.classList.add("header_default")
        header.classList.remove("header_active")
    }else{
        header.classList.add("header_default")
        header.classList.remove("header_active")
    }
    clearTimeout(timer)
}
window.addEventListener("scroll", handleScroll)
// let idx = 10
// let timerInterval = setInterval(() => {
//     if(idx > 1){
//         idx --
//     }else{
//         console.log("interval o'chdi");
//         clearInterval(timerInterval)
//     }
//     console.log(idx)
// }, 1000)
let sekund = 0
let minut = 0
let soat  = 0
let soat_text = document.querySelector(".soat")
let minut_text = document.querySelector(".minut")
let sekund_text = document.querySelector(".sekund")
let sekundTimer = setInterval(() =>{
    if(sekund <= 99){
        sekund ++
    }else{
        sekund = 0
        minut ++
        if(minut > 60){
            soat+=1
            minut=0
            if(soat>2){
                sekund=0;
                minut=0;
                soat=0;
            }
        }
    }

    soat_text.textContent= soat.toString().padStart(2, 0) + ":"
    minut_text.textContent= minut.toString().padStart(2, 0) + ":"
    sekund_text.textContent= sekund.toString().padStart(2, 0) 
}, 0000)