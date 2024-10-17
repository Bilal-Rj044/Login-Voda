import { useState } from "react";
import { GoAlert } from "react-icons/go";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  // Placeholder for authentication API request
  const handleLogin = (e) => {
    e.preventDefault();

    // Make a secure API call to your backend to authenticate the user
    // Replace this with actual authentication logic (e.g., JWT, OAuth)
    if (email === "test@example.com" && password === "password") {
      setAlertMessage("Login successful!");
      setShowAlert(true);
    } else {
      setAlertMessage("Invalid email or password!");
      setShowAlert(true);
    }
  };

  return (
    <main className="bg-[#F2F2F2] flex justify-center items-center h-full py-8 md:py-6 lg:py-0 md:h-screen">
      <div className="bg-white border shadow-md shadow-black relative w-[90%] sm:w-[75%] lg:w-2/5">
        <div className="w-11/12 py-8 space-y-4 bg-white">
          <h1 className="text-4xl font-[330] self-start pl-14 text-gray-800">
            Log in
          </h1>
          {showAlert && (
            <div className="mt-4 w-full sm:w-3/4 md:mx-auto  mx-3 flex flex-col sm:flex-row items-stretch border-[1.5px] border-[#BD0000] overflow-hidden h-28 sm:h-32">
              <div className="bg-[#BD0000] flex items-center justify-center px-6 h-12 sm:h-full">
                <GoAlert className="text-white  text-xl sm:text-2xl" />
              </div>
              <div className="bg-white flex-1 p-2 sm:p-4 flex flex-col sm:flex-row justify-between items-center">
                <span className="text-xs sm:text-sm font-medium text-center sm:text-left">
                  {alertMessage}
                </span>
              </div>
              <button
                onClick={() => setShowAlert(false)}
                className="text-white bg-[#BD0000] border-l px-2 text-xl  font-bold h-12 sm:h-full"
              >
                &times;
              </button>
            </div>
          )}

          <form className="w-3/4 space-y-2 mx-auto" onSubmit={handleLogin}>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full px-4 py-2 text-sm border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0096AD]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="relative">
              <label className="block mb-1 font-medium text-gray-700">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"} // Toggle input type
                placeholder="Enter your password"
                className="w-full px-4 py-2 text-sm border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0096AD]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-9 text-gray-600 focus:outline-none"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </button>
            </div>

            <div className="text-sm">
              <a href="#">
                <div className="flex flex-col gap-2">
                  <span className="underline">Forgotten username?</span>
                  <span className="underline">
                    I don`t know my mobile number
                  </span>
                </div>
              </a>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className={`w-full py-2 text-white ${
                  email && password
                    ? "bg-[#E60000] hover:bg-red-700"
                    : "bg-[#F59E9E] cursor-not-allowed"
                } focus:outline-none`}
                disabled={!email || !password}
              >
                Continue
              </button>
            </div>
          </form>

          <div className="text-center text-sm">
            <p>
              Not registered?{" "}
              <a href="#" className="underline">
                Register for My Vodafone
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
