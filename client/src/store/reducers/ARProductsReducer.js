const arProductsReducer = (state = '', action) => {
    switch (action.type) {       
        case 'GET_AR_PRODUCTS':
            return {
                ...state,
                arproducts: action.payload
            };
        default:
            return state;
    }
}
export default arProductsReducer;