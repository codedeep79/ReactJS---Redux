var courseReducer = (state = ['Android', 'IOS', 'Windows Phone'], action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return [...state, action.item];
        case 'REMOVE_ITEM':
            return state.filter((e, i) => {
              return i != action.index  
            })
        default:
            return state;
    }
}

module.exports = courseReducer;