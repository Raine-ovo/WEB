import React, { Component } from 'react';

class Solution extends Component {
    state = { 
        solutions: [
            {numbers: 1164, title: "加工零件1", views: 2290},
            {numbers: 1165, title: "加工零件2", views: 2291},
            {numbers: 1166, title: "加工零件3", views: 2292},
            {numbers: 1167, title: "加工零件4", views: 2293},
            {numbers: 1168, title: "加工零件5", views: 2294},
            {numbers: 1169, title: "加工零件6", views: 2296},
            {numbers: 1170, title: "加工零件7", views: 2291},
            {numbers: 1171, title: "加工零件8", views: 2292}
        ]
    }

    handelDelete(s) {
        const new_solutions = this.state.solutions.filter(solution => solution !== s);
        this.setState({
            solutions: new_solutions
        });
    }

    render() { 
        if (this.state.solutions.length === 0) {
            return <p>No Solutions!</p>;
        }
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>标题</th>
                        <th>阅读</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.solutions.map(solution => (
                        <tr>
                            <td>{solution.numbers}</td>
                            <td>{solution.title}</td>
                            <td>{solution.views}</td>
                            <td><button onClick={() => this.handelDelete(solution)} type="button" class="btn btn-outline-danger">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}
 
export default Solution;