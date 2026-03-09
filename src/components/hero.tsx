import GridPattern from "./ui/grid-pattern";
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Copy, User, Instagram, Terminal, Code, Rocket, Eye } from "lucide-react";
import Link from "next/link";
import InfoCourse from "./info-course";

export default function Hero() {
  return (
    <section className="relative h-[calc(100dvh-4rem)] flex items-start justify-center overflow-hidden bg-linear-to-br from-indigo-50 to-violet-50 dark:from-gray-950 dark:to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <GridPattern width={32} height={32} x={-0.5} y={-0.5} strokeDasharray={"0"} className="text-indigo-300/50 dark:text-indigo-700/30" />
      </div>

      <div className="relative z-20 flex flex-col gap-8 w-full max-w-7xl px-4 sm:px-6 lg:px-8 h-full overflow-hidden">
        <InfoCourse />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center h-full">
          
          {/* Content Section */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs md:text-sm font-medium mx-auto lg:mx-0">
                <Rocket className="w-4 h-4 mr-2" />
                Era Baru Software Engineering
              </div>
              
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white leading-[1.1]">
                Stop Ngoding Manual! <br className="hidden sm:block" /> 
                <span className="text-indigo-600 dark:text-indigo-400 mt-2 block">Kuasai Agentic Engineering.</span>
              </h1>
              
              <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Bergabunglah ke komunitas nomor #1 agentic engineering di Indonesia. Bangun website kompleks lebih cepat dengan AI Agent. 
                Jangan cuma jadi koder, jadilah <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Agentic Engineer!</span>
              </p>
            </div>

            {/* Buttons & Trust Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <Link href="/courses" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-7 rounded-2xl font-bold text-lg shadow-xl hover:shadow-indigo-500/20 transition-all cursor-pointer">
                  Mulai Belajar
                  <Zap className="ml-2 w-5 h-5 fill-current" />
                </Button>
              </Link>

              {/* AI Logos - Horizontal Layout */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="h-10 w-10 rounded-xl ring-2 ring-white dark:ring-gray-900 overflow-hidden bg-white shadow-sm p-1.5">
                    <img src="/images/logos/ollama.png" alt="Qwen" className="object-contain h-full w-full" />
                  </div>
                  <div className="h-10 w-10 rounded-xl ring-2 ring-white dark:ring-gray-900 overflow-hidden bg-white shadow-sm p-1.5">
                    <img src="/images/logos/gemini.png" alt="Gemini" className="object-contain h-full w-full" />
                  </div>
                  <div className="h-10 w-10 rounded-xl ring-2 ring-white dark:ring-gray-900 overflow-hidden bg-white shadow-sm p-1.5">
                    <img src="/images/logos/claude.png" alt="Claude" className="object-contain h-full w-full" />
                  </div>
                </div>
                <span className="text-xl font-bold text-indigo-500">++</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 pt-4">
              {[
                { label: "Practice", val: "100%" },
                { label: "AI Models", val: "5+" },
                { label: "AI Tools", val: "4+" },
                { label: "Students", val: "5000+" }
              ].map((stat, i) => (
                <div key={i} className="p-3">
                  <div className="text-xl md:text-2xl font-bold text-indigo-600 dark:text-indigo-400">{stat.val}</div>
                  <div className="md:text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Section - Agentic IDE */}
          <div className="hidden lg:block relative w-full mt-8 lg:mt-0">
            <div className="bg-gray-900 dark:bg-gray-950 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
              {/* Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-800 dark:bg-gray-900 border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-medium">AI Agent Active</span>
                </div>
              </div>

              {/* Agentic Workflow - Code Panel */}
              <div className="p-4 space-y-3">
                {/* Step 1: User Request */}
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center shrink-0">
                    <User className="w-3 h-3 text-white" />
                  </div>
                  <div className="bg-gray-800 dark:bg-gray-800/50 rounded-lg px-4 py-2 text-sm text-gray-300">
                    Context Provisioning | MCP Configuration
                  </div>
                </div>

                {/* Step 2: AI Planning */}
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                  <div className="space-y-2">
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-4 py-2 text-sm">
                      <span className="text-gray-300"> Analyzing requirements → Generating blueprint</span>
                    </div>
                  </div>
                </div>

                {/* Step 3: Execution Progress */}
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center shrink-0">
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="text-emerald-400">✓</span>
                      <span>Component created</span>
                      <span className="text-emerald-400">✓</span>
                      <span>Styles applied</span>
                      <span className="text-emerald-400">✓</span>
                      <span>Responsive</span>
                    </div>
                    <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-full animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Step 4: Success */}
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                    <Rocket className="w-3 h-3 text-white" />
                  </div>
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-2 text-sm">
                    <span className="text-green-400 font-medium">Done!</span>
                    <span className="text-gray-300"> Website siap dalam 45 detik</span>
                  </div>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="px-4 py-3 bg-gray-800 dark:bg-gray-900 border-t border-gray-700 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <img src="/images/logos/claude.png" alt="Claude" className="w-4 h-4" />
                    <span className="text-xs text-gray-400">Claude Sonnet</span>
                  </div>
                  <span className="text-gray-600">|</span>
                  <span className="text-xs text-gray-500">~45s</span>
                </div>
                <Link href={'/courses'}>
                  <Button variant="ghost" size="sm" className="text-indigo-400 text-xs h-6 px-2 cursor-pointer">
                    <Eye className="w-3 h-3 mr-1" />
                    Lihat Kelas
                  </Button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}