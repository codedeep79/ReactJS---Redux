import React from 'react';
import Note from 'Note';
import NoteForm from 'Noteform';
import {connect} from 'react-redux';

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {course: ['Android','Windows Phone','IOS','PHP']};
    }
    remove(index){
        this.state.course.splice(index, 1);
        this.setState(this.state);
    }
    add(note){
        this.state.course.push(note);
        this.setState(this.state);
        console.log( this.state.course);
    }
    render(){
        return(
            <div>
                <NoteForm handleAdd={this.add.bind(this)}/>
                {
                    this.props.course.map((e,i) => 
                        <Note remove={this.remove.bind(this)} key={i} index={i}>{e}</Note>
                    )
                }
            </div>
        );
    }
}

module.exports = connect(function(state){
    return {course: state.course} 
})(List);