const removeProductsReducer = (state = '', action) => {
    switch (action.type) {       
        case 'REMOVE_PRODUCTS':
            return {
                ...state,
                removeproducts: action.payload
            };
        default:
            return state;
    }
}
export default removeProductsReducer;