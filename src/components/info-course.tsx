export default function InfoCourse() {
  return (
    <div className="relative z-10 flex justify-center w-full px-2 py-4">
      <a 
        href="/courses/hot-topic" 
        className="group flex items-center gap-3 md:gap-5 w-full max-w-2xl p-2 md:p-3 rounded-2xl transition-all duration-500
                   bg-linear-to-br from-indigo-50 to-violet-50 dark:from-gray-950 dark:to-gray-900
                   border border-gray-100 dark:border-zinc-800
                   shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)]
                   hover:shadow-indigo-500/20 dark:hover:shadow-indigo-500/10 
                   hover:-translate-y-1 md:hover:-translate-y-2"
      >
        {/* Left Side: Icon */}
        <div className="relative shrink-0 bg-orange-50 dark:bg-indigo-950/30 p-2.5 md:p-3 rounded-xl 
                        group-hover:bg-orange-500 transition-colors duration-500">
          <span className="text-xl md:text-2xl group-hover:scale-110 transition-transform duration-500 inline-block">
            🔥
          </span>
        </div>

        {/* Center: Content */}
        <div className="flex flex-col justify-center min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-orange-600 dark:text-orange-400 font-bold text-[9px] md:text-[10px] uppercase tracking-widest whitespace-nowrap">
              Hot Course
            </span>
            <span className="flex h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse"></span>
          </div>
          
          {/* Teks sekarang responsif: mengecil di mobile dan bisa wrap jika sangat panjang */}
          <h3 className="text-gray-900 dark:text-zinc-100 font-bold text-xs sm:text-sm md:text-base leading-tight break-words">
            Agentic Engineering: Fullstack Website Development
          </h3>
        </div>

        {/* Right Side: Arrow */}
        <div className="flex-shrink-0">
          <div className="p-1.5 md:p-2 rounded-full bg-gray-50 dark:bg-zinc-800 group-hover:bg-orange-500/10 transition-colors">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 md:h-5 md:w-5 text-gray-400 dark:text-zinc-500 group-hover:text-orange-500 
                         transition-all duration-300 transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
}