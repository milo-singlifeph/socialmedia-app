import React from "react";
import axios from "axios";

class Registration extends React.Component {

    state = {
        username: "",
        password: "",
        confirmPassword: "",
        usernameError: "",
        passwordError: "",
        confirmPasswordError: ""
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    register = () => {
        if(this.state.username === "") {
            this.setState({
                usernameError: "This field is required"
            })
        } else {
            this.setState({
                usernameError: ""
            })
        }
        if(this.state.password === "") {
            this.setState({
                passwordError: "This field is required"
            })
        } else {
            this.setState({
                passwordError: ""
            })
        }
        if(this.state.confirmPassword !== this.state.password) {
            this.setState({
                confirmPasswordError: "Password didn't match"
            })
        } else {
            this.setState({
                confirmPasswordError: ""
            })
        }
        if((this.state.username !== "" && this.state.password !== "") && (this.state.confirmPassword === this.state.password)) {
            axios.post("https://socialmedia-app-server.herokuapp.com/users", {
                username: this.state.username,
                password: this.state.password
            })
            this.setState({
                username: "",
                password: "",
                confirmPassword: ""
            })
            alert("Registration successful");
        }
    }

    render() {

        return(
            <div id="registration-form">
                <h3>Register</h3>
                <div className="form-input">
                    <label>Username: </label><input type="text" name="username" onChange={this.inputChangeHandler} value={this.state.username}/>
                </div>
                <div className="error-message">
                    <small>{this.state.usernameError}</small>
                </div>
                <div className="form-input">
                    <label>Password: </label><input type="password" name="password" onChange={this.inputChangeHandler} value={this.state.password}/>
                </div>
                <div className="error-message">
                    <small>{this.state.passwordError}</small>
                </div>
                <div className="form-input">
                    <label>Confirm Password: </label><input type="password" name="confirmPassword" onChange={this.inputChangeHandler} value={this.state.confirmPassword}/>
                </div>
                <div className="error-message">
                    <small>{this.state.confirmPasswordError}</small>
                </div>
                <button onClick={this.register}>Register</button>
            </div>
        )
    }

}

export default Registration;