import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";


const Login = () => {

  const { loginUser, googleLogin, setUser, githubLogin } = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
    loginUser(email, password)
  }

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || '/'

  const handleSocialLogin = socialProvider =>{
    socialProvider()
    .then(result =>{
      if(result.user){
        navigate(from)
      }
    })
  }

  const handleGoogleLogin = () => {
    handleSocialLogin(googleLogin)
      .then(result => setUser(result.user))
  }
  const handleGithubLogin = () => {
    handleSocialLogin(githubLogin)
      .then(result => setUser(result.user))
  }

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
              <div>
                <p>Do not have an account? <Link className="text-bold text-green-400" to='/register'>Register</Link></p>
              </div>
            </form>
            <div className="flex justify-between px-6">
              <button onClick={handleGoogleLogin} className='btn btn-outline btn-primary'>Google login</button>
              <button onClick={handleGithubLogin} className='btn btn-outline btn-primary'>Github login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;