export const getProducts = (body) => dispatch => {
    
    fetch("/products/products", body)
        .then(res => res.json())
        .then(data => dispatch({
            type: 'GET_PRODUCTS',
            payload: data
        }))
        .catch(err => { console.error(err) })
};



