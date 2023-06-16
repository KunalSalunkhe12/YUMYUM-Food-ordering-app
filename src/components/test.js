const initialState = {
    cartItems: {},
    restaurantId: 0
}

const addToCart = (item) => {
    return { ...initialState, cartItems: { ...initialState.cartItems, ...item } }
}

const item = {
    65682: {
        quantity: 5,
        items: ["apple", "banana"],
        id: 65682
    },
    65682: {
        quantity: 5,
        items: ["apple", "banana"],
        id: 64682
    }
}
const id = addToCart(item)

console.log(id);


