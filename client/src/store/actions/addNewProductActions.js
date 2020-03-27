export const addNewProduct = (body) => dispatch => {    
    fetch("/addnewproduct/addnewproduct", body)
        .then(res => res.json())
        .then(data => dispatch({
            type: 'ADD_NEW_PRODUCT',
            payload: data
        }))
        .catch(err => { console.error(err) })
};



