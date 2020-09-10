import React, { Component } from 'react'
import axios from 'axios';

export default class TestLoadData extends Component {

    state = {
        data: []
    };

    componentDidMount = () => {
        this.getPost();
    };

    getPost = () => {
       axios.get('http://localhost:5000/posts')
        .then( (res) => {
            const values = res.data
            this.setState({  data: values })
            console.log(this.state)
        }).catch((err) =>  {
            console.log({ message:err });
        });
    }

    render() {
        return (
            <div>
                <h1>Load Data Page</h1>
            </div>
        )
    }
}
