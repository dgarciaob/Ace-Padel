"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Store,
  User2,
  Users2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-[#0D0760]",
  },
  {
    label: "Reservas",
    icon: Calendar,
    href: "/reservas",
    color: "text-[#0D0760]",
  },
  {
    label: "Clases",
    icon: Users2,
    href: "/clases",
    color: "text-[#0D0760]",
  },
  {
    label: "Tienda",
    icon: Store,
    href: "/tienda",
    color: "text-[#0D0760]",
  },
  {
    label: "Chat",
    icon: MessageSquare,
    href: "/chat",
    color: "text-[#0D0760]",
  },
  {
    label: "Ajustes",
    icon: Settings,
    href: "/ajustes",
    color: "text-[#0D0760]",
  },
];

function SideBar() {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full text-[#0D0760] bg-[#FFF]">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-7 h-7 mr-4 items-center justify-center">
            <Image fill alt="logo" src="/ace-padel-logo.png" />
          </div>
          <h1 className="text-2xl font-bold text-center text-[#0D0760]">
            Ace Padel
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => {
            return (
              <Link
                href={route.href}
                key={route.href}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-[#0D0760] hover:bg-[#0D0760]/10 rounded-lg transition",
                  pathname === route.href
                    ? "text-[#0D0760] bg-[#0D0760]/10"
                    : "text-zinc-400"
                )}
              >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                  {route.label}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
