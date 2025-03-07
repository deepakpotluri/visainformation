// pages/Home.jsx
import React from 'react';
import PassportRankings from '../components/PassportRankings';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        <PassportRankings />
      </div>
    </div>
  );
}