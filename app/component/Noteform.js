import React from 'react';
import {connect} from 'react-redux';
import {toggle, addItem} from 'action';

class NoteForm extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {isAdding: false};
    }

    // Submit có tham số e để chống refesh trang web khi nhấn enter và khi nhấn nút add
    add(e){
        e.preventDefault();
        var {dispatch} = this.props;
        dispatch(addItem(this.refs.txtCourse.value));

        // dispatch giống như công tắc, sử dụng xong thì tắt công tắc
        dispatch(toggle());
    }
    toggle(){
        var {dispatch} = this.props;
        dispatch(toggle());
    }
    render(){
        if (this.props.isAdding)
            return(
                <form onSubmit={this.add.bind(this)}>
                    <input type="text" ref="txtCourse" placeholder="Enter Your Course..."/>
                    <button>Add Course</button>
                </form>
            )
        
        return(
            <button onClick={this.toggle.bind(this)}>+</button>
        )
    }
}

module.exports = connect(function(state){
    return {isAdding: state.isAdding}
})(NoteForm);