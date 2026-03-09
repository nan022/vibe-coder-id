import Header from "@/components/header";
import GridPattern from "@/components/ui/grid-pattern";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Play, Clock, Users, Star, Zap, MonitorPlay, BookOpenText, FileText, Code2, Brain, Sparkles, Award, MessageCircle, Download, Infinity, RefreshCw } from "lucide-react";
import Link from "next/link";

const courseData: Record<string, {
  title: string;
  type: "video" | "module";
  category: string;
  description: string;
  longDescription: string;
  price: string;
  originalPrice: string;
  stats: { students: string; rating: number; reviewCount: number };
  duration: string;
  level: string;
  modules: { title: string; videoCount: string; docCount: string; items: string[] }[];
  benefits: string[];
  requirements: string[];
  instructor: { name: string; role: string; avatar: string; students: string; courses: string };
}> = {
  "fullstack-vibe-coding": {
    title: "Fullstack Vibe Coding: Next.js 16 & AI Agents",
    type: "video",
    category: "Agentic Engineering",
    description: "Bangun aplikasi SaaS skala produksi tanpa ngetik manual. Kuasai prompt engineering untuk kode.",
    longDescription: "Pelajari cara membangun aplikasi SaaS skala produksi menggunakan Next.js App Router dan integrasi AI Models tanpa harus mengetik setiap baris kode secara manual. Kursus ini dirancang untuk developer yang ingin 10x lebih produktif dengan bantuan AI.",
    price: "Rp 499.000",
    originalPrice: "Rp 1.499.000",
    stats: { students: "2.500+", rating: 4.9, reviewCount: 120 },
    duration: "40+ Jam",
    level: "Intermediate",
    modules: [
      { title: "Modul 1: Pengenalan Vibe Coding & Mindset", videoCount: "5 Video", docCount: "5 Artikel", items: ["Apa itu Vibe Coding?", "Mindset AI-First", "Tools yang butuhkan", "Setup Environment"] },
      { title: "Modul 2: Prompt Engineering Dasar", videoCount: "8 Video", docCount: "6 Artikel", items: ["Anatomy of Good Prompt", "Context Engineering", "Few-shot Learning", "Chain of Thought"] },
      { title: "Modul 3: Next.js 16 dengan AI", videoCount: "12 Video", docCount: "8 Artikel", items: ["App Router Fundamentals", "AI Component Generation", "Database with AI", "Authentication Setup"] },
      { title: "Modul 4: Multi-AI Integration", videoCount: "10 Video", docCount: "6 Artikel", items: ["OpenAI Integration", "Claude API", "Gemini Pro", "Multi-Agent System"] },
      { title: "Modul 5: Production Deployment", videoCount: "5 Video", docCount: "4 Artikel", items: ["Vercel Deployment", "Database Setup", "CI/CD with AI", "Monitoring & Analytics"] },
    ],
    benefits: ["40+ Jam Video Content", "Akses Seumur Hidup", "Gratis Update", "Sertifikat Completion", "Gratis Kelas Fundamental Programming", "1-on-1 Code Review"],
    requirements: ["Dasar HTML/CSS/JS", "Mengerti konsep programming", "Laptop dengan koneksi internet", "Akun OpenAI/Claude (opsional)"],
    instructor: { name: "Nanda Laksana", role: "Fullstack Developer & AI Enthusiast", avatar: "/images/user.png", students: "10.000+", courses: "5+" }
  },
  "ai-agent-mastery": {
    title: "AI Agent Mastery: Complete Guide",
    type: "module",
    category: "Agentic Engineering",
    description: "Panduan tertulis komprehensif mengintegrasikan OpenAI, Claude, dan Gemini ke dalam workflow.",
    longDescription: "Ebook komprehensif yang mengajarkan cara membangun AI Agents untuk automating development workflow. Dari basics hingga advanced agent patterns.",
    price: "Rp 249.000",
    originalPrice: "Rp 699.000",
    stats: { students: "1.200+", rating: 4.8, reviewCount: 85 },
    duration: "120+ Bab",
    level: "Advanced",
    modules: [
      { title: "Bagian 1: Fundamentals", videoCount: "", docCount: "20 Bab", items: ["AI Agents Basics", "LLM Understanding", "Agent Architecture", "Tool Use"] },
      { title: "Bagian 2: Implementation", videoCount: "", docCount: "40 Bab", items: ["Python for Agents", "API Integration", "Memory Systems", "Planning Agents"] },
      { title: "Bagian 3: Advanced Patterns", videoCount: "", docCount: "35 Bab", items: ["Multi-Agent Systems", "Reflection Agents", "Tool Creation", "Agent Orchestration"] },
      { title: "Bagian 4: Real Projects", videoCount: "", docCount: "25 Bab", items: ["Code Review Agent", "Documentation Generator", "Test Automation", "Deployment Agent"] },
    ],
    benefits: ["120+ Halaman Ebook", "Source Code Included", "Lifetime Access", "Discord Support", "Bonus Templates"],
    requirements: ["Dasar Programming", "Mengerti API", "Laptop untuk coding", "Akun OpenAI"],
    instructor: { name: "Nanda Laksana", role: "AI Engineer", avatar: "/images/user.png", students: "10.000+", courses: "5+" }
  }
};

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const course = courseData[resolvedParams.slug] || courseData["fullstack-vibe-coding"];

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 to-violet-50 dark:from-gray-950 dark:to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <GridPattern width={32} height={32} x={-0.5} y={-0.5} strokeDasharray={"0"} className="text-indigo-300/50 dark:text-indigo-700/30" />
      </div>

      <Header />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left - Course Info */}
              <div className="lg:col-span-2">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <Link href="/courses" className="hover:text-indigo-600 dark:hover:text-indigo-400">Kelas</Link>
                  <span>/</span>
                  <span className="text-gray-900 dark:text-white">{course.title}</span>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-medium">
                    <Zap className="w-4 h-4 mr-2" /> {course.category}
                  </div>
                  {course.type === "video" ? (
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium border border-blue-200 dark:border-blue-800">
                      <MonitorPlay className="w-4 h-4 mr-2" /> Video Course
                    </div>
                  ) : (
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-sm font-medium border border-amber-200 dark:border-amber-800">
                      <BookOpenText className="w-4 h-4 mr-2" /> E-Book
                    </div>
                  )}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-sm font-medium">
                    {course.level}
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
                  {course.title}
                </h1>

                {/* Description */}
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  {course.longDescription}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm mb-6">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-amber-500 mr-2" />
                    <span className="font-bold text-gray-900 dark:text-white">{course.stats.rating}</span>
                    <span className="text-gray-500 dark:text-gray-400 ml-1">({course.stats.reviewCount} review)</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Users className="w-5 h-5 mr-2" />
                    {course.stats.students} siswa
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Clock className="w-5 h-5 mr-2" />
                    {course.duration}
                  </div>
                </div>

                {/* Instructor */}
                <div className="flex items-center gap-3">
                  <img src={course.instructor.avatar} alt={course.instructor.name} className="w-12 h-12 rounded-full bg-gray-200" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{course.instructor.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{course.instructor.role}</div>
                  </div>
                </div>

                {/* Tools & Technologies */}
                <div className="mt-6">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Tools & Technologies</div>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: "Claude", img: "/images/logos/claude.png" },
                      { name: "Gemini", img: "/images/logos/gemini.png" },
                      { name: "GPT", img: "/images/logos/gpt.png" },
                      { name: "Qwen", img: "/images/logos/qwen.png" },
                      { name: "Ollama", img: "/images/logos/ollama.png" },
                      { name: "Next.js", img: "/images/logos/nextjs.png" },
                    ].map((tool, idx) => (
                      <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                        <img src={tool.img} alt={tool.name} className="w-5 h-5 object-contain" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right - Sticky Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                  {/* Preview */}
                  <div className="aspect-video bg-gradient-to-br from-indigo-500 to-violet-600 relative overflow-hidden group cursor-pointer">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        {course.type === "video" ? (
                          <Play className="w-8 h-8 text-white fill-white ml-1" />
                        ) : (
                          <BookOpenText className="w-8 h-8 text-white" />
                        )}
                      </div>
                    </div>
                    {/* Play overlay */}
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                        Preview Available
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">{course.price}</span>
                        {course.originalPrice && (
                          <span className="text-lg text-gray-400 line-through">{course.originalPrice}</span>
                        )}
                      </div>
                      {course.originalPrice && (
                        <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                          Hemat {Math.round((1 - parseInt(course.price.replace(/\D/g,'')) / parseInt(course.originalPrice.replace(/\D/g,''))) * 100)}%
                        </span>
                      )}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col space-y-3 mb-6">
                      <Link href={`/checkout?course=${resolvedParams.slug}`}>
                        <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl text-lg font-bold shadow-lg cursor-pointer">
                          Daftar Sekarang
                        </Button>
                      </Link>
                      <Button variant="outline" className="w-full border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-400 py-3 rounded-xl font-semibold cursor-pointer">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Tanya via WhatsApp
                      </Button>
                    </div>

                    {/* Quick Benefits */}
                    <div className="space-y-2 pt-4 border-t border-gray-100 dark:border-gray-800">
                      {course.benefits.slice(0, 5).map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="py-12 bg-white dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Yang Akan Kamu Pelajari
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {course.modules.flatMap(m => m.items).slice(0, 8).map((item, idx) => (
                <div key={idx} className="flex items-start p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Curriculum */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Kurikulum Kelas
              </h2>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {course.modules.length} Modul • {course.duration}
              </span>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {course.modules.map((module, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                  <div className="p-4 sm:p-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{module.title}</h3>
                        <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {course.type === "video" ? (
                            <span className="flex items-center"><Play className="w-3 h-3 mr-1" /> {module.videoCount}</span>
                          ) : (
                            <span className="flex items-center"><FileText className="w-3 h-3 mr-1" /> {module.docCount}</span>
                          )}
                          <span>•</span>
                          <span>{module.items.length} Topik</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" className="border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-400 font-semibold cursor-pointer">
                Lihat Semua Modul
              </Button>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-12 bg-white dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Requirements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {course.requirements.map((req, idx) => (
                <div key={idx} className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mr-3">
                    <Code2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantees */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-800">
                <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-7 h-7 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Gabung Komunitas</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Diskusi bareng student lain di Discord</p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-800">
                <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                  <Infinity className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Lifetime Access</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Sekali beli, akses selamanya</p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-800">
                <div className="w-14 h-14 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
                  <Download className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Free Updates</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Materi selalu up-to-date</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
