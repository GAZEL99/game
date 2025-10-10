import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface GameCardProps {
  id: string;
  title: string;
  creator: string;
  players: number;
  thumbnail: string;
  featured?: boolean;
}

const GameCard = ({ id, title, creator, players, thumbnail, featured }: GameCardProps) => {
  return (
    <Link to={`/game/${id}`}>
      <Card className="group overflow-hidden hover:shadow-glow transition-all duration-300 cursor-pointer border-border bg-card">
        <div className="relative aspect-video overflow-hidden">
          <div 
            className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform duration-300"
            style={{
              backgroundImage: `url(${thumbnail})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          {featured && (
            <div className="absolute top-2 right-2 px-3 py-1 bg-accent/90 backdrop-blur-sm rounded-full text-xs font-bold">
              FEATURED
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button size="lg" className="gap-2">
              <Play className="w-5 h-5" />
              Play Now
            </Button>
          </div>
        </div>
        <div className="p-4 space-y-2">
          <h3 className="font-bold text-lg line-clamp-1">{title}</h3>
          <p className="text-sm text-muted-foreground">by {creator}</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{players.toLocaleString()} playing</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default GameCard;
