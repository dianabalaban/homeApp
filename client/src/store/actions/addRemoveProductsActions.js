export const addRemoveProducts = (body) => dispatch => {    
    fetch("/addremoveproducts/addremoveproducts", body)
        .then(res => res.json())
        .then(data => dispatch({
            type: 'GET_AR_PRODUCTS',
            payload: data
        }))
        .catch(err => { console.error(err) })
};



