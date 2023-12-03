import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    // Add logic for validation and authentication
  };

  return (
    <section className="h-screen">
      <div className="h-full">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form>
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="mb-0 mr-4 text-lg">Sign in with</p>
                <FaFacebook className="mx-1 h-9 w-9 rounded-full bg-primary text-white" />
                <FaTwitter className="mx-1 h-9 w-9 rounded-full bg-primary text-white" />
                <FaLinkedin className="mx-1 h-9 w-9 rounded-full bg-primary text-white" />
              </div>
              <div className="my-4 flex items-center border-t border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-white">Or</p>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  className="peer block w-full rounded border bg-transparent px-3 py-1 leading-5 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                  value={email}
                  onChange={handleEmailChange}
                />
                <label htmlFor="exampleFormControlInput2" className="absolute left-3 top-0 max-w-[90%] truncate pt-1 leading-5 text-neutral-500">
                  Email address
                </label>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="peer block w-full rounded border bg-transparent px-3 py-1 leading-5 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                  id="exampleFormControlInput22"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <label htmlFor="exampleFormControlInput22" className="absolute left-3 top-0 max-w-[90%] truncate pt-1 leading-5 text-neutral-500">
                  Password
                </label>
                <div
                  className="absolute right-3 top-0 mt-1 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </div>
              </div>
              <div className="mb-6 flex items-center justify-between">
                <div className="mb-[0.125rem] pl-[1.5rem]">
                  <input
                    type="checkbox"
                    className="relative float-left -ml-[1.5rem] mt-1 h-4 w-4 appearance-none rounded border border-solid border-neutral-300 outline-none checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-3 checked:after:w-1.5 checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)]"
                    id="exampleCheck2"
                  />
                  <label className="inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor="exampleCheck2">
                    Remember me
                  </label>
                </div>
                <a href="#!">Forgot password?</a>
              </div>
              <div className="text-center lg:text-left">
                <button
                  type="button"
                  className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium text-white transition duration-150 ease-in-out hover:bg-primary-600"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={handleLogin}
                >
                  Login
                </button>
                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Don't have an account?
                  <a href="#!" className="text-danger hover:text-danger-600 focus:text-danger-600 active:text-danger-700 transition duration-150 ease-in-out">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
