
import React from 'react';
import { ShopItem } from '../types';

interface ShopViewProps {
  items: ShopItem[];
  userMora: number;
}

const ShopView: React.FC<ShopViewProps> = ({ items, userMora }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2 text-purple-400">متجر السيرفر</h1>
      <p className="text-lg text-gray-400 mb-6">رصيدك: <span className="font-bold text-yellow-400">{userMora.toLocaleString()} مورا</span></p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map(item => (
          <div key={item.id} className="bg-gray-800 rounded-xl p-6 flex flex-col justify-between shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1 transition-all duration-300">
            <div>
              <div className="flex items-center mb-4">
                <item.icon className="w-10 h-10 text-purple-400" />
                <h2 className="text-xl font-bold mr-4">{item.name}</h2>
              </div>
              <p className="text-gray-400 mb-4">{item.description}</p>
            </div>
            <div className="mt-4">
              <p className="text-yellow-400 text-lg font-bold mb-4 text-center">{item.price.toLocaleString()} مورا</p>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                شراء
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopView;
