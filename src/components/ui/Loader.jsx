const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm z-50">
      <div className="relative w-20 h-20">
        <div className="absolute top-0 left-0 w-full h-full border-8 border-primary-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-8 border-transparent border-t-primary-600 rounded-full animate-spin"></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-8 border-transparent border-t-secondary-500 rounded-full animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "1.2s" }}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
