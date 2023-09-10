import { useNavigate } from "react-router-dom";
import { AppSettings } from "../../settings/App.settings";

const LoginPage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen flex-col ">
      <div className="text-3xl p-10">{AppSettings.name}</div>
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            onClick={() => navigate("/overview")}
            type="button"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
