//Made this in class components only to study how we write class based components

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
    }

    async componentDidMount() {
        const response = await fetch("https://api.github.com/users/KunalSalunkhe12")
        const json = await response.json()
        this.setState({
            userInfo: json
        })

    }

    render() {
        return (
            <>
                <div>Name: {this.state?.userInfo?.name}</div>
                <p>Location: {this.state?.userInfo?.location}</p>
            </>
        )
    }
}

export default Profile