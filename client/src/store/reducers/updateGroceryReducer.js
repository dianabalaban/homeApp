const updategrocery = (state = '', action) => {
    switch (action.type) {       
        case 'UPDATE_GROCERY':
            return {
                ...state,
                updategrocery: action.payload
            };
        default:
            return state;
    }
}
export default updategrocery;