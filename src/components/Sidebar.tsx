import { cn } from "@/lib/utils";
import { Home, FileText, Users, MessageSquare, Globe, LogOut } from "lucide-react";

interface SidebarProps {
  className?: string;
}

const navigationItems = [
  { icon: Home, label: "Home", isActive: true },
  { icon: FileText, label: "My Research", isActive: false },
  { icon: Users, label: "Collaboration", isActive: false },
  { icon: MessageSquare, label: "Debates", isActive: false },
  { icon: Globe, label: "Community", isActive: false },
];

export function Sidebar({ className }: SidebarProps) {
  return (
    <aside className={cn("w-64 bg-sidebar text-sidebar-foreground flex flex-col", className)}>
      <div className="p-6 border-b border-sidebar-foreground/10">
        <h1 className="text-xl font-semibold">Sidebar</h1>
      </div>
      
      <nav className="flex-1 py-4">
        <ul className="space-y-2 px-3">
          {navigationItems.map((item) => (
            <li key={item.label}>
              <button
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left font-medium",
                  item.isActive
                    ? "bg-sidebar-item-active text-sidebar-foreground shadow-soft"
                    : "text-sidebar-foreground/90 hover:bg-sidebar-item-hover hover:text-sidebar-foreground"
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-3 border-t border-sidebar-foreground/10">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left font-medium text-sidebar-foreground/90 hover:bg-sidebar-item-hover hover:text-sidebar-foreground">
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}