const usersReducer = (state = 20, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload
            };
        default:
            return state;
    }
}
export default usersReducer;