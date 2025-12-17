'use client';

import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';
import { saveToken } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { API_BASE } from '@/lib/config';
import { LogIn, Heart } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.message || 'Login failed');
        return;
      }

      saveToken(data.accessToken);
      router.push('/dashboard');
    } catch (err) {
      setError("Cannot connect to server");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 p-4">
      <Card className="w-full max-w-sm p-6 bg-gray-900 border border-pink-500/30 shadow-2xl text-white">
        <CardContent>
          <div className="flex flex-col items-center justify-center mb-8">
             <div className="p-3 bg-pink-500/10 rounded-full mb-4">
                <Heart className="h-8 w-8 text-pink-300" />
             </div>
             <h1 className="text-3xl font-bold tracking-tight text-pink-100">Sign In</h1>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <Input 
              placeholder="Username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus-visible:ring-pink-300"
            />
            <Input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus-visible:ring-pink-300"
            />
            {error && <p className="text-red-400 text-xs italic">{error}</p>}
            <Button 
              className="w-full bg-pink-300 hover:bg-pink-400 text-gray-950 font-bold transition-all" 
              type="submit"
            >
              Log In
            </Button>
          </form>
          <Button 
            variant="link" 
            className="mt-6 w-full text-pink-300 hover:text-pink-200" 
            onClick={() => router.push('/register')}
          >
            Don't have an account? Register
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}