const imgHighlight = [... document.getElementsByClassName('img-presentation')];
const chosed = document.getElementById('choose-bartender');
const back = document.getElementById('back-text')
const showDiv = document.getElementById("select-bartender");

imgHighlight.map((element) => {
    setInterval(() => {
        element.classList.toggle('img-popup')
    }, 1000)
})

chosed.addEventListener('click', () =>{
    if(showDiv.style.display = "none"){
        showDiv.style.display = "flex"
    }
})

back.addEventListener('click', () =>{
    if(showDiv.style.display = "flex"){
        showDiv.style.display = "none"
    }
})
