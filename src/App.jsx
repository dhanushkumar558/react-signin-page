/* eslint-disable no-unused-vars */
import React from 'react';


function App() {
  const toggleForm = () => {
    // Function to toggle between sign in and sign up forms
    const container = document.querySelector('.container');
    container.classList.toggle('active');
  };

  return (
    <section>
      <div className="container">
        {/* signIn Box */}
        <div className="user signinBx">
          <div className="imgBx">
            <img src="/src/images/img3.jpg" alt="" />
          </div>
          <div className="formBx">
            <form action="">
              <h2>Sign In</h2>
              <input type="text" name="" placeholder="Username" />
              <input type="password" name="" placeholder="Password" />
              <input type="submit" name="" value="Login" />
              <div className="sign-text">
                <p className="signup">
                  Don't have an account ?
                  <a href="#" onClick={toggleForm}>Sign Up.</a>
                </p>
                
                <p className="signup">
                  <a href="/">
                    <i className="fa fa-home" aria-hidden="true"></i>
                    Back to Home
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
        {/* signUp Box */}
        <div className="user signupBx">
          <div className="formBx">
            <form action="" onSubmit={() => false}>
              <h2>Create an account</h2>
              <input type="text" name="" placeholder="Username" />
              <input type="email" name="" placeholder="Email Address" />
              <input type="password" name="" placeholder="Create Password" />
              <input type="password" name="" placeholder="Confirm Password" />
              <input type="submit" name="" value="Sign Up" />
              <p className="signup">
                Already have an account ?
                <a href="#" onClick={toggleForm}>Sign in.</a>
              </p>
            </form>
          </div>
          <div className="imgBx">
            <img src="/src/images/img1.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
