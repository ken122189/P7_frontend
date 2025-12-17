"use client";
import { getToken } from "@/lib/auth";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from 'react';

interface JwtPayload {
  username: string;
}

export default function DashboardHome() {
  const [username, setUsername] = useState('Guest');
  const token = getToken();

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode<JwtPayload>(token);
        if (decoded.username) setUsername(decoded.username);
      } catch (e) {
        console.error("Token decoding failed:", e);
      }
    }
  }, [token]);

  return (
    <div className="space-y-6"> 
      {/* Greeting with the new LuxeAuth pink accent */}
      <div className="border-l-4 border-pink-400 pl-4">
        <h2 className="text-3xl font-bold text-white">
          Welcome back, <span className="text-pink-400">{username}</span>
        </h2>
        <p className="text-gray-400 text-sm">Your secure session is active.</p>
      </div>
      
      {token && (
        <div className="mt-8">
          <label className="text-pink-300 text-xs font-bold uppercase tracking-widest mb-2 block">
            Your Authentication Token
          </label>

          {/* FIX: Dark background with pinkish text to ensure visibility */}
          <div className="relative group">
            <pre className="p-6 bg-gray-950 border border-pink-500/20 text-[11px] font-mono text-pink-200/70 break-all rounded-xl shadow-inner overflow-auto max-h-60 leading-relaxed">
              {token}
            </pre>
            <div className="absolute top-2 right-2 px-2 py-1 bg-pink-500/10 rounded text-[10px] text-pink-400 font-bold border border-pink-500/20">
              SECURE
            </div>
          </div>
        </div>
      )}
    </div>
  );
}