import React, { Component } from 'react';

class Ipfs extends Component {
    state = {
        message: ""
    }

    componentDidMount() {
        fetch("/ipfs")
            .then(response => {
             if (response.ok) return response.json();
             throw new Error("Network response was not ok.");

            })
            .then(response => this.setState({ message: response.message }))
            .catch(error => this.setState({ message: error.message }));

    }
    render() {
        return <p>{this.state.message}</p>
    }
}


export default Ipfs;