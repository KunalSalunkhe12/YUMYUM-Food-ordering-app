import React from "react";
import { Outlet } from "react-router-dom";

class Contact extends React.Component {

    constructor(props) {
        super(props)
        console.log("constructor")
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")

    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    render() {
        console.log("render")
        return (
            <>
                <div>Hello From ClassComponent {this.state.count}</div>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }} className="bg-primary text-white p-2">Click</button>
                <Outlet />
            </>
        )
    }
}

export default Contact