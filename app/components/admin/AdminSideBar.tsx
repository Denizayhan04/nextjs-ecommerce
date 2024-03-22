"use client"
import React from 'react'
import AdminSidebarItem from './AdminSideBarItem'
import { MdDashboard, MdBorderOuter,MdOutlineCreate } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { usePathname } from 'next/navigation';

const AdminSideBar = () => {
  const pathname = usePathname()
  const adminPanelItems = [
    {
      name: "Özetler",
      icon: MdDashboard,
      url: "/foradmin/admin"
  },
  {
      name: "Ürün Olustur",
      icon: MdOutlineCreate,
      url: "/foradmin/admin/create"
  },
  {
      name: "Ürünleri Yönet",
      icon: FaClipboardList,
      url: "/foradmin/admin/manage"
  },
  {
      name: "Siparişler",
      icon: MdBorderOuter,
      url: "/foradmin/admin/order"
  },

  ]

  return (
    <div className='flex-1 bg-orange-400 w-[250px] flex-col '>
      {
        adminPanelItems.map((e,i)=>(
          <AdminSidebarItem key={i} selected={pathname == e.url} name={e.name} icon={e.icon} url={e.url} />
        ))
      }
    </div>
  )
}

export default AdminSideBar