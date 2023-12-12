const renderProducts = () => {
    axios.get("https://655c83b725b76d9884fd6e9b.mockapi.io/products")
        .then((res) => {
            db = res.data
            db.map((item) => {
                let myDiv = document.createElement("div")
                myDiv.className = "myDiv"
                myDiv.innerHTML = `
            <img src="${item.image}" alt="">
            <h2>${item.title}</h2>
            <button onclick = "addToCart(${item.id})">Add to Cart</button>
            `
                products.append(myDiv)
            })
        })
}

const addToCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push(db.find(item => item.id == id))
    localStorage.setItem("cart", JSON.stringify(cart))
    console.log(cart);
}



window.onload = () => {
    renderProducts()
}




function searchByName() {
    axios.get("https://655c83b725b76d9884fd6e9b.mockapi.io/products")
        .then((res) => {
            let db = res.data;
            var searchInput = document.getElementById("searchInput").value.toLowerCase();
            var resultList = document.getElementById("resultList");
            resultList.innerHTML = "";

            for (var i = 0; i < db.length; i++) {
                var title = (db[i].title).toLowerCase();

                if (title.includes(searchInput)) {
                    resultList.innerHTML = `
            <img src="${db[i].image}" alt="">
            <h2>${db[i].title}</h2>
            `;
                }
            }
        });
}
