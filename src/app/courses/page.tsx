import Header from "@/components/header";
import GridPattern from "@/components/ui/grid-pattern";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, ArrowRight, Sparkles, Zap, Target, Award, Users, Play, GraduationCap } from "lucide-react";
import Link from "next/link";

const courses = [
  {
    id: "fullstack-vibe-coding",
    slug: "fullstack-vibe-coding",
    title: "Fullstack Vibe Coding: Next.js 16 & AI Agents",
    description: "Bangun aplikasi SaaS skala produksi tanpa ngetik satu baris kode pun. Kuasai prompt engineering untuk generate code.",
    level: "Intermediate",
    duration: "40+ Jam",
    students: "2.500+",
    rating: 4.9,
    price: "Rp 499.000",
    originalPrice: "Rp 1.499.000",
    badge: "Terpopuler",
    gradient: "from-indigo-500 to-violet-600"
  },
  {
    id: "ai-agent-mastery",
    slug: "ai-agent-mastery",
    title: "AI Agent Mastery: Complete Guide",
    description: "Pelajari cara mengintegrasikan OpenAI, Claude, dan Gemini ke dalam workflow development Anda.",
    level: "Advanced",
    duration: "120+ Bab",
    students: "1.200+",
    rating: 4.8,
    price: "Rp 249.000",
    originalPrice: "Rp 699.000",
    badge: "Terbaru",
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    id: "react-vibe-coding",
    slug: "react-vibe-coding",
    title: "React Vibe Coding: Build Fast with AI",
    description: "Build aplikasi React dengan kecepatan 10x menggunakan AI. Dari setup hingga deployment.",
    level: "Beginner",
    duration: "25+ Jam",
    students: "800+",
    rating: 4.7,
    price: "Rp 349.000",
    originalPrice: "Rp 899.000",
    badge: null,
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    id: "python-ai-automation",
    slug: "python-ai-automation",
    title: "Python AI Automation Bootcamp",
    description: "Otomatisasi pekerjaanmu dengan Python dan AI. Simpan 20+ jam per minggu.",
    level: "Beginner",
    duration: "35+ Jam",
    students: "1.500+",
    rating: 4.8,
    price: "Rp 399.000",
    originalPrice: "Rp 1.199.000",
    badge: "Hot",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    id: "nextjs-production",
    slug: "nextjs-production",
    title: "Next.js Production Ready",
    description: "Deploy Next.js ke production dengan best practices. Authentication, Database, CI/CD.",
    level: "Intermediate",
    duration: "30+ Jam",
    students: "950+",
    rating: 4.9,
    price: "Rp 449.000",
    originalPrice: "Rp 1.299.000",
    badge: null,
    gradient: "from-rose-500 to-pink-600"
  },
  {
    id: "agentic-engineering",
    slug: "agentic-engineering",
    title: "Agentic Engineering Fundamentals",
    description: "Dasar-dasar Agentic Engineering. Pahami konsep AI Agents dan cara membangunnya.",
    level: "Beginner",
    duration: "20+ Jam",
    students: "3.000+",
    rating: 4.9,
    price: "FREE",
    originalPrice: null,
    badge: "Gratis",
    gradient: "from-green-500 to-emerald-600"
  }
];

const benefits = [
  { icon: <Zap className="w-5 h-5" />, text: "10x Lebih Cepat" },
  { icon: <Target className="w-5 h-5" />, text: "Project-Based" },
  { icon: <Award className="w-5 h-5" />, text: "Sertifikat" },
  { icon: <Users className="w-5 h-5" />, text: "Komunitas" }
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 to-violet-50 dark:from-gray-950 dark:to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <GridPattern width={32} height={32} x={-0.5} y={-0.5} strokeDasharray={"0"} className="text-indigo-300/50 dark:text-indigo-700/30" />
      </div>

      <Header />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Learning
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Kuasai <span className="text-indigo-600 dark:text-indigo-400">Agentic AI</span> Sekarang
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8">
            Belajar langsung dengan project nyata. Bangun aplikasi nyata yang cepat dan aman dengan bantuan AI dalam waktu singkat.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                <div className="p-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                  {benefit.icon}
                </div>
                {benefit.text}
              </div>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Link href={`/courses/${course.slug}`} key={course.id} className="group">
                <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">

                  {/* Card Header with Gradient */}
                  <div className={`h-32 bg-gradient-to-br ${course.gradient} relative p-5`}>
                    <div className="flex justify-between items-start">
                      {course.badge && (
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                          {course.badge}
                        </span>
                      )}
                      {course.price === "FREE" && (
                        <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                          FREE
                        </span>
                      )}
                    </div>

                    {/* Course Icon */}
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    {/* Meta */}
                    <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3" /> {course.level}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {course.duration}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {course.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1 line-clamp-2">
                      {course.description}
                    </p>

                    {/* Students & Rating */}
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" /> {course.students} siswa
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="text-amber-500">★</span> {course.rating}
                      </span>
                    </div>

                    {/* Price & CTA */}
                    <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                          {course.price}
                        </span>
                        {course.originalPrice && (
                          <span className="text-sm text-gray-400 line-through ml-2">
                            {course.originalPrice}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
                        Lihat <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
