import React, { Component } from 'react';
import { connect } from 'react-redux';

class Number extends Component {
    state = {  } 

    handleClick = () => {
        this.props.concat('y');
    }

    render() { 
        return (
            <React.Fragment>
                <h3>Number: </h3>
                <div>{this.props.number}</div>
                <button onClick={this.handleClick}>添加</button>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        number: state.number,
    }
}

// 这个是一个对象，有一个函数参数，这个函数参数返回了一个对象(dispatch的参数)
// 因此调用这个函数，就知道concat的参数了，直接根据dispatch修改state树
const mapDispatchToProps = {
    concat: (c) => {
        return {
            type: "concat",
            character: c,
        };
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Number);