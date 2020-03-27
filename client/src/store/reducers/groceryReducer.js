const groceryReducer = (state = '', action) => {
    switch (action.type) {       
        case 'GET_GROCERIES':
            return {
                ...state,
                groceries: action.payload
            };
        default:
            return state;
    }
}
export default groceryReducer;