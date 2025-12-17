'use client';
import { useState, useEffect } from 'react';
import { LogIn, UserPlus, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const quotes = ["The future belongs to those who believe in the beauty of their dreams.", "Style is a way to say who you are without speaking."];

export default function Home() {
  const [quote, setQuote] = useState("");
  useEffect(() => { setQuote(quotes[Math.floor(Math.random() * quotes.length)]); }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 p-6">
      <main className="w-full max-w-xl">
        <Card className="bg-gray-900/50 backdrop-blur-sm border-pink-500/20 shadow-2xl">
          <CardContent className="p-8 sm:p-12 text-center">
            <div className="flex justify-center mb-6">
               <div className="p-4 bg-pink-500/10 rounded-2xl">
                 <Sparkles className="w-10 h-10 text-pink-300" />
               </div>
            </div>
            <h1 className="text-5xl font-extrabold mb-4 tracking-tighter text-white">
              Luxe<span className="text-pink-400">Auth</span>
            </h1>
            <p className="text-gray-400 mb-8 uppercase text-xs tracking-widest">Premium Portal</p>
            <div className="bg-gray-950/50 p-6 rounded-2xl border border-pink-500/10 mb-10">
              <blockquote className="text-lg italic text-pink-100/80">"{quote}"</blockquote>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-pink-300 text-gray-950 hover:bg-pink-400 font-bold px-10 transition-all hover:scale-105">
                <Link href="/login"><LogIn className="mr-2 h-5 w-5" />Sign In</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-pink-500/30 text-pink-200 hover:bg-pink-500/10 px-10">
                <Link href="/register"><UserPlus className="mr-2 h-5 w-5" />Register</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}