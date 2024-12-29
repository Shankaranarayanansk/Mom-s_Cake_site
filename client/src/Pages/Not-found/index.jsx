const index = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-white">
          404
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <button
          onClick={() => window.history.back()}
          className="mt-6 px-6 py-3 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default index;
