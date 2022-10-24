import React, { Component } from 'react';
import Base from './base';
import $ from 'jquery';

class Register extends Component {
    state = {
        error_message: "",
        username: "",
        password: "",
        passwordConfirm: "",
    } 

    handleClick = e => {
        e.preventDefault();

        if (this.state.username === "") {
            this.setState({error_message: "用户名不能为空"});
        } else if (this.state.password === "") {
            this.setState({error_message: "密码不能为空"});
        } else if (this.state.passwordConfirm === "") {
            this.setState({error_message: "确认密码不能为空"});
        } else if (this.state.password !== this.state.passwordConfirm) {
            this.setState({error_message: "两次密码不一致"});
        } else {
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/calculator/register/",
                type: "get",
                data: {
                    username: this.state.username,
                    password: this.state.password,
                    password_confirm: this.state.passwordConfirm,
                },
                dataType: "json",
                success: resp => {
                    if (resp.result === "success") {
                        // 成功，重定向
                        window.location.href = "/calculator";
                    } else {
                        this.setState({error_message: resp.result});
                    }
                }
            })
        }
    }

    render() { 
        return (
            <React.Fragment>
                <Base>
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col col-sm-3">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">用户名</label>
                                        <input onChange={e => {this.setState({username: e.target.value})}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">密码</label>
                                        <input onChange={e => {this.setState({password: e.target.value})}} type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="passwordConfirm" className="form-label">确认密码</label>
                                        <input onChange={e => {this.setState({passwordConfirm: e.target.value})}} type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div style={{height: "2rem", color: "red"}}>
                                        {this.state.error_message}
                                    </div>
                                    <button onClick={this.handleClick} style={{width: "100%"}} type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Base>
            </React.Fragment>
        );
    }
}
 
export default Register;