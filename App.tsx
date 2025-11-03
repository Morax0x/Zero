import React, { useState, useMemo } from 'react';
import { User, ShopItem, Achievement } from './types';
import Sidebar from './components/Sidebar';
import ProfileView from './components/ProfileView';
import LeaderboardView from './components/LeaderboardView';
import EconomyView from './components/EconomyView';
import ShopView from './components/ShopView';
import AchievementsView from './components/AchievementsView';
import HelpView from './components/HelpView';
import { Shield, Star, Zap, Gem, Trophy, HelpCircle, User as UserIcon, BarChart2 } from 'lucide-react';

export type ViewType = 'profile' | 'leaderboard' | 'economy' | 'shop' | 'achievements' | 'help';

const mockUsers: User[] = [
  { id: '1', name: 'Al-Kindi', avatar: 'https://picsum.photos/seed/user1/100/100', levelText: 125, xpText: 1500, xpTextNext: 4500, levelVoice: 88, xpVoice: 300, xpVoiceNext: 3200, mora: 150200, streakText: 45, streakMedia: 12 },
  { id: '2', name: 'Ibn-Sina', avatar: 'https://picsum.photos/seed/user2/100/100', levelText: 120, xpText: 1200, xpTextNext: 4300, levelVoice: 92, xpVoice: 2800, xpVoiceNext: 3500, mora: 85000, streakText: 10, streakMedia: 5 },
  { id: '3', name: 'Al-Farabi', avatar: 'https://picsum.photos/seed/user3/100/100', levelText: 115, xpText: 500, xpTextNext: 4100, levelVoice: 85, xpVoice: 1500, xpVoiceNext: 3100, mora: 60000, streakText: 23, streakMedia: 8 },
  { id: '4', name: 'Ibn-Khaldun', avatar: 'https://picsum.photos/seed/user4/100/100', levelText: 110, xpText: 3000, xpTextNext: 4000, levelVoice: 70, xpVoice: 900, xpVoiceNext: 2500, mora: 120000, streakText: 5, streakMedia: 2 },
  { id: '5', name: 'Al-Razi', avatar: 'https://picsum.photos/seed/user5/100/100', levelText: 105, xpText: 1000, xpTextNext: 3800, levelVoice: 95, xpVoice: 3100, xpVoiceNext: 3600, mora: 250000, streakText: 88, streakMedia: 30 },
  { id: '6', name: 'Jabir-ibn-Hayyan', avatar: 'https://picsum.photos/seed/user6/100/100', levelText: 100, xpText: 200, xpTextNext: 3700, levelVoice: 80, xpVoice: 500, xpVoiceNext: 2900, mora: 45000, streakText: 15, streakMedia: 10 },
  { id: '7', name: 'Al-Khwarizmi', avatar: 'https://picsum.photos/seed/user7/100/100', levelText: 98, xpText: 1500, xpTextNext: 3600, levelVoice: 91, xpVoice: 2500, xpVoiceNext: 3400, mora: 95000, streakText: 3, streakMedia: 1 },
  { id: '8', name: 'Omar-Khayyam', avatar: 'https://picsum.photos/seed/user8/100/100', levelText: 95, xpText: 800, xpTextNext: 3500, levelVoice: 89, xpVoice: 2000, xpVoiceNext: 3300, mora: 72000, streakText: 32, streakMedia: 18 },
  { id: '9', name: 'Ibn-Rushd', avatar: 'https://picsum.photos/seed/user9/100/100', levelText: 92, xpText: 300, xpTextNext: 3400, levelVoice: 75, xpVoice: 1200, xpVoiceNext: 2700, mora: 33000, streakText: 9, streakMedia: 4 },
  { id: '10', name: 'Al-Zahrawi', avatar: 'https://picsum.photos/seed/user10/100/100', levelText: 90, xpText: 100, xpTextNext: 3300, levelVoice: 86, xpVoice: 1800, xpVoiceNext: 3150, mora: 15000, streakText: 2, streakMedia: 0 },
  { id: '11', name: 'Ibn-al-Haytham', avatar: 'https://picsum.photos/seed/user11/100/100', levelText: 88, xpText: 2000, xpTextNext: 3200, levelVoice: 82, xpVoice: 1000, xpVoiceNext: 3000, mora: 5000, streakText: 1, streakMedia: 1 },
];

const mockShopItems: ShopItem[] = [
    { id: '1', name: 'درع الستريك', description: 'يحفظ الستريك عند انقطاعك.', price: 5000, icon: Shield },
    { id: '2', name: 'جرعة XP+', description: 'يضيف 1000 نقطة خبرة كتابية.', price: 2500, icon: Zap },
    { id: '3', name: 'رتبة مؤقتة "VIP"', description: 'يمنحك صلاحيات خاصة لمدة أسبوع.', price: 10000, icon: Star },
    { id: '4', name: 'صندوق مورا غامض', description: 'قد يحتوي على ما بين 1000 إلى 20000 مورا.', price: 5000, icon: Gem },
];

const mockAchievements: Achievement[] = [
    { id: 'd1', name: 'المتحدث اليومي', description: 'أرسل 50 رسالة في يوم واحد.', reward: '500 مورا', progress: 35, goal: 50, category: 'daily' },
    { id: 'd2', name: 'مشاركة بصرية', description: 'أرسل 5 صور أو فيديوهات.', reward: '300 مورا', progress: 2, goal: 5, category: 'daily' },
    { id: 'w1', name: 'ماراثون الكتابة', description: 'أرسل 1000 رسالة في أسبوع.', reward: '2500 مورا', progress: 450, goal: 1000, category: 'weekly' },
    { id: 'w2', name: 'مستمع نشط', description: 'اقضِ 10 ساعات في المحادثات الصوتية.', reward: '3000 مورا', progress: 3, goal: 10, category: 'weekly' },
    { id: 's1', name: 'الوصول للقمة', description: 'احصل على المستوى 100.', reward: 'رتبة "الأسطورة"', progress: 125, goal: 100, category: 'special' },
    { id: 's2', name: 'مليونير المورا', description: 'امتلك 1,000,000 مورا.', reward: 'لقب "التاجر"', progress: 150200, goal: 1000000, category: 'special' },
];

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('profile');
  
  const currentUser = mockUsers[0];
  const sortedByText = useMemo(() => [...mockUsers].sort((a, b) => b.levelText - a.levelText || b.xpText - a.xpText), []);
  const sortedByVoice = useMemo(() => [...mockUsers].sort((a, b) => b.levelVoice - a.levelVoice || b.xpVoice - a.xpVoice), []);

  const renderContent = () => {
    switch (activeView) {
      case 'profile':
        return <ProfileView user={currentUser} />;
      case 'leaderboard':
        return <LeaderboardView textLeaderboard={sortedByText} voiceLeaderboard={sortedByVoice} />;
      case 'economy':
        return <EconomyView currentUser={currentUser} />;
      case 'shop':
        return <ShopView items={mockShopItems} userMora={currentUser.mora}/>;
      case 'achievements':
        return <AchievementsView achievements={mockAchievements} />;
      case 'help':
        return <HelpView />;
      default:
        return <ProfileView user={currentUser} />;
    }
  };
  
  // FIX: Explicitly type navigationItems to match the Sidebar's expected props. This ensures 'id' is inferred as ViewType, not string.
  const navigationItems: { id: ViewType; label: string; icon: React.ElementType }[] = [
      { id: 'profile', label: 'الملف الشخصي', icon: UserIcon },
      { id: 'leaderboard', label: 'لوحة الصدارة', icon: BarChart2 },
      { id: 'economy', label: 'الاقتصاد', icon: Gem },
      { id: 'shop', label: 'المتجر', icon: Shield },
      { id: 'achievements', label: 'الإنجازات', icon: Trophy },
      { id: 'help', label: 'المساعدة', icon: HelpCircle },
  ]

  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-200">
      <Sidebar 
        activeView={activeView} 
        setActiveView={setActiveView}
        items={navigationItems}
      />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
