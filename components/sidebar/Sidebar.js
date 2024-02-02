"use client";
import { cn } from "@/lib/utils";
import { File, List, ListChecks, ListOrdered, Plus, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import logo from "../../public/logo.jpg";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../theme-toggle-button";
import { usePathname } from "next/navigation";
const routes = [
  {
    label: "Add Product",
    icon: Plus,
    color: "text-emerald-500",
    href: "/dashboard/add-product",
  },
  {
    label: "Product list",
    icon: List,
    color: "text-sky-500",
    href: "/dashboard/product-list",
  },
  {
    label: "New Order",
    icon: ListOrdered,
    color: "text-pink-500",
    href: "/dashboard/new-order",
  },
  {
    label: "Orders",
    icon: ListChecks,
    color: "text-orange-500",
    href: "/dashboard/orders",
  },
  {
    label: "Invoices",
    icon: File,
    href: "/dashboard/Invoices",
    color: "text-sky-600",
  },
  {
    label: "New Report",
    icon: File,
    href: "/dashboard/new-report",
    color: "text-emerald-500",
  },
  {
    label: "reports",
    icon: File,
    href: "/dashboard/reports",
    color: "text-gray-200",
  },
  {
    label: "Admin",
    icon: User,
    href: "/dashboard/admin",
    color: "text-fuchsia-500",
  },
  {
    label: "Clients",
    icon: User,
    href: "/dashboard/clients",
    color: "text-indigo-500",
  },
];
const Sidebar = () => {
  const path=usePathname()
  console.log(path);
  return (
    <div className="flex flex-col h-full w-full bg-slate-50 dark:bg-slate-800 space-y-2 py-5 border-r">
      <div className="py-2 px-4 flex items-center gap-x-3">
        <div className="w-6 h-6">
          <Image src={logo} alt="logo" />
        </div>
        <p className="text-md text-indigo-500 font-bold">Finance Go</p>
      </div>
      {routes.map((route) => (
        <Link href={route.href} key={route.label} className="px-4">
          <div className={cn("flex items-center flex-1 py-2 font-semibold",route.color,path.includes(route.href)?"bg-gray-600 px-2 py-1.5 rounded-md":"")}>
            <route.icon className={cn("w-5 h-5 mr-3", route.color)} />
            {route.label}
          </div>
        </Link>
      ))}
      <div className="py-5 px-4">
      <div className="py-2">
      <ModeToggle/>
      </div>
      <UserButton afterSignOutUrl="/signin"/>
      </div>
  
    </div>
  );
};

export default Sidebar;
