
import React from 'react';
import { User } from '../types';
import { Clock, HelpCircle, Scissors, TrendingUp } from 'lucide-react';

interface EconomyViewProps {
  currentUser: User;
}

const EconomyCard: React.FC<{ title: string; description: string; buttonText: string; icon: React.ElementType }> = ({ title, description, buttonText, icon: Icon }) => {
    return (
        <div className="bg-gray-800 p-6 rounded-xl flex flex-col items-center text-center">
            <Icon className="w-12 h-12 text-purple-400 mb-4"/>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-400 mb-4 h-12">{description}</p>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                {buttonText}
            </button>
        </div>
    )
}

const EconomyView: React.FC<EconomyViewProps> = ({ currentUser }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-purple-400">نظام الاقتصاد</h1>
      <div className="mb-8 p-6 bg-gray-800 rounded-xl text-center">
        <p className="text-gray-400 text-lg">رصيدك الحالي</p>
        <p className="text-4xl font-bold text-yellow-400 mt-2">{currentUser.mora.toLocaleString()} مورا</p>
      </div>
      
      <h2 className="text-2xl font-bold mb-4">ألعاب وأنشطة</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <EconomyCard 
                title="عمل كل ساعة"
                description="احصل على كمية عشوائية من المورا كل ساعة."
                buttonText="العمل"
                icon={Clock}
            />
            <EconomyCard 
                title="خمن الرقم"
                description="خمن الرقم بين 1 و 100 واربح جائزة."
                buttonText="إبدأ اللعبة"
                icon={HelpCircle}
            />
            <EconomyCard 
                title="حجرة ورقة مقص"
                description="تحدى البوت في لعبة كلاسيكية."
                buttonText="إلعب"
                icon={Scissors}
            />
      </div>

       <h2 className="text-2xl font-bold mb-4">الاستثمار</h2>
       <div className="bg-gray-800 p-6 rounded-xl">
            <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-green-400 ml-3"/>
                <h3 className="text-xl font-bold">سوق الأسهم والعقارات</h3>
            </div>
            <p className="text-gray-400 mb-4">
                أسعار الأسهم والعقارات تتحدث كل 6 ساعات. استثمر بحكمة!
            </p>
            <div className="space-y-3">
                <div className="flex justify-between items-center bg-gray-700/50 p-3 rounded-lg">
                    <span>سهم شركة تكنولوجيا</span>
                    <span className="text-green-400 font-semibold">▲ 1,250 مورا</span>
                </div>
                <div className="flex justify-between items-center bg-gray-700/50 p-3 rounded-lg">
                    <span>عقار في وسط المدينة</span>
                    <span className="text-red-400 font-semibold">▼ 250,000 مورا</span>
                </div>
            </div>
            <div className="flex justify-end mt-4 space-x-2 space-x-reverse">
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">شراء</button>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">بيع</button>
            </div>
       </div>

    </div>
  );
};

export default EconomyView;
