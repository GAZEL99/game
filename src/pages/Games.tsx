import Navbar from "@/components/Navbar";
import GameCard from "@/components/GameCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const mockGames = [
  { id: "1", title: "Dragon Quest Adventures", creator: "EpicBuilder", players: 15420, thumbnail: "/placeholder.svg", featured: true },
  { id: "2", title: "City Builder Tycoon", creator: "UrbanMaster", players: 8932, thumbnail: "/placeholder.svg" },
  { id: "3", title: "Space Shooter Arena", creator: "CosmicGamer", players: 12654, thumbnail: "/placeholder.svg", featured: true },
  { id: "4", title: "Racing Legends", creator: "SpeedDemon", players: 6789, thumbnail: "/placeholder.svg" },
  { id: "5", title: "Fantasy RPG World", creator: "QuestMaker", players: 23456, thumbnail: "/placeholder.svg" },
  { id: "6", title: "Zombie Survival", creator: "HorrorFan", players: 11234, thumbnail: "/placeholder.svg" },
  { id: "7", title: "Soccer Championship", creator: "SportsPro", players: 9876, thumbnail: "/placeholder.svg" },
  { id: "8", title: "Mystery Detective", creator: "ClueSeeker", players: 5432, thumbnail: "/placeholder.svg" },
];

const Games = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Discover Games</h1>
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="Search games..." 
                className="pl-10"
              />
            </div>
          </div>

          <Tabs defaultValue="trending" className="space-y-6">
            <TabsList className="bg-card">
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="new">New</TabsTrigger>
              <TabsTrigger value="recommended">Recommended</TabsTrigger>
            </TabsList>
            
            <TabsContent value="trending" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mockGames.map((game) => (
                  <GameCard key={game.id} {...game} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="popular" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mockGames.sort((a, b) => b.players - a.players).map((game) => (
                  <GameCard key={game.id} {...game} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="new" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...mockGames].reverse().map((game) => (
                  <GameCard key={game.id} {...game} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="recommended" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mockGames.filter(g => g.featured).map((game) => (
                  <GameCard key={game.id} {...game} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Games;
