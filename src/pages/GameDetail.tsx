import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Heart, Share2, Users, Star } from "lucide-react";

const GameDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden relative group">
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" className="gap-2 text-lg px-8 py-6">
                  <Play className="w-6 h-6" />
                  Play Game
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h1 className="text-4xl font-bold">Dragon Quest Adventures</h1>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>15,420 playing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-warning text-warning" />
                  <span>4.8 rating</span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Embark on an epic adventure through mystical lands filled with dragons, magic, and treasure. 
                Battle fierce enemies, solve ancient puzzles, and become a legendary hero in this immersive RPG experience. 
                Team up with friends or venture alone in this expansive fantasy world.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 space-y-4">
              <h3 className="font-bold text-xl">Creator</h3>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-primary" />
                <div>
                  <p className="font-semibold">EpicBuilder</p>
                  <p className="text-sm text-muted-foreground">23 games</p>
                </div>
              </div>
              <Button className="w-full">Follow</Button>
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="font-bold text-xl">Game Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Plays</span>
                  <span className="font-semibold">2.3M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Favorites</span>
                  <span className="font-semibold">45.2K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Created</span>
                  <span className="font-semibold">2 months ago</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GameDetail;
