import React, { Component } from 'react';

export class Pipe extends Component<{ scale: number, size: number, total: number }> {
    render() {
        const { scale, size, total } = this.props;
        return <div style={{
            flex: "none",
            height: "40px",
            width: (scale * (size / total)) + "px",
            backgroundColor: "rgb(200,200,200)",
            border: "5px solid rgb(50,50,50)",
            borderLeft: "10px solid grey",
        }}></div>
    }
}