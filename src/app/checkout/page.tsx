"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/header";
import GridPattern from "@/components/ui/grid-pattern";
import { Button } from "@/components/ui/button";
import { CheckCircle2, CreditCard, Mail, User, Phone, ArrowLeft, Loader2, Tag } from "lucide-react";

const courseData: Record<string, {
  title: string;
  price: string;
  originalPrice: string;
  description: string;
}> = {
  "fullstack-vibe-coding": {
    title: "Fullstack Vibe Coding: Next.js 16 & AI Agents",
    price: "499000",
    originalPrice: "1499000",
    description: "Bangun aplikasi SaaS skala produksi tanpa ngetik manual"
  },
  "ai-agent-mastery": {
    title: "AI Agent Mastery: Complete Guide",
    price: "249000",
    originalPrice: "699000",
    description: "Panduan tertulis komprehensif mengintegrasikan AI ke workflow"
  }
};

function CheckoutContent() {
  const searchParams = useSearchParams();
  const courseSlug = searchParams.get("course") || "fullstack-vibe-coding";
  const course = courseData[courseSlug] || courseData["fullstack-vibe-coding"];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [showPromoInput, setShowPromoInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formatPrice = (price: string | number) => {
    return new Intl.NumberFormat("id-ID").format(parseInt(price.toString()));
  };

  const discount = parseInt(course.originalPrice) - parseInt(course.price);
  const finalPrice = isPromoApplied ? discount : parseInt(course.price);

  const handleApplyPromo = () => {
    if (promoCode.trim()) {
      // Nanti akan connect ke API Laravel untuk validasi promo
      setIsPromoApplied(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Nanti akan redirect ke Laravel checkout
    alert("Akan redirect ke payment Laravel");
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 to-violet-50 dark:from-gray-950 dark:to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <GridPattern width={32} height={32} x={-0.5} y={-0.5} strokeDasharray={"0"} className="text-indigo-300/50 dark:text-indigo-700/30" />
      </div>

      <Header />

      <main className="relative z-10 max-w-4xl mx-auto px-4 py-8">
        {/* Back Link */}
        <Link href={`/courses/${courseSlug}`} className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke detail kelas
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Form */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Checkout</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nama Lengkap
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  No. WhatsApp
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    placeholder="0812 3456 7890"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Promo Code */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                {!showPromoInput ? (
                  <button
                    type="button"
                    onClick={() => setShowPromoInput(true)}
                    className="flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
                  >
                    <Tag className="w-4 h-4 mr-2" />
                    Punya kode promo?
                  </button>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Kode Promo</span>
                      <button
                        type="button"
                        onClick={() => {
                          setShowPromoInput(false);
                          setPromoCode("");
                          setIsPromoApplied(false);
                        }}
                        className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        Batal
                      </button>
                    </div>
                    {!isPromoApplied ? (
                      <div className="flex gap-2 items-center">
                        <input
                          type="text"
                          placeholder="Masukkan kode promo"
                          className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                        />
                        <Button
                          type="button"
                          onClick={handleApplyPromo}
                          className="px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg cursor-pointer"
                        >
                          Pakai
                        </Button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                          <span className="text-sm font-medium text-green-700 dark:text-green-300">
                            Promo "{promoCode}" berhasil diterapkan!
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setIsPromoApplied(false);
                            setPromoCode("");
                          }}
                          className="text-xs text-green-600 hover:text-green-700"
                        >
                          Hapus
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl text-lg font-bold cursor-pointer disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Memproses...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5 mr-2" />
                    Bayar Sekarang
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Right - Order Summary */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-6 h-fit">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Ringkasan Pesanan</h2>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{course.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{course.description}</p>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Harga</span>
                <span className="text-gray-400 line-through">Rp {formatPrice(course.originalPrice)}</span>
              </div>

              {isPromoApplied ? (
                <>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Diskon Promo</span>
                    <span className="text-green-600 font-medium">-{formatPrice(String(discount))}</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <span className="font-bold text-gray-900 dark:text-white">Total</span>
                    <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Rp 0</span>
                  </div>
                </>
              ) : (
                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="font-bold text-gray-900 dark:text-white">Total</span>
                  <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Rp {formatPrice(course.price)}</span>
                </div>
              )}
            </div>

            <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-green-800 dark:text-green-300">Akses langsung setelah pembayaran</p>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">Materi akan tersedia di dashboard Anda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function CheckoutLoading() {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 to-violet-50 dark:from-gray-950 dark:to-gray-900">
      <div className="absolute inset-0 opacity-30">
        <GridPattern width={32} height={32} x={-0.5} y={-0.5} strokeDasharray={"0"} className="text-indigo-300/50 dark:text-indigo-700/30" />
      </div>
      <Header />
      <main className="relative z-10 max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
            <Loader2 className="w-6 h-6 animate-spin" />
            <span>Memuat...</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<CheckoutLoading />}>
      <CheckoutContent />
    </Suspense>
  );
}
