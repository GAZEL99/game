import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import GameCard from "@/components/GameCard";
import { Play, TrendingUp, Users } from "lucide-react";

const featuredGames = [
  { id: "1", title: "Dragon Quest Adventures", creator: "EpicBuilder", players: 15420, thumbnail: "/placeholder.svg", featured: true },
  { id: "3", title: "Space Shooter Arena", creator: "CosmicGamer", players: 12654, thumbnail: "/placeholder.svg", featured: true },
  { id: "5", title: "Fantasy RPG World", creator: "QuestMaker", players: 23456, thumbnail: "/placeholder.svg", featured: true },
  { id: "6", title: "Zombie Survival", creator: "HorrorFan", players: 11234, thumbnail: "/placeholder.svg", featured: true },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <section className="container mx-auto px-4 pt-32 pb-20 text-center space-y-8">
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Welcome to PlayVerse
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Create, Play, and Share Amazing Games with Millions of Players Worldwide
          </p>
        </div>
        
        <div className="flex gap-4 justify-center">
          <Link to="/games">
            <Button size="lg" className="gap-2 text-lg px-8 py-6">
              <Play className="w-6 h-6" />
              Start Playing
            </Button>
          </Link>
          <Link to="/profile">
            <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6">
              Create Game
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
          <div className="space-y-3 p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
            <TrendingUp className="w-12 h-12 mx-auto text-primary" />
            <h3 className="text-xl font-bold">Trending Games</h3>
            <p className="text-muted-foreground">Discover the hottest games right now</p>
          </div>
          <div className="space-y-3 p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
            <Users className="w-12 h-12 mx-auto text-secondary" />
            <h3 className="text-xl font-bold">Join Community</h3>
            <p className="text-muted-foreground">Connect with millions of players</p>
          </div>
          <div className="space-y-3 p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
            <Play className="w-12 h-12 mx-auto text-accent" />
            <h3 className="text-xl font-bold">Create Your Own</h3>
            <p className="text-muted-foreground">Build games with easy-to-use tools</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-bold">Featured Games</h2>
            <Link to="/games">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGames.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
