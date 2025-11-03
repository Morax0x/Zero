import React from 'react';

export interface User {
  id: string;
  name: string;
  avatar: string;
  levelText: number;
  xpText: number;
  xpTextNext: number;
  levelVoice: number;
  xpVoice: number;
  xpVoiceNext: number;
  mora: number;
  streakText: number;
  streakMedia: number;
}

export interface ShopItem {
  id: string;
  name: string;
  description: string;
  price: number;
  // FIX: Changed icon type to React.ElementType for better compatibility and to resolve the JSX namespace error.
  icon: React.ElementType;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  reward: string;
  progress: number;
  goal: number;
  category: 'daily' | 'weekly' | 'special';
}
