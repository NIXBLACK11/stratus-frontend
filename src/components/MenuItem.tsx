import { LucideIcon } from "lucide-react";
import { useRecoilState } from "recoil";
import { menuState } from "../atom";

interface MenuItemProps {
    icon: LucideIcon;
    label: string;
}
  
export const MenuItem = ({ icon: Icon, label }: MenuItemProps) => {
    const [menu, setMenu] = useRecoilState(menuState);

    return (
        <>
            {(menu!=label) ? <div 
                className="flex items-center space-x-4 my-8 py-2 px-4 hover:bg-orange-900 rounded-md"
                onClick={()=>{
                    setMenu(label);
                }}
            >
                <Icon size={20} />
                <span>{label}</span>
            </div> : 
            <div 
                className="flex items-center space-x-4 my-8 py-2 px-4 bg-orange-600 rounded-md"
                onClick={()=>{
                    setMenu(label);
                }}
            >
                <Icon size={20} />
                <span>{label}</span>
            </div>
            }
        </>
    );
};