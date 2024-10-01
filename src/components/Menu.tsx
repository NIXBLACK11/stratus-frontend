import { MenuItem as MenuItemComponent } from "./MenuItem"; // Rename to avoid conflict
import { Home, FolderPlus, List, Edit, Compass, Trophy, Zap, CreditCard } from 'lucide-react';

export const menuItems = [
  { icon: Home, label: 'Projects' },
  { icon: FolderPlus, label: 'Add project' },
  { icon: List, label: 'Detailed project' },
  { icon: Compass, label: 'Delete project' },
//   { icon: Trophy, label: 'Challenges' },
//   { icon: Zap, label: 'Spark' },
//   { icon: CreditCard, label: 'Codepen Pro' },
];

export const Menu = () => {
  return (
    <div className="bg-transparent text-gray-300 w-64 h-screen p-8">
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