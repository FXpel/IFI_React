import { Component } from "react";

class Chrono extends Component {

    state = this.getInitialState();

    getInitialState() {
        let date = new Date();
        return {
            started: false,
            startTS: date,
            diff: new Date(date.getTimezoneOffset() * 60000),
            interval: null
        };
    }

    start = () => {
        this.setState({
            startTS: new Date(new Date() - this.state.diff),
            interval: requestAnimationFrame(this.tick),
            started: true
        });
    }

    stop = () => {
        cancelAnimationFrame(this.state.interval);
        this.setState({
            started: false
        });
    }

    reset = () => {
        cancelAnimationFrame(this.state.interval);
        this.setState(this.getInitialState());
    }

    tick = () => {
        this.setState({
            diff: new Date(new Date() - this.state.startTS),
            interval: requestAnimationFrame(this.tick)
        });
    }

    render() {
        var diff = this.state.diff;
        var milliseconds = Math.floor(diff.getMilliseconds() / 10);
        var seconds = diff.getSeconds();
        var minutes = diff.getMinutes();

        return (
            <div>
                <h1>{this.props.title}</h1>
                <div>{minutes}:{seconds}:{milliseconds}</div>
                <div>
                    {
                        !this.state.started ?
                            <button onClick={this.start}>START</button> :
                            <button onClick={this.stop}>STOP</button>
                    }
                    <button onClick={this.reset}>RESET</button>
                </div>
            </div>
        );
    }

};

export default Chrono;