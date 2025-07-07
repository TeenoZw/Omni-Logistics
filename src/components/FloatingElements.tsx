export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-500 rounded-full opacity-20 floating"></div>
      <div
        className="absolute top-40 right-20 w-6 h-6 bg-purple-500 rounded-full opacity-20 floating"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/4 w-5 h-5 bg-blue-400 rounded-full opacity-20 floating"
        style={{ animationDelay: "4s" }}
      ></div>
      <div
        className="absolute bottom-40 right-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-20 floating"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Floating squares */}
      <div
        className="absolute top-1/3 left-20 w-4 h-4 bg-blue-500 opacity-10 rotate-45 floating"
        style={{ animationDelay: "3s" }}
      ></div>
      <div
        className="absolute top-2/3 right-10 w-6 h-6 bg-purple-500 opacity-10 rotate-45 floating"
        style={{ animationDelay: "5s" }}
      ></div>
    </div>
  );
}
