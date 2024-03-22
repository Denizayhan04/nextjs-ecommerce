import Link from "next/link"
import { IconType } from "react-icons"


interface AdminSidebarItem {
    selected?: boolean
    name: string,
    icon: IconType,
    url: string
}
const AdminSidebarItem:React.FC<AdminSidebarItem> = ({selected,name,icon:Icon,url}) => {
  return (
    <Link className={`cursor-pointer  h-12 pl-4 flex items-center gap-2  ${selected ? "text-orange-400 bg-white font-medium  hover:bg-orange-200" : " text-white font-medium bg-orange-400 hover:bg-slate-200 hover:text-orange-400"}`} href={url}>
       <Icon size={24}/>
       <div>{name}</div>
    </Link> 
  )
}

export default AdminSidebarItem