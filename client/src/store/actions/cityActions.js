export const getUsers = (body) => dispatch => {
    console.log('DIN ACTIONS')
    fetch("/users/users", body)
        .then(res => res.json())
        .then(data => dispatch({
            type: 'GET_USERS',
            payload: data
        }))
        .catch(err => { console.error(err) })
};



