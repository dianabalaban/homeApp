const removeGroceryReducer = (state = '', action) => {
    switch (action.type) {       
        case 'REMOVE_GROCERY':
            return {
                ...state,
                removegrocery: action.payload
            };
        default:
            return state;
    }
}
export default removeGroceryReducer;