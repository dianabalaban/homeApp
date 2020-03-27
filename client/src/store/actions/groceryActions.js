export const getGroceries = (body) => dispatch => {
    
    fetch("/groceries/groceries", body)
        .then(res => res.json())
        .then(data => dispatch({
            type: 'GET_GROCERIES',
            payload: data
        }))
        .catch(err => { console.error(err) })
};



