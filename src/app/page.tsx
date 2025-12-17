'use client';

import { useState, useEffect } from 'react';
import { LogIn, UserPlus, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const quotes = [
  "The future belongs to those who believe in the beauty of their dreams.",
  "Style is a way to say who you are without having to speak.",
  "Strive not to be a success, but rather to be of value.",
  "Simplicity is the ultimate sophistication."
];

export default function Home() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 p-6">
      
      <main className="w-full max-w-xl">
        <Card className="bg-gray-900/50 backdrop-blur-sm border-pink-500/20 shadow-2xl overflow-hidden">
          <CardContent className="p-8 sm:p-12 text-center relative">
            
            {/* Soft background glow behind the content */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-pink-500/20 blur-[60px] -z-10" />

            {/* New Sparkles Icon for LuxeAuth */}
            <div className="flex justify-center mb-6">
               <div className="p-4 bg-pink-500/10 rounded-2xl rotate-3 hover:rotate-0 transition-transform duration-300">
                 <Sparkles className="w-10 h-10 text-pink-300" />
               </div>
            </div>

            {/* NEW BRANDING: LuxeAuth */}
            <h1 className="text-5xl font-extrabold mb-4 tracking-tighter text-white">
              Luxe<span className="bg-gradient-to-r from-pink-300 to-pink-500 bg-clip-text text-transparent">Auth</span>
            </h1>
            
            <p className="text-gray-400 mb-8 font-medium tracking-wide uppercase text-xs">
              Premium Authentication Portal
            </p>

            {/* Quote Section */}
            <div className="bg-gray-950/50 p-6 rounded-2xl border border-pink-500/10 mb-10 shadow-inner">
              <blockquote className="text-lg font-light text-pink-100/80 leading-relaxed">
                "{quote || "Welcome to the next level."}"
              </blockquote>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-pink-300 text-gray-950 hover:bg-pink-400 font-bold px-10 rounded-xl transition-all hover:scale-105 active:scale-95">
                <Link href="/login">
                  <LogIn className="mr-2 h-5 w-5" />
                  Enter Portal
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-pink-500/30 text-pink-200 hover:bg-pink-500/10 px-10 rounded-xl transition-all">
                <Link href="/register">
                  <UserPlus className="mr-2 h-5 w-5" />
                  Join Luxe
                </Link>
              </Button>
            </div>

          </CardContent>
        </Card>
        
        <p className="text-center mt-8 text-gray-600 text-sm font-mono uppercase tracking-[0.3em]">
          Powered by LuxeAuth Secure Engine
        </p>
      </main>
    </div>
  );
}