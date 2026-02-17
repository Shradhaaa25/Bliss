import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { BookOpen, Home, Upload, User, LogIn, UserPlus } from "lucide-react";
import { Button } from "./Button";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: Home },
    { name: "Upload", path: "/upload", icon: Upload },
  ];

  const authItems = [
    { name: "Login", path: "/", icon: LogIn },
    { name: "Register", path: "/register", icon: UserPlus },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-lg shadow-primary/5">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link to="/dashboard" className="flex items-center space-x-2 group">
          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <BookOpen className="h-6 w-6 text-primary glow-text transition-transform group-hover:scale-110" />
          </div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Resource Hub
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-1 p-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "relative flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                location.pathname === item.path
                  ? "bg-primary/20 text-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              )}
            >
              <item.icon className="h-4 w-4 mr-2" />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center gap-2">
            {authItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button variant={location.pathname === item.path ? "default" : "ghost"} size="sm" className="rounded-full">
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
