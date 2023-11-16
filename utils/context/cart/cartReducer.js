export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const quantity = state.items[action.item.id] ? state.items[action.item.id].quantity + 1 : 1
            const newItem = {
                [action.item.id]: {
                    item: action.item,
                    id: action.item.id,
                    quantity: quantity
                }
            }
            const newAddState = { ...state, items: { ...state.items, ...newItem } }
            localStorage.setItem("cartData", JSON.stringify(newAddState))
            return newAddState

        case 'REMOVE_FROM_CART':
            if (state.items[action.id].quantity > 1) {
                state.items[action.id].quantity -= 1;
            } else {
                delete state.items[action.id]
            }
            const newRemoveState = { ...state }
            localStorage.setItem("cartData", JSON.stringify(newRemoveState))
            return newRemoveState

        case 'CLEAR_CART':
            const newClearState = { ...state, items: {} }
            localStorage.setItem("cartData", JSON.stringify(newClearState))
            return newClearState

        default:
            throw Error('Unknown action: ' + action.type);
    }
}