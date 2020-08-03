import React, { useContext } from 'react';
import './App.css';
import MyContext from "./MyContext";
import Registration from "./Registration/Registration";
import Login from "./Login/Login";
import AddPostForm from "./AddPostForm";
import Posts from "./Posts/Posts";

const App = () => {

  const {
    isLoggedIn,
    userCredential,
    userLogin,
    logout,
    user,
    addPost
  } = useContext(MyContext);

  return (
    <React.Fragment>
      <h1>
        Social Media App
        {isLoggedIn ? <button onClick={logout}>Logout</button> : ""}
      </h1>
      <div className="App">
        {
          isLoggedIn ?
          <div>
              <AddPostForm user={user} addPost={addPost}/>
              <Posts/>
          </div> :
          <div>
            <Registration/>
            <Login userCredential={userCredential} userLogin={userLogin}/>
          </div>
        }
      </div>
    </React.Fragment>
  );
}

export default App;
