import React from "react";
import MyContext from "./MyContext";
import axios from "axios";

class MyProvider extends React.Component {

    userLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    userCredential = (username, password) => {
        this.setState({
            user: {
                username: username,
                password: password
            }
        })
        axios.post("https://socialmedia-app-server.herokuapp.com/login", {
            username: username,
            password: password
        }).then(res => {
            if(res.data.error) {
                alert("Invalid username/password");
            } else {
                localStorage.setItem("appUser", JSON.stringify(res.data));
                this.userLogin();
            }
        })
    }

    logout = () => {
        localStorage.removeItem("appUser");
        this.setState({
            isLoggedIn: false
        })
    }

    addPost = (post) => {
        axios.post("https://socialmedia-app-server.herokuapp.com/posts", {
            post: post
        }).then(res => {
            console.log(res.data);
            this.setState({
                posts: [...this.state.posts, res.data]
            })
        })
    }

    state = {
        isLoggedIn: localStorage.getItem("appUser") ? true : false,
        user: JSON.parse(localStorage.getItem("appUser")),
        posts: [],
        userLogin: this.userLogin,
        userCredential: this.userCredential,
        logout: this.logout,
        addPost: this.addPost
    }

    componentDidMount() {
        axios("https://socialmedia-app-server.herokuapp.com/posts")
        .then(res => {
            let posts = res.data;
            this.setState({
                posts: posts
            })
        })
    }

    render() {

        return(
            <MyContext.Provider value={this.state}>
                {this.props.children}
            </MyContext.Provider>
        )

    }

}

export default MyProvider;