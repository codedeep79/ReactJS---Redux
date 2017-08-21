const redux = require("redux");
const reducer = require("reducer");

//var defaultState = {
//        course: ['Android', 'Windows Phone', 'IOS'],
//        isAdding: false
//    };
//var reducer = (state = defaultState, action) => {
//    switch(action.type){
//        case 'TOGGLE_IS_ADDING':
//            return {...state, isAdding: !state.isAdding}
//        case 'ADD_ITEM':
//            return {...state, course: [...state.course, action.item]}
//       case 'REMOVE_ITEM':
//            return {...state, course: state.course.filter((e, i) => {
//              return i != action.index  
//            })}
//        default:
//            return state;
//    }
//}



var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension(): f => f
));

// Each state changed, it will print data of course to console screen
store.subscribe(() =>  {
    console.log(store.getState().course);
    var allCourse = store.getState().course;
    document.getElementById("detail-course").innerHTML = JSON.stringify(allCourse);
});

// Dispact thì nó như toggle, như công tắc
//store.dispatch({type: 'TOGGLE_IS_ADDING'});
//store.dispatch({
//    type: 'ADD_ITEM',
//    item: ['PHP','ReactJS','React Native']
//});
//store.dispatch({
//    type: 'REMOVE_ITEM',
//    index: 1
//});

module.exports = store;
