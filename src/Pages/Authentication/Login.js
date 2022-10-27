import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import illustration from "../../assets/others/Illustration.svg";
import { AuthContext } from "../../contexts/AuthProvider";
import SocialAuth from "./SocialAuth";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        if (user?.uid) {
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <section className="container mx-auto p-12 h-full">
      <div className="grid md:grid-cols-2">
        <div className="">
          <img
            src={illustration}
            className="h-4/5 block mx-auto"
            alt="Password_image"
          />
        </div>
        <div className="">
          <h1 className="font-bold text-center text-3xl">Login</h1>
          <form onSubmit={handleSubmit} className="md:w-1/2 mx-auto">
            <div className="form-control w-full max-w-xs mb-6">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs mb-6">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs mb-6">
              <input
                type="submit"
                value={"Sign In"}
                className="input input-bordered text-white w-full max-w-xs bg-[#FF3811]"
              />
            </div>
          </form>

          <div className="md:w-1/2 mx-auto">
            <p className="font-semibold text-center my-6 text-orange-700">
              New here? <Link to='/register' className="font-bold">Create a New Account</Link>
            </p>
          </div>

          <div className="md:w-1/2 mx-auto">
            <p className="font-semibold text-center my-6">Or sign in with</p>
            <SocialAuth navigate={navigate} from={from} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
