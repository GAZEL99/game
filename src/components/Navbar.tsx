import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gamepad2, User, Coins } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          <Gamepad2 className="w-8 h-8 text-primary" />
          PlayVerse
        </Link>
        
        <div className="flex items-center gap-6">
          <Link to="/games">
            <Button 
              variant={isActive("/games") ? "default" : "ghost"}
              className="text-base"
            >
              Games
            </Button>
          </Link>
          <Link to="/avatar">
            <Button 
              variant={isActive("/avatar") ? "default" : "ghost"}
              className="text-base"
            >
              Avatar
            </Button>
          </Link>
          
          <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
            <Coins className="w-5 h-5 text-warning" />
            <span className="font-bold text-foreground">1,250</span>
          </div>
          
          <Link to="/profile">
            <Button 
              variant={isActive("/profile") ? "default" : "outline"}
              size="icon"
              className="rounded-full"
            >
              <User className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
