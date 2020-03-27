const addNewProductReducer = (state = '', action) => {
    switch (action.type) {       
        case 'ADD_NEW_PRODUCT':
            return {
                ...state,
                newproduct: action.payload
            };
        default:
            return state;
    }
}
export default addNewProductReducer;