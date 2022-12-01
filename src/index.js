// write your code here
const fetchData = () =>{
    fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(ramen => ramen.forEach (renderMenu))
}
const detail = document.getElementById("ramen-detail")
fetchData()

// finders
const menu = document.getElementById("ramen-menu")

// create


// append


const renderMenu = (menuObj) => {    
    const menu = document.getElementById("ramen-menu")
    const MenuImg = document.createElement("img")
    MenuImg.addEventListener("click", () =>{
        detail.src = e.target.src
        detail.name.innerText = e.target.name
    })
    menu.appendChild(MenuImg)
    MenuImg.src = menuObj.image
    
}

const updateDetail = () => {    
    const detImg = document.createElement("img")
    const detName = document.createElement("h2")
    const detRes = document.createElement("h3")
    detail.appendChild(detName,detImg,detRes)
}