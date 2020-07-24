import React, { Component } from "react";

export class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        }
    }

    incrementCounter = () => {
        this.setState({counter: this.state.counter + 1});
    }

    render() {
        return (
            <div>
                <h2 className="bg-primary text-white text-center p-2">
                    <div>Wartość właściwości props: {this.props.value}</div>
                    <div>Wartość lokalna: {this.state.counter}</div>
                </h2>
                <div className="text-center">
                    <button className="btn btn-primary m-2" onClick={this.props.callback}>
                        Funkcja z komponentu nadrzędnego
                    </button>
                    <button className="btn btn-primary m-2" onClick={this.incrementCounter}>
                        Zmiana stanu komponentu lokalnego
                    </button>
                </div>
            </div>
        )
    }
}