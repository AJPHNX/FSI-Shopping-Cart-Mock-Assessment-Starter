let downButton = document.querySelector('#quantity-down')
let upButton = document.querySelector('#quantity-up')

//let originalQuantity = document.querySelector('.totalQuantity')
function updateQuantity(displayQuantity){
    let quantity = document.querySelector ('.total-quantity')
    quantity.innerHTML = displayQuantity
}
let quantity = 1
downButton.addEventListener('click', function(e){
    if (quantity>0){
       quantity--
       console.log(quantity)
    }else {
        window.alert("nothing in the cart")
    }
        updateQuantity(`Quantity: ${quantity}`)
})
upButton.addEventListener('click', function(e){
       quantity++
       console.log(quantity)
        updateQuantity(`Quantity: ${quantity}`)
})

