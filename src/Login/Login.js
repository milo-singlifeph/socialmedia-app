import React from "react";

class Login extends React.Component {

    state = {
        username: "",
        password: "",
        usernameError: "",
        passwordError: ""
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = () => {
        if(this.state.username.trim() === "") {
            this.setState({
                usernameError: "This field is required"
            })
        } else {
            this.setState({
                usernameError: ""
            })
        }
        if(this.state.password.trim() === "") {
            this.setState({
                passwordError: "This field is required"
            })
        } else {
            this.setState({
                passwordError: ""
            })
        }
        if((this.state.username !== "") && (this.state.password !== "")) {
            this.props.userCredential(this.state.username, this.state.password);
        }
    }

    render() {

        return(
            <div id="login-form">
                <h3>Login</h3>
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
                <button onClick={this.login}>Login</button>
            </div>
        )

    }

}

export default Login;