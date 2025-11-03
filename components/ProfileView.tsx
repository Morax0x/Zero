
import React from 'react';
import { User } from '../types';
import { MessageSquare, Mic, Flame, Camera } from 'lucide-react';

interface ProfileViewProps {
  user: User;
}

const ProgressBar: React.FC<{ value: number; max: number; color: string }> = ({ value, max, color }) => {
  const percentage = max > 0 ? (value / max) * 100 : 0;
  return (
    <div className="w-full bg-gray-700 rounded-full h-4 relative overflow-hidden">
      <div 
        className={`h-full rounded-full transition-all duration-500 ${color}`}
        style={{ width: `${percentage}%` }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
        {value} / {max} XP
      </div>
    </div>
  );
};

const ProfileView: React.FC<ProfileViewProps> = ({ user }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-purple-400">الملف الشخصي</h1>
      <div className="bg-gray-800 rounded-2xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col items-center md:col-span-1">
          <img src={user.avatar} alt={user.name} className="w-32 h-32 rounded-full border-4 border-purple-500 object-cover" />
          <h2 className="text-2xl font-bold mt-4 text-white">{user.name}</h2>
          <div className="flex items-center space-x-4 space-x-reverse mt-2">
              <div className="flex items-center text-orange-400">
                  <Flame className="w-5 h-5 ml-1" />
                  <span className="font-semibold">{user.streakText}</span>
              </div>
              <div className="flex items-center text-cyan-400">
                  <Camera className="w-5 h-5 ml-1" />
                  <span className="font-semibold">{user.streakMedia}</span>
              </div>
          </div>
          <p className="mt-4 text-yellow-400 text-lg font-bold">
            {user.mora.toLocaleString()} مورا
          </p>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-300">
              <MessageSquare className="w-6 h-6 ml-2 text-blue-400"/>
              مستوى الكتابة
            </h3>
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="bg-blue-500 text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl font-bold">
                {user.levelText}
              </div>
              <div className="flex-1">
                <ProgressBar value={user.xpText} max={user.xpTextNext} color="bg-blue-500" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-300">
              <Mic className="w-6 h-6 ml-2 text-green-400"/>
              مستوى الصوت
            </h3>
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="bg-green-500 text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl font-bold">
                {user.levelVoice}
              </div>
              <div className="flex-1">
                 <ProgressBar value={user.xpVoice} max={user.xpVoiceNext} color="bg-green-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
