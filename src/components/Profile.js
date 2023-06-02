import React from "react";

class Profile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Dummy Name"
            }
        }
        console.log("child constructor")
    }

    async componentDidMount() {
        const response = await fetch("https://api.github.com/users/KunalSalunkhe12")
        const json = await response.json()
        this.setState({
            userInfo: json
        })

        console.log("child componentDidMount")
    }

    componentWillUnmount() {
        console.log("child componentWillUnmount")
    }

    render() {
        console.log("render")
        return (
            <>
                <div>Profile Class Component {this.state.userInfo.name}</div>
                <p>Location: {this.state.userInfo.location}</p>
            </>)
    }
}

export default Profile