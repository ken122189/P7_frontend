'use client';
import { useRouter } from 'next/navigation';
import { getToken, logoutUser } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import React, { useEffect } from 'react';
import { Sparkles, LogOut } from 'lucide-react';

export default function DashboardLayout({children}: {children: React.ReactNode}) {
  const router = useRouter();
  const token = getToken();

  useEffect(() => { if (!token) router.push('/login'); }, [token, router]);
  if (!token) return null;

  return (
    <div className="min-h-screen p-6 sm:p-10">
      <header className="flex justify-between items-center mb-8 pb-4 border-b border-pink-500/10">
        <div className="flex items-center">
            <Sparkles className="h-7 w-7 text-pink-400 mr-3" />
            <h1 className="text-3xl font-bold">Luxe<span className="text-pink-400">Auth</span></h1>
        </div>
        <Button variant="ghost" onClick={() => { logoutUser(); router.push('/login'); }} className="text-pink-300 hover:bg-pink-500/10">
          <LogOut className="h-4 w-4 mr-2" /> Logout
        </Button>
      </header>
      <div className="bg-gray-900/40 backdrop-blur-md p-8 rounded-2xl border border-pink-500/20 shadow-2xl"> 
        {children}
      </div>
    </div>
  );
}