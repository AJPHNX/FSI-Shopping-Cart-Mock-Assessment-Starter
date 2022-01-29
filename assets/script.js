let downButton = document.querySelector('#quantity-down')
let upButton = document.querySelector('#quantity-up')
let rmvButton = document.querySelector('.remove')
let item = document.querySelector('.cart-item')
let itemName = document.querySelector('h3')
let totalItemPrice = document.querySelector('.total-price')
//let itemTwoPrice = 15
//let itemOnePrice = 1500

//let originalQuantity = document.querySelector('.totalQuantity')
function updateQuantity(displayQuantity){
    let quantity = document.querySelector ('.total-quantity')
    quantity.innerHTML = displayQuantity
}
function updateItemPrice(displayPrice){
    let priceText = document.querySelector ('.total-price')
    priceText.innerHTML = displayPrice
}
//price select
function itemPriceSelect(e){
    if (e.innerHTML == 'Pet Rock: limestone'){
        let newPrice = '15'
    }else if(e.innerHTML == 'Pet Rock: Bertrandite'){
        let newPrice = '1500'
    }
    console.log(newPrice)
    return  newPrice
}

let quantity = 1
if (quantity){
    let quantPrice = quantity * 15
    updateItemPrice(`Total Price available at checkout: $ ${quantPrice}`)
}else{ quantPrice = 0

}

downButton.addEventListener('click', function(e){
    let quantPrice = quantity * 15
    if (quantity>0){
       quantity--
       console.log(quantity)
    }else {
        window.alert("nothing in the cart")
    }
        updateQuantity(`Quantity: ${quantity}`)
        updateItemPrice(`Total Price available at checkout: $ ${quantPrice}`)
})
upButton.addEventListener('click', function(e){
       quantity++
       let quantPrice = quantity * 15
        updateQuantity(`Quantity: ${quantity}`)
        console.log(quantity)
        console.log('total Price:'+ quantPrice)
        updateItemPrice(`Total Price available at checkout: $ ${quantPrice}`)
})

rmvButton.addEventListener('click',function(e){
    item.style.visibility = 'hidden'
    if (quantity-- <1){
        window.alert('Cart Empty')
    } else {updateQuantity(`Quantity: ${quantity}`)}
    console.log('Removed')
}) 