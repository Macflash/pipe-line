import React, { Component, Children } from 'react';
import { Pipe } from './pipe';
import Tone from 'tone';

export class Line extends Component<{}, { pipes: number[] }> {
    constructor(props: any) {
        super(props);
        this.state = { pipes: [1] };
    }

    componentDidUpdate() {
        // only create a new loop when total length changes
        
        const { pipes } = this.state;
        Tone.Transport.bpm.value = 120
        var synth = new Tone.Synth().toMaster();

        var total = 0;
        pipes.forEach(n => total += n);
        var note = 0;
        var block = 0;
        var loop = new Tone.Loop((time) => {
            if (note == 0) {
                synth.triggerAttackRelease("C2", total + "n", time);
            }

            note++;
            if (note == pipes[block]) {
                note = 0;
                block++;
                if (block == pipes.length) {
                    block = 0;
                }
            }
        }, total + "n");
        loop.start("0m");
        Tone.Transport.start();

        //play a middle 'C' for the duration of an 8th note
        //synth.triggerAttackRelease('C4', '8n')
    }

    componentWillUnmount() {

    }

    render() {
        const { pipes } = this.state;
        return <div style={{
            display: "flex",
            flexDirection: "row",
            padding: "10px",
            backgroundColor: "rgb(50,50,50)",
        }}>
            {pipes.map(p => <Pipe size={p} />)}
            <input
                type="text"
                style={{
                    marginLeft: "auto",
                    justifySelf: "flex-end"
                }}
                onKeyDown={e =>{
                    if(e.key == "enter"){
                        e.currentTarget.blur();
                    }
                }}
                onBlur={e => {
                    var lens = e.target.value.split(",");
                    if (lens.length) {
                        this.setState({ pipes: lens.map(l => parseInt(l)) });
                    }
                }}
            />
        </div>
    }
}