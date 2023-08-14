import { useState } from "react";
import { auth } from "../firebase";
import { useAuthCreateUserWithEmailAndPassword } from "@react-query-firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signup = useAuthCreateUserWithEmailAndPassword(auth, {
    onError(error) {
      console.log(error);
    },
  });

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      signup.mutate({ email, password });
      setDoc(doc(firestore, "users", email), {
        favourites: [],
      });
    } catch (error) {
      console.error("Error during sign up or document set:", error);
    }
  };

  return (
    <div className="dark:bg-gray-900 h-screen ">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign Up
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit} action="#">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="md:text-lg block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                    className="md:text-base font-semibold text-indigo-500 hover:text-indigo-400"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="md:text-lg text-gray-900 block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                disabled={signup.isLoading}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
              {signup.isError && (
                <p className="text-red-400">{signup.error.message}</p>
              )}
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500 md:text-base">
            Not a member?{" "}
            <a
              href="#"
              className="md:text-base font-semibold leading-6 text-indigo-500 hover:text-indigo-400"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
