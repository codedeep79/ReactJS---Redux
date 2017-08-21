var React = require("react");
var ReactDOM = require("react-dom");
var store = require("./redux.js");
var {Provider} = require("react-redux");

var List = require("./component/List.js");

ReactDOM.render(
    <Provider store={store}>  
        <List />
    </Provider>,
    document.getElementById("root")
);

var obj1 = {
    name: "Nguyen Trung Hau",
    old: "21"
};
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8]

var obj2 = {...obj1, height:168};
var arr2 = {...arr1};

console.log(arr2);
console.log(obj2);


