export const deleteProduct = (body) => dispatch => {    
    fetch("/deleteproduct/deleteproduct", body)
        .then(res => res.json())
        .then(data => dispatch({
            type: 'REMOVE_PRODUCTS',
            payload: data
        }))
        .catch(err => { console.error(err) })
};



