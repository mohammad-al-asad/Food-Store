import Footer from "~/components/Footer";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import Nav from "~/components/Nav";
import { IoHomeOutline } from "react-icons/io5";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";

function login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  localStorage.setItem("username", "asad");
  localStorage.setItem("password", "asad");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const localUsername = localStorage.getItem("username");
    const localPassword = localStorage.getItem("password");

    if (localUsername == username && localPassword == password) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    }
  };

  const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };
  return (
    <div className="h-screen flex flex-col justify-between">
      <Nav />
      {/* Breadcrumb Section */}
      <section className="h-[120px] bg-[url(../Breadcrumbs.png)] bg-cover bg-no-repeat flex items-center pl-[200px]">
        <div className="flex items-center h-[120px] text-gray-400 gap-2 text-[16px]">
          <IoHomeOutline />
          <span>&gt;</span>
          <span>Account</span>
          <span>&gt;</span>
          <span className="text-green-500">Login</span>
        </div>
      </section>
      {/* Form */}
      <section className="w-full py-20">
        <div className="w-full max-w-[472px] mx-auto px-4">
          <div className="bg-white border border-[#f2f2f2] rounded-lg p-4 shadow-[0px_0px_56px_#00260214]">
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl font-semibold leading-[48px] text-[#191919] font-['Poppins'] text-center">
                Sign In
              </h1>

              <form onSubmit={handleLogin} className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  {/* Email Input */}
                  <input
                    type="text"
                    placeholder="Email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-[10px] border border-[#e6e6e6] rounded-md text-lg font-normal leading-6 text-[#999999] font-['Poppins'] bg-white outline-none focus:border-[#00b206] transition-colors"
                    required
                  />

                  {/* Password Input */}
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-2 pr-12 border border-[#e6e6e6] rounded-md text-lg font-normal leading-6 text-[#999999] font-['Poppins'] bg-white outline-none focus:border-[#00b206] transition-colors"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2"
                    >
                      <FaRegEye />
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex justify-between items-center">
                  {/* <CheckBox
                    text="Remember me"
                    text_font_size="14"
                    text_font_family="Poppins"
                    text_font_weight="400"
                    text_line_height="21px"
                    text_color="#666666"
                    layout_gap="6px"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  /> */}
                  <div className="flex justify-center gap-2">
                    <input
                      checked={rememberMe}
                      onChange={handleRememberMeChange}
                      type="checkbox"
                    />
                    <p>Remember me</p>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-sm font-normal leading-[21px] text-[#666666] font-['Poppins'] hover:text-[#00b206] transition-colors"
                  >
                    Forget Password
                  </Link>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full bg-[#00b206] text-white px-[34px] py-[10px] rounded-[22px] text-sm font-semibold leading-[21px] font-['Poppins'] hover:bg-[#2c732f] transition-colors"
                >
                  Login
                </button>

                {/* Register Link */}
                <div className="flex justify-center items-center gap-[2px]">
                  <span className="text-sm font-normal leading-[21px] text-[#666666] font-['Poppins']">
                    Do not have account?
                  </span>
                  <Link
                    to="/register"
                    className="text-sm font-medium leading-[21px] text-[#191919] font-['Poppins'] hover:text-[#00b206] transition-colors"
                  >
                    Register
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default login;
