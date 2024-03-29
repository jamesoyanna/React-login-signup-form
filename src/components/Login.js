import React from 'react'

 function Login() {
    return (
        <form>
          <h3>Sign In</h3>

      <div className="form-group">
        <label>Email address</label>
        
        <input type="email" className="form-control" placeholder="Enter email" />
        </div>    

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" />

          <div className="form-group"></div>
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">Submit</button>
        <p className="forgot-password text-right">forgot
        <a href="#">password?</a>
        </p>
        </form>
    )
}
export default Login;
