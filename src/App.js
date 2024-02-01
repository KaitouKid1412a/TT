import './styles.css';
import React, { useState } from 'react';
function App() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div id="app">
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div class="container">
            <div className="login-box">
              <div className="login-left">
                <img className="img-fluid" src={'https://preschool.dreamstechnologies.com/template/assets/img/login.png'} alt="Logo" />
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Welcome to Preskool</h1>
                  <p className="account-subtitle">Need an account? <a href="/">Sign Up</a></p>
                  <h2>Sign in</h2>
                  <form action="">
                    <div className="form-group">
                      <label>Username<span class="login-danger">*</span></label>
                      <input className="form-control" type="text" />
                      <span className="profile-views">
                        <i className="fas fa-user-circle"></i>
                      </span>
                    </div>
                    <div class="form-group">
                      <label>Password <span class="login-danger">*</span></label>
                      <input class="form-control pass-input" type={passwordVisible ? "text" : "password"} />
                      <span className="profile-views toggle-password" onClick={togglePasswordVisibility}>
                        {passwordVisible ? (<i className="fas fa-eye"></i>) : (<i className="fas fa-eye-slash"></i>)}

                      </span>
                    </div>
                    <div class="forgot-pass">
                      <div className="remember-me">
                        <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                          Remember me
                          <input
                            type="checkbox"
                            name="remember-me-checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                          />
                          <span className={`checkmark ${isChecked ? 'checked' : ''}`}>
                            {isChecked && <i className="fas fa-check"></i>}
                          </span>
                        </label>
                      </div>
                      <a href="forgot-password.html">Forgot Password?</a>
                    </div>
                    <div class="form-group">
                      <button class="btn btn-primary btn-block" type="submit">Login</button>
                    </div>
                  </form>
                  {/* End Form */}
                  <div class="login-or">
                    <span class="or-line"></span>
                    <span class="span-or">or</span>
                  </div>

                  <div class="social-login">
                    <a href="/"><i class="fab fa-google-plus-g"></i></a>
                    <a href="/"><i class="fab fa-facebook-f"></i></a>
                    <a href="/"><i class="fab fa-twitter"></i></a>
                    <a href="/"><i class="fab fa-linkedin-in"></i></a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
