'use client';

import { useState, useEffect } from 'react';
import { LogIn, UserPlus, Heart } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const quotes = [
  "The future belongs to those who believe in the beauty of their dreams.",
  "The past is a place of reference, not a place of residence.",
  "Strive not to be a success, but rather to be of value.",
  "The only way to do great work is to love what you do."
];

export default function Home() {
  const [quote, setQuote] = useState("");

  // Using useEffect ensures the random quote won't cause a "Hydration Error"
  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 p-6">
      
      <main className="w-full max-w-xl">
        <Card className="bg-gray-900 border-pink-200/20 shadow-xl">
          <CardContent className="p-8 sm:p-12 text-center">
            
            {/* Logo/Icon */}
            <div className="flex justify-center mb-6">
               <div className="p-3 bg-pink-500/10 rounded-full">
                 <Heart className="w-8 h-8 text-pink-300" />
               </div>
            </div>

            <h1 className="text-4xl font-bold mb-4 text-white">
              Auth<span className="text-pink-300">Sphere</span>
            </h1>
            
            <p className="text-gray-400 mb-8">
              Your secure authentication gateway.
            </p>

            {/* Quote Section - Pink Border */}
            <div className="bg-pink-500/5 p-6 rounded-lg border border-pink-300/20 mb-10">
              <blockquote className="text-lg italic text-pink-100">
                "{quote || "Welcome back!"}"
              </blockquote>
            </div>

            {/* Buttons - Pink Theme */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-pink-300 text-gray-950 hover:bg-pink-400 font-bold px-8">
                <Link href="/login">
                  <LogIn className="mr-2 h-5 w-5" />
                  Sign In
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-pink-300/30 text-pink-200 hover:bg-pink-500/10 px-8">
                <Link href="/register">
                  <UserPlus className="mr-2 h-5 w-5" />
                  Register
                </Link>
              </Button>
            </div>

          </CardContent>
        </Card>
      </main>
    </div>
  );
}