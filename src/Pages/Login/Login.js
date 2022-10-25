import React from "react";
import illustration from "../../assets/others/Illustration.svg";
import SocialAuth from "../../components/SocialAuthentication/SocialAuth";
const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="container mx-auto p-12 h-full">
      <div className="grid md:grid-cols-2">
        <div className="">
          <img src={illustration} className="h-4/5 block mx-auto" alt="Password_image" />
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
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs mb-6">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="text"
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
          <SocialAuth/>
        </div>
      </div>
    </section>
  );
};

export default Login;
