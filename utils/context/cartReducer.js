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
            return { ...state, items: { ...state.items, ...newItem } }
        case 'REMOVE_FROM_CART':
            if (state.items[action.id].quantity > 1) {
                state.items[action.id].quantity -= 1;
            } else {
                delete state.items[action.id]
            }
            return { ...state }
        default:
            throw Error('Unknown action: ' + action.type);
    }
}