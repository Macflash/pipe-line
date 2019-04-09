import React, { Component } from 'react';

export class Pipe extends Component<{ size: number }> {
    render() {
        const { size } = this.props;
        return <div style={{
            flex: size,
            height: "40px",
            backgroundColor: "rgb(200,200,200)",
            border: "5px solid rgb(50,50,50)",
            borderLeft: "10px solid grey",
        }}></div>
    }
}