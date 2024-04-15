import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../components/AuthProvider';

const Register = () => {

  const { registerUser, setUser } = useContext(AuthContext)
  const [error, setError] = useState("")
  const [emailError, setEmailError] = useState("")

  const handleRegister = (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const confirmPassword = e.target.confirmPassword.value;

    if (!/@gmail\.com$/.test(email)) {
      setEmailError("Email must end with @gmail.com")
      return
    }

    if (password.length < 6) {
      console.log("pass")
      setError("Password must be 6 characters")
      return
    }
    if (password !== confirmPassword) {
      setError("Passwords didn't match")
      return
    }
    if (!/\d{2,}$/.test(password)) {
      setError("Password must end with at least 2 numbers")
      return
    }
    if (!/[@#%^&*]/.test(password)) {
      setError("Please add a special character like @,#,%,^,&,*")
      return
    }


    setError('')
    setEmailError("")

    console.log(name, photo, email, password, confirmPassword)
    registerUser(email, password)
      .then(result => {
        setUser(result.user)
      })
      .catch(error => setError(error.message))
  }

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input name="photo" type="text" placeholder="Photo" className="input input-bordered"/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
              </div>
              {emailError && <small className='text-red-500'>{emailError}</small>}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input name="confirmPassword" type="password" placeholder="Confirm Password" className="input input-bordered" required />
              </div>
              {
                error && <small className='text-red-800'>{error}</small>
              }
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Register</button>
              </div>
              <div>
                <p>Have an account? <Link className="text-bold text-green-400" to='/login'>Login</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;