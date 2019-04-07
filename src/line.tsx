import React, { Component, Children } from 'react';
import { Pipe } from './pipe';

export class Line extends Component<{ total: number }> {
    render() {
        const { total, children } = this.props;
        return <div style={{
            display: "flex",
            flexDirection: "row",
            padding: "10px",
            backgroundColor: "rgb(50,50,50)",
        }}>
            {children}
        </div>
    }
}