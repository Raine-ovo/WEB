import React, { Component } from 'react';
import Box from './box';

class Boxes extends Component {
    render() { 
        return (
            <React.Fragment>
                <button onClick={this.props.onReset} type="button" class="btn btn-info">Reset</button>
                {this.props.boxes.map(box => (
                    <Box 
                        key={box.id} 
                        box={box}

                        handleClickLeft = {() => this.props.onClickLeft(box)}
                        handleClickRight = {() => this.props.onClickRight(box)}
                        onDelete = {() => this.props.onDelete(box.id)}
                    >
                        <h1>Box:</h1>
                        <p1>#{box.id}</p1>
                    </Box>
                ))}
            </React.Fragment>
        );
    }
}
 
export default Boxes;