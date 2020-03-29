export const deleteGrocery = (body) => dispatch => {    
    fetch("/deletegrocery/deletegrocery", body)
        .then(res => res.json())
        .then(data => dispatch({
            type: 'DELETE_GROCERY',
            payload: data
        }))
        .catch(err => { console.error(err) })
};