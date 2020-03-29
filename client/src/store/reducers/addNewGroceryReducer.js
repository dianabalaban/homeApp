const addNewGroceryReducer = (state = '', action) => {
    switch (action.type) {       
        case 'ADD_NEW_GROCERY':
            return {
                ...state,
                newgrocery: action.payload
            };
        default:
            return state;
    }
}
export default addNewGroceryReducer;