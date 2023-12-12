const mydiv = document.getElementById('cartAll')

function getProducts () {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    mydiv.innerHTML = ``
    cart.map((item,index )=> {
        const box = document.createElement('div')
        box.className = "box"
        box.innerHTML = `
        <img src="${item.image}" alt="">
        <p>${item.title}</p>
        <button onclick="removeItem(${index})">Remove from cart</button>`
        mydiv.append(box)
    })
}

function removeItem (index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getProducts()
}

window.onload = () => {
    getProducts()
}


