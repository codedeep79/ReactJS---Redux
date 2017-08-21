import React from 'react';
import {connect} from 'react-redux';
import {removeItem} from 'action';

class Note extends React.Component{
    constructor(props){
        super(props);
    }
    remove(){
        //var {index, remove} = this.props;
        // same same: this.props.index, this.props.remove
        //remove(index);
        // this.props.remove(index);
        var {index, dispatch} = this.props;

        // Trong ES6, tên thuộc tính bằng tên biến thì ta ghi 1 cái thôi
        dispatch(removeItem(index));
    }
    render(){
        return (
            <div>
                <p>{this.props.children}</p>
                <button onClick={this.remove.bind(this)}>Delete</button>
            </div>
        );
    }
}

module.exports = connect()(Note);