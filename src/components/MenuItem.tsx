import { LucideIcon } from "lucide-react";
import { useRecoilState } from "recoil";
import { menuState } from "../atom";

interface MenuItemProps {
    icon: LucideIcon; // icon type
    label: string;
}
  
export const MenuItem = ({ icon: Icon, label }: MenuItemProps) => {
    const [menu, setMenu] = useRecoilState(menuState);

    return (
        <div 
            className="flex items-center space-x-4 my-8 py-2 px-4 hover:bg-gray-800 rounded-md"
            onClick={()=>{
                setMenu(label);
            }}
        >
            <Icon size={20} />
            <span>{label}</span>
        </div>
    );
};