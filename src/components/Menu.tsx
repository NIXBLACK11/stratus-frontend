import { MenuItem as MenuItemComponent } from "./MenuItem";
import { FolderPlus, List, MonitorCheckIcon } from 'lucide-react';

export const menuItems = [
  { icon: FolderPlus, label: 'Add project' },
  { icon: List, label: 'Projects' },
  { icon: MonitorCheckIcon, label: 'Monitor projects' },
];

export const Menu = () => {
  return (
    <div className="bg-transparent text-gray-300 w-full h-screen p-8 border-r border-orange-600 rounded-lg">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Stratus</h1>
      </div>
      <nav>
        {menuItems.map((item, index) => (
          <MenuItemComponent key={index} icon={item.icon} label={item.label} />
        ))}
      </nav>
    </div>
  );
};