import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="w-9/12 p-8 bg-white shadow-md rounded-lg">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold text-blue-600">
            Your Dashboard App
          </h1>
          <p className="text-gray-600 mt-2">Empower Your Business</p>
        </header>
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-4">
            Welcome to the most powerful dashboard app for your business needs.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full"
          >
            Get Started
          </button>
        </div>
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="border p-4 rounded-lg hover:shadow-md">
              <h3 className="text-xl font-semibold text-blue-600">Feature 1</h3>
              <p className="text-gray-700 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="border p-4 rounded-lg hover:shadow-md">
              <h3 className="text-xl font-semibold text-blue-600">Feature 2</h3>
              <p className="text-gray-700 mt-2">
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="border p-4 rounded-lg hover:shadow-md">
              <h3 className="text-xl font-semibold text-blue-600">Feature 3</h3>
              <p className="text-gray-700 mt-2">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
