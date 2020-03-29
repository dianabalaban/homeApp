export const updateGrocery = (body) => dispatch => {    
    fetch("/updategrocery/updategrocery", body)
        .then(res => res.json())
        .then(data => dispatch({
            type: 'UPDATE_GROCERY',
            payload: data
        }))
        .catch(err => { console.error(err) })
};



