let title = document.querySelector('.title')
let img = document.querySelector('.image')
let price = document.querySelector('.price')
let desc = document.querySelector('.desc')
let category = document.querySelector('.category')
let form = document.querySelector('.productForm')

let productInput = document.querySelector('#productId')


const url = `https://fake-store-api.mock.beeceptor.com/api/products`


form.addEventListener('submit', async function (e) {
    e.preventDefault()

    try {
        let c = parseInt(productInput.value)

        console.log("Fetching Data")

        let res = await fetch(url);
        let data = await res.json();

        if (c >= 0 && c < data.length) {
            title.innerHTML = "Product ID : " + data[c].name
            img.src = data[c].image
            desc.innerHTML = "Description : " + data[c].description;
            price.innerHTML = "Price : " + data[c].price;
            category.innerHTML = "Category " + data[c].category
        }
        else {
            alert("Impropver Idea!!!")
        }
    }
    catch {
        console.log("Handled")
    }
})