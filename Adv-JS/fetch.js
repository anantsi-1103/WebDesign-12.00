let title = document.querySelector('.title')
let img = document.querySelector('.image')
let price = document.querySelector('.price')
let desc = document.querySelector('.desc')
let catogory = document.querySelector('.category')






let id = parseInt(prompt("Enter your Product Number"))

const url = `https://fakestoreapi.com/products/${id}`

const getData = async () =>{
    console.log("Fetching the Data")

    let response = await fetch(url)
    console.log(response)

    let data = await response.json()
    console.log(data)


    title.innerHTML = data.title
    img.src = data.image
    price.innerText = `$ ${data.price}`
    desc.innerHTML = data.description
    catogory.innerHTML = data.category
}



getData()