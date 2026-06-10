import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';

const siteName = process.env.SITE_NAME || (isGeneralServerSide() ? 'Postiz' : 'Gitroom');

export const metadata: Metadata = {
  title: `${siteName} - AI Social Media Scheduler`,
  description: 'Schedule posts, track analytics, and grow your audience across TikTok, X, and LinkedIn using the ultimate AI-powered social planner.',
};

export default function LandingPage() {
  return (
    <div className="bg-[#030303] min-h-screen text-slate-100 font-sans selection:bg-indigo-600 selection:text-white overflow-x-hidden antialiased">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[30vh] right-1/4 w-[400px] h-[400px] bg-fuchsia-600/5 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-[120vh] left-1/3 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Floating Header */}
      <header className="border-b border-white/5 bg-black/40 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo Mark */}
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-indigo-600/20">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              {siteName}
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#preview" className="hover:text-white transition-colors">Platform</a>
            <a href="/privacy.html" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms.html" className="hover:text-white transition-colors">Terms of Service</a>
          </nav>

          <div className="flex items-center gap-4">
            <Link 
              href="/auth/login" 
              className="text-sm font-semibold text-slate-300 hover:text-white px-4 py-2 transition-colors"
            >
              Sign In
            </Link>
            <Link 
              href="/auth" 
              className="text-sm font-semibold bg-white text-black hover:bg-slate-200 px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md shadow-white/5 hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-fuchsia-400 tracking-wider uppercase">
            ⚡ Scale your brand automatically
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
            The social media scheduler <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              built for creators and teams
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Schedule visual posts, write optimized caption hooks with AI, and track deep analytics on TikTok, X, and LinkedIn — all in one centralized hub.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link 
              href="/auth" 
              className="w-full sm:w-auto text-center font-bold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl shadow-xl shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all duration-200 text-base hover:-translate-y-0.5"
            >
              Start Planning Free
            </Link>
            <a 
              href="#preview" 
              className="w-full sm:w-auto text-center font-semibold bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white px-8 py-4 rounded-xl transition-all duration-200 text-base"
            >
              View Dashboard
            </a>
          </div>
        </div>
      </section>

      {/* CSS Mockup Dashboard Preview */}
      <section id="preview" className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 z-10">
        <div className="rounded-2xl border border-white/10 bg-zinc-950/80 backdrop-blur-sm p-4 shadow-2xl shadow-indigo-500/5 overflow-hidden">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="px-3 py-1 rounded-md bg-white/5 text-[11px] text-slate-500 font-mono tracking-wider">
              {siteName.toLowerCase()}.rankia.cloud/dashboard
            </div>
            <div className="w-10" />
          </div>

          {/* Inner Dashboard Layout Mockup */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Sidebar Mockup */}
            <div className="space-y-2 hidden md:block border-r border-white/5 pr-4">
              <div className="h-8 rounded-lg bg-indigo-600/10 text-indigo-400 flex items-center px-3 gap-2 text-xs font-bold">
                📅 Calendar Queue
              </div>
              <div className="h-8 rounded-lg hover:bg-white/5 text-slate-400 flex items-center px-3 gap-2 text-xs font-medium transition-colors">
                📈 Analytics
              </div>
              <div className="h-8 rounded-lg hover:bg-white/5 text-slate-400 flex items-center px-3 gap-2 text-xs font-medium transition-colors">
                🗂️ Media Library
              </div>
              <div className="h-8 rounded-lg hover:bg-white/5 text-slate-400 flex items-center px-3 gap-2 text-xs font-medium transition-colors">
                ⚙️ Configurations
              </div>
            </div>

            {/* Core Workspace Mockup */}
            <div className="md:col-span-3 space-y-4">
              {/* Analytics row */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold">Total Audience</span>
                  <p className="text-xl font-bold text-white">48,291</p>
                  <span className="text-[10px] text-emerald-400 font-medium">▲ +12.4% this week</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold">Engagement Rate</span>
                  <p className="text-xl font-bold text-white">6.8%</p>
                  <span className="text-[10px] text-emerald-400 font-medium">▲ +4.2% overall</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold">Posts Scheduled</span>
                  <p className="text-xl font-bold text-white">14</p>
                  <span className="text-[10px] text-slate-400 font-medium">Active queue ready</span>
                </div>
              </div>

              {/* Feed Preview Mockup */}
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-3">
                  <span className="text-xs font-bold text-slate-300">Upcoming Queue</span>
                  <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-bold">NEXT UP</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center font-bold text-sm text-slate-400">
                    🎬
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-slate-200 truncate">SaaS Architecture Video Setup.mp4</p>
                    <p className="text-[10px] text-slate-500">TikTok • Scheduled for June 12 at 18:00</p>
                  </div>
                  <span className="px-2 py-1 rounded bg-[#612BD3] text-white text-[10px] font-bold">
                    ACTIVE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features Section */}
      <section id="features" className="py-24 border-t border-white/5 bg-zinc-950/40 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
            <span className="text-fuchsia-400 font-bold text-xs uppercase tracking-widest">Everything You Need</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Smarter scheduling, <br className="sm:hidden" /> zero friction
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Automate your workflows, optimize captions, and analyze performance with design-first tools.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            
            {/* Box 1 (Large 2-column card) */}
            <div className="md:col-span-4 bg-zinc-900/40 border border-white/5 rounded-3xl p-8 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col justify-between group min-h-[320px]">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">Visual Calendar Planner</h3>
                <p className="text-slate-400 leading-relaxed text-sm max-w-xl">
                  Coordinate your multi-channel social schedule in an intuitive calendar view. Drag and drop posts to adjust publish times and keep queues filled consistently.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                <span className="text-xs text-slate-500 font-medium">Supports TikTok, X (Twitter), and LinkedIn API</span>
              </div>
            </div>

            {/* Box 2 (Medium card) */}
            <div className="md:col-span-2 bg-zinc-900/40 border border-white/5 rounded-3xl p-8 hover:border-fuchsia-500/30 hover:shadow-2xl hover:shadow-fuchsia-500/5 transition-all duration-300 flex flex-col justify-between group min-h-[320px]">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 text-fuchsia-400 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-fuchsia-400 transition-colors">AI Writing Copilot</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Let AI optimize your copy hooks, suggest hashtags, and format threads to capture attention instantly on feeds.
                </p>
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-fuchsia-500 to-indigo-500 rounded-full mt-6" />
            </div>

            {/* Box 3 (Small card) */}
            <div className="md:col-span-2 bg-zinc-900/40 border border-white/5 rounded-3xl p-8 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col justify-between group min-h-[320px]">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">Analytics Tool</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Deep engagement tracking. Study follower trends and view rates directly inside your private instance dashboard.
                </p>
              </div>
              <span className="text-[11px] text-slate-500 font-mono tracking-wider">ACCURATE METRICS</span>
            </div>

            {/* Box 4 (Large 2-column card) */}
            <div className="md:col-span-4 bg-zinc-900/40 border border-white/5 rounded-3xl p-8 hover:border-fuchsia-500/30 hover:shadow-2xl hover:shadow-fuchsia-500/5 transition-all duration-300 flex flex-col justify-between group min-h-[320px]">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 text-fuchsia-400 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-fuchsia-400 transition-colors">Self-Hosted Integrity & Security</h3>
                <p className="text-slate-400 leading-relaxed text-sm max-w-xl">
                  We use secure OAuth 2.0 authentication protocols. We never request your passwords. You retain complete authority over your credentials, database access, and data storage.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6 flex items-center gap-4 text-xs font-semibold text-slate-400">
                <span>🛡️ OAuth 2.0 Compliant</span>
                <span>🔒 GDPR Ready</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust & Compliance Section */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative">
        <div className="space-y-6">
          <span className="text-indigo-400 font-bold text-xs uppercase tracking-widest">Platform Approved Integration</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Connect your accounts without worries
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {siteName} uses official, platform-approved OAuth API connections. This ensures your social account remains active and compliant with TikTok, X, and LinkedIn terms of service.
          </p>
          <div className="flex items-center justify-center gap-8 pt-8 flex-wrap opacity-55 hover:opacity-80 transition-opacity">
            <span className="text-sm font-semibold tracking-wider border border-white/10 px-4 py-2 rounded-xl">🎵 TIKTOK APPROVED</span>
            <span className="text-sm font-semibold tracking-wider border border-white/10 px-4 py-2 rounded-xl">💼 LINKEDIN PARTNER</span>
            <span className="text-sm font-semibold tracking-wider border border-white/10 px-4 py-2 rounded-xl">❌ X (TWITTER) READY</span>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="border-t border-white/5 bg-[#060608] py-16 text-sm text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-fuchsia-500 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-bold text-white tracking-tight">
              {siteName}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            <a href="/privacy.html" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms.html" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="text-slate-700">|</span>
            <span className="text-slate-600">© {new Date().getFullYear()} {siteName}. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
