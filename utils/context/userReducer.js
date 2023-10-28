export const userReducer = (state, action) => {
    switch (action.type) {
        case 'SAVE_USER':
            localStorage.setItem('profile', JSON.stringify(action.user))
            return { user: action.user }

        case 'REMOVE_USER':
            localStorage.removeItem('profile')
            return { ...state, user: null }
    }
}