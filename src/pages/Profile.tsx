import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GameCard from "@/components/GameCard";
import { Users, Star, Trophy, Settings } from "lucide-react";

const mockGames = [
  { id: "1", title: "My Racing Game", creator: "You", players: 234, thumbnail: "/placeholder.svg" },
  { id: "2", title: "Adventure Quest", creator: "You", players: 567, thumbnail: "/placeholder.svg" },
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="space-y-8">
          <Card className="p-8">
            <div className="flex items-start justify-between">
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-full bg-gradient-primary" />
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold">GamerPro123</h1>
                  <p className="text-muted-foreground">Member since January 2024</p>
                  <div className="flex gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="font-semibold">156 Friends</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-warning" />
                      <span className="font-semibold">2,450 Points</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-accent" />
                      <span className="font-semibold">12 Badges</span>
                    </div>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </Card>

          <Tabs defaultValue="games" className="space-y-6">
            <TabsList className="bg-card">
              <TabsTrigger value="games">My Games</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
              <TabsTrigger value="friends">Friends</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>
            
            <TabsContent value="games">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Your Created Games</h2>
                  <Button>Create New Game</Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {mockGames.map((game) => (
                    <GameCard key={game.id} {...game} />
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="favorites">
              <div className="text-center py-12 text-muted-foreground">
                <Star className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No favorite games yet</p>
              </div>
            </TabsContent>
            
            <TabsContent value="friends">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Card key={i} className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-secondary" />
                    <div className="flex-1">
                      <p className="font-semibold">Friend {i + 1}</p>
                      <p className="text-sm text-muted-foreground">Online</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Message
                    </Button>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="achievements">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 12 }).map((_, i) => (
                  <Card key={i} className="p-6 text-center space-y-3">
                    <Trophy className="w-12 h-12 mx-auto text-warning" />
                    <div>
                      <p className="font-bold">Achievement {i + 1}</p>
                      <p className="text-sm text-muted-foreground">Earned on Feb {i + 1}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Profile;
