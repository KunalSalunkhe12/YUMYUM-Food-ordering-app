//Made this in class components only to study how we write class based components

import React from "react";
import { Link } from "react-router-dom"

class MyProfile extends React.Component {

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
        console.log(json)
        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate() {
        window.scrollTo(0, document.body.scrollHeight)
    }


    render() {
        return (
            <div className="md:w-1/2 mx-auto mb-24 flex justify-center flex-col gap-4 text-center p-3">
                < img className="w-40 m-auto rounded-full" src={this.state?.userInfo?.avatar_url} alt="" />
                <p className="font-medium">{this.state?.userInfo?.bio}</p>
                <p>Location: {this.state?.userInfo?.location}</p>
                <div className="text-blue-500 font-medium">
                    <Link to={this.state?.userInfo?.html_url}>Github </Link>
                    <Link to={`https://${this.state?.userInfo?.blog}`}> Portfolio</Link>
                </div>
            </div >
        )
    }
}

export default MyProfile