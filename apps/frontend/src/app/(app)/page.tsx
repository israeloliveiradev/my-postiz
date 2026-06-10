import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';

const siteName = process.env.SITE_NAME || (isGeneralServerSide() ? 'Postiz' : 'Gitroom');

export const metadata: Metadata = {
  title: siteName,
  description: 'Your ultimate social media scheduling tool. Schedule posts, track analytics, and grow your audience with AI.',
};

export default function LandingPage() {
  return (
    <div className="bg-[#0E0E0E] min-h-screen text-white font-sans selection:bg-[#612BD3] selection:text-white overflow-x-hidden">
      {/* Navigation Header */}
      <header className="border-b border-white/10 bg-[#0E0E0E]/80 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Custom styled logo container */}
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-[#612BD3] to-[#FC69FF] flex items-center justify-center shadow-lg shadow-[#612BD3]/25 animate-pulse">
              <span className="text-white font-extrabold text-xl tracking-tighter">P</span>
            </div>
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
              {siteName}
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="/privacy.html" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms.html" className="hover:text-white transition-colors">Terms of Service</a>
          </nav>

          <div className="flex items-center gap-4">
            <Link 
              href="/auth/login" 
              className="text-sm font-semibold text-gray-300 hover:text-white px-4 py-2 transition-colors"
            >
              Sign In
            </Link>
            <Link 
              href="/auth" 
              className="text-sm font-semibold bg-gradient-to-r from-[#612BD3] to-[#7d3bf2] hover:from-[#7d3bf2] hover:to-[#612BD3] text-white px-5 py-2.5 rounded-xl shadow-lg shadow-[#612BD3]/20 hover:shadow-[#612BD3]/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 max-w-7xl mx-auto px-6 text-center">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#612BD3]/10 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-[#FC69FF]/5 rounded-full blur-[100px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#FC69FF] tracking-wide uppercase">
            🚀 All-In-One Social Media Management
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight md:leading-none">
            Your Ultimate AI Social Media{' '}
            <span className="bg-gradient-to-r from-[#612BD3] via-[#a855f7] to-[#FC69FF] bg-clip-text text-transparent">
              Scheduling Tool
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Take control of your digital brand. Create, plan, schedule, and publish posts to TikTok, X, LinkedIn, Facebook, and more from a single dashboard.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link 
              href="/auth" 
              className="w-full sm:w-auto text-center font-bold bg-gradient-to-r from-[#612BD3] to-[#FC69FF] hover:opacity-95 text-white px-8 py-4 rounded-xl shadow-xl shadow-[#612BD3]/25 hover:shadow-[#612BD3]/40 transition-all duration-200 text-base"
            >
              Create Your Free Account
            </Link>
            <a 
              href="#features" 
              className="w-full sm:w-auto text-center font-semibold bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white px-8 py-4 rounded-xl transition-all duration-200 text-base"
            >
              Explore Features
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 border-t border-white/5 bg-gradient-to-b from-[#0E0E0E] to-[#121113]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Powerful Tools to Grow Your Presence
            </h2>
            <p className="text-gray-400 text-lg">
              Everything you need to automate your social pipeline and engage your audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#1A1919] border border-white/10 rounded-2xl p-8 hover:border-[#612BD3]/50 hover:shadow-lg hover:shadow-[#612BD3]/5 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-[#612BD3]/10 flex items-center justify-center text-[#612BD3] mb-6 group-hover:bg-[#612BD3] group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Multi-Platform Scheduling</h3>
              <p className="text-gray-400 leading-relaxed">
                Design and schedule content for TikTok, X, LinkedIn, and more in advance. Stay consistent across all platforms effortlessly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#1A1919] border border-white/10 rounded-2xl p-8 hover:border-[#FC69FF]/50 hover:shadow-lg hover:shadow-[#FC69FF]/5 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-[#FC69FF]/10 flex items-center justify-center text-[#FC69FF] mb-6 group-hover:bg-[#FC69FF] group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">AI-Powered Creation</h3>
              <p className="text-gray-400 leading-relaxed">
                Optimize hashtags, generate high-converting text hooks, and repurpose your best performing content automatically with integrated AI.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#1A1919] border border-white/10 rounded-2xl p-8 hover:border-[#612BD3]/50 hover:shadow-lg hover:shadow-[#612BD3]/5 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-[#612BD3]/10 flex items-center justify-center text-[#612BD3] mb-6 group-hover:bg-[#612BD3] group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Rich Analytics</h3>
              <p className="text-gray-400 leading-relaxed">
                Track post engagement, views, and click-through rates. Understand what works and scale your audience growth backed by real data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-[#1A1919] to-[#141313] border border-white/10 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="text-[#FC69FF] font-bold text-sm uppercase tracking-wider">🔒 Compliant & Secure</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Enterprise-Grade Platform Integrity
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              {siteName} is built with a strong focus on compliance and user privacy. We utilize official, platform-approved OAuth authentication flows (such as TikTok Login) to connect your accounts.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We never prompt you for your social passwords. You retain 100% control over your credentials and can disconnect your channels at any moment, revoking tokens instantly.
            </p>
            <div className="pt-2">
              <Link 
                href="/auth" 
                className="inline-flex items-center gap-2 text-white font-bold hover:text-[#FC69FF] group transition-colors"
              >
                Start building your pipeline 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center">
            {/* Visual representation */}
            <div className="w-full max-w-sm aspect-square bg-[#0E0E0E] rounded-2xl border border-white/10 p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#612BD3]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium">Authentication Bridge</span>
                <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 text-[10px] font-bold">SECURE CONNECTION</span>
              </div>
              <div className="space-y-4 my-auto">
                <div className="flex items-center gap-3 bg-white/5 border border-white/5 p-3 rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-[#612BD3] flex items-center justify-center font-bold text-sm">P</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold truncate">{siteName}</p>
                    <p className="text-[10px] text-gray-500 truncate">{siteName.toLowerCase()}.rankia.cloud</p>
                  </div>
                </div>
                <div className="flex justify-center text-gray-600">
                  <svg className="w-6 h-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div className="flex items-center gap-3 bg-white/5 border border-white/5 p-3 rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center font-bold text-sm">🎵</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold truncate">TikTok Developer API</p>
                    <p className="text-[10px] text-gray-500 truncate">Approved Integration</p>
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-gray-500 text-center font-medium">
                Protected via Secure OAuth 2.0 Protocol
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0A0A0A] py-12 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-[#612BD3] to-[#FC69FF] flex items-center justify-center">
              <span className="text-white font-extrabold text-xs">P</span>
            </div>
            <span className="font-bold text-white tracking-tight text-sm">
              {siteName}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            <a href="/privacy.html" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms.html" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="text-gray-600">|</span>
            <span className="text-gray-600">© {new Date().getFullYear()} {siteName}. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
