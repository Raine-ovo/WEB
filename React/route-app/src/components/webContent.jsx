import React, { Component } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

class WebContent extends Component {
    state = { 
        searchParams: this.props.params[0], // 获取某个参数的值
        setSearchParams: this.props.params[1] // 设置某个参数的值，并刷新页面
    } 

    handleClick = () => {
        console.log(this.state.searchParams.get("rainTail"));
        this.state.setSearchParams({
            name: "rainTail",
            age: 20,
        })
    }

    render() { 
        console.log(this.props.params);
        return (
            <React.Fragment>
                <h1>Web - {this.props.params.chapter}</h1>
                <div onClick={this.handleClick}>
                    内容
                </div>
                <hr />
                <Link to={`/web`}>返回</Link>
            </React.Fragment>
        );
    }
}
 
export default (props) => (
    <WebContent
        {...props}
        params={useSearchParams()}
    />
)