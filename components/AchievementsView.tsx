
import React, { useState, useMemo } from 'react';
import { Achievement } from '../types';

interface AchievementsViewProps {
  achievements: Achievement[];
}

const AchievementCard: React.FC<{ achievement: Achievement }> = ({ achievement }) => {
  const percentage = Math.min((achievement.progress / achievement.goal) * 100, 100);
  const isCompleted = percentage >= 100;

  return (
    <div className={`bg-gray-800 p-4 rounded-lg border-l-4 ${isCompleted ? 'border-green-500' : 'border-purple-500'}`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg">{achievement.name}</h3>
          <p className="text-sm text-gray-400">{achievement.description}</p>
        </div>
        <span className="text-sm font-semibold text-yellow-400">{achievement.reward}</span>
      </div>
      <div className="mt-3">
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full ${isCompleted ? 'bg-green-500' : 'bg-purple-500'}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 text-right mt-1">{achievement.progress} / {achievement.goal}</p>
      </div>
    </div>
  );
};

const AchievementsView: React.FC<AchievementsViewProps> = ({ achievements }) => {
  const [activeTab, setActiveTab] = useState<'daily' | 'weekly' | 'special'>('daily');

  const filteredAchievements = useMemo(() => {
    return achievements.filter(a => a.category === activeTab);
  }, [achievements, activeTab]);
  
  const TabButton: React.FC<{tab: 'daily' | 'weekly' | 'special', label: string}> = ({ tab, label }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`px-6 py-2 font-semibold rounded-t-lg transition-colors ${
        activeTab === tab ? 'bg-gray-800 text-purple-400' : 'bg-gray-700 text-gray-400 hover:bg-gray-700/70'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-purple-400">الإنجازات</h1>
      
      <div className="flex border-b border-gray-700 mb-6">
        <TabButton tab="daily" label="يومية" />
        <TabButton tab="weekly" label="أسبوعية" />
        <TabButton tab="special" label="خاصة" />
      </div>

      <div className="space-y-4">
        {filteredAchievements.map(ach => (
          <AchievementCard key={ach.id} achievement={ach} />
        ))}
      </div>
    </div>
  );
};

export default AchievementsView;
