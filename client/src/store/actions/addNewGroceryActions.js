export const addNewGrocery = (body) => dispatch => {    
    fetch("/addnewgrocery/addnewgrocery", body)
        .then(res => res.json())
        .then(data => dispatch({
            type: 'ADD_NEW_GROCERY',
            payload: data
        }))
        .catch(err => { console.error(err) })
};



