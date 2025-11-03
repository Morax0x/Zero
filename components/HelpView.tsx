
import React from 'react';

const CommandCategory: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-gray-800 rounded-xl p-6 mb-6">
    <h2 className="text-2xl font-bold mb-4 text-purple-400">{title}</h2>
    <div className="space-y-3">{children}</div>
  </div>
);

const Command: React.FC<{ name: string, description: string }> = ({ name, description }) => (
  <div className="bg-gray-700/50 p-3 rounded-lg">
    <code className="text-purple-300 font-mono text-lg">{name}</code>
    <p className="text-gray-400 mt-1">{description}</p>
  </div>
);

const HelpView: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-purple-400">دليل الأوامر</h1>

      <CommandCategory title="نظام المستويات">
        <Command name="/level" description="عرض مستواك الحالي وشريط التقدم." />
        <Command name="/top text" description="عرض أعلى 10 لاعبين في المستويات الكتابية." />
        <Command name="/top voice" description="عرض أعلى 10 لاعبين في المستويات الصوتية." />
        <Command name="/setlevel [user] [level]" description="(إداري) تحديد مستوى عضو معين." />
        <Command name="/addxp [user] [amount]" description="(إداري) إضافة نقاط خبرة لعضو معين." />
      </CommandCategory>

      <CommandCategory title="نظام الاقتصاد">
        <Command name="/mora" description="عرض رصيدك من عملة المورا." />
        <Command name="/work" description="العمل والحصول على مورا (كل ساعة)." />
        <Command name="/transfer [user] [amount]" description="تحويل مورا لعضو آخر مع خصم 5% رسوم." />
        <Command name="/guess" description="بدء لعبة تخمين الرقم." />
        <Command name="/rps [choice]" description="لعب حجرة ورقة مقص ضد البوت." />
      </CommandCategory>

      <CommandCategory title="نظام الستريك">
        <Command name="/streak" description="عرض الستريك الكتابي وستريك الوسائط الخاص بك." />
        <Command name="/setstreak [user] [amount]" description="(إداري) تحديد عدد الستريك لعضو." />
      </CommandCategory>
      
      <CommandCategory title="أخرى">
        <Command name="/shop" description="فتح متجر السيرفر." />
        <Command name="/achievements" description="عرض قائمة الإنجازات." />
        <Command name="/help" description="عرض هذه القائمة." />
      </CommandCategory>

    </div>
  );
};

export default HelpView;
