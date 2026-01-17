const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-sky-900 to-secondary flex items-center justify-center z-50">
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 border-4 border-white/20 rounded-full animate-ping" />
          <div className="w-48 h-48 border-4 border-white/30 rounded-full animate-pulse" />
        </div>

        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold text-white mb-4">
            FSH<span className="text-green-400">.</span>
          </h1>
          <div className="flex items-center justify-center space-x-2 text-white/80">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce" />
            <div
              className="w-3 h-3 bg-green-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className="w-3 h-3 bg-green-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
