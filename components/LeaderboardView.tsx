
import React from 'react';
import { User } from '../types';
import { Crown } from 'lucide-react';

interface LeaderboardViewProps {
  textLeaderboard: User[];
  voiceLeaderboard: User[];
}

const LeaderboardList: React.FC<{ title: string, users: User[], type: 'text' | 'voice' }> = ({ title, users, type }) => {
    const getRankColor = (rank: number) => {
        if (rank === 0) return 'text-yellow-400';
        if (rank === 1) return 'text-gray-300';
        if (rank === 2) return 'text-yellow-600';
        return 'text-gray-400';
    };

    return (
        <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
            <ul className="space-y-3">
                {users.slice(0, 10).map((user, index) => (
                    <li key={user.id} className="flex items-center justify-between bg-gray-700/50 p-3 rounded-lg">
                        <div className="flex items-center">
                            <span className={`w-8 text-lg font-bold ${getRankColor(index)}`}>{index + 1}</span>
                            <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full mx-3" />
                            <span className="font-semibold text-white">{user.name}</span>
                        </div>
                        <div className="font-bold text-lg text-purple-400">
                           مستوى {type === 'text' ? user.levelText : user.levelVoice}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const LeaderboardView: React.FC<LeaderboardViewProps> = ({ textLeaderboard, voiceLeaderboard }) => {
  return (
    <div>
        <div className="flex items-center justify-center mb-6">
             <Crown className="w-10 h-10 text-yellow-400"/>
             <h1 className="text-3xl font-bold mx-4 text-purple-400">لوحة الصدارة</h1>
             <Crown className="w-10 h-10 text-yellow-400"/>
        </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <LeaderboardList title="أعلى 10 كتابي" users={textLeaderboard} type="text"/>
        <LeaderboardList title="أعلى 10 صوتي" users={voiceLeaderboard} type="voice"/>
      </div>
    </div>
  );
};

export default LeaderboardView;
