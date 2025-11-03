
import React from 'react';
import type { ViewType } from '../App';

interface SidebarProps {
  activeView: ViewType;
  setActiveView: (view: ViewType) => void;
  items: { id: ViewType; label: string; icon: React.ElementType }[];
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView, items }) => {
  return (
    <aside className="w-16 sm:w-64 bg-gray-800 p-2 sm:p-4 flex flex-col transition-all duration-300">
      <div className="flex items-center justify-center sm:justify-start mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.218 10.372A4.996 4.996 0 0112 15a4.996 4.996 0 01-5.218-4.628M12 9V5m0 14v-4m-6.364-3.636L7.757 9.757m8.486 8.486l-1.414-1.414M4 12H2m10 10v-2m10-8h-2M7.757 14.243L6.343 15.657" />
        </svg>
        <h1 className="hidden sm:inline text-xl font-bold ml-3 text-white">بوت الأنظمة</h1>
      </div>
      <nav className="flex-1 space-y-2">
        {items.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id as ViewType)}
            className={`w-full flex items-center p-3 rounded-lg transition-colors duration-200 ${
              activeView === item.id 
                ? 'bg-purple-600 text-white' 
                : 'text-gray-400 hover:bg-gray-700 hover:text-white'
            }`}
          >
            <item.icon className="h-6 w-6" />
            <span className="hidden sm:inline ml-4 font-semibold">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
