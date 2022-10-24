import React, { Component } from 'react';

class Box extends Component {
    render() { 
        return (
            <React.Fragment>
                {this.props.children[0]}
                {this.props.children[1]}
                <div style={this.getStyles()}>x: {this.props.box.x}</div>
                <button onClick={this.props.handleClickLeft} type="button" class="btn btn-primary m-2">left</button>
                <button onClick={this.props.handleClickRight} type="button" class="btn btn-primary m-2">right</button>
                <button onClick={() => {this.props.onDelete(this.props.box.id)}} type="button" class="btn btn-danger m-2">Delete</button>
            </React.Fragment>
        );
    }

    getStyles () {
        let styles = {
            width: "100px",
            height: "50px",
            backgroundColor: "lightblue",
            borderRadius: "5px",
            color: "white",
            fontSize: "25px",
            textAlign: "center",
            marginLeft: this.props.box.x
        }

        if (this.props.box.x === 0) styles.backgroundColor = "orange";
        else styles.backgroundColor = "red";

        return styles;
    }

    to_string() {
        return `x: ${this.props.box.x}`;
    }
}
 
export default Box;