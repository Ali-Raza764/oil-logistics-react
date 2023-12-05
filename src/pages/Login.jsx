// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../config/firebase";
// import { toast } from "react-toastify";
// import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  // const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  

  // const location = useLocation();
  // const { search } = location;
  // // Use URLSearchParams to extract query parameters
  // const queryParams = new URLSearchParams(search);
  // const returnUrl = queryParams.has("returnUrl") ? queryParams.get("returnUrl") : '';
  
  const handleLogin = async (e) => {
    e.preventDefault();
    // setLoading(true)
    // try {
    //   const user = await signInWithEmailAndPassword(
    //     auth,
    //     e.target.email.value,
    //     e.target.password.value
    //   );
    //   console.log(user);
    //   console.log(e.target.email.value, e.target.password.value);
    //   toast.success("logIn successfull", {
    //     position: "bottom-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    //   setLoading(false)
    //   navigate(`/${returnUrl}`)

    // } catch (err) {
    //   console.error(err);
    //   toast.error("Login Failed!", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    //   setLoading(true)
    // }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-[80%]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h1>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  disabled={loading}
                  className="block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  disabled={loading}
                  className="block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-500 hover:bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-s focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
