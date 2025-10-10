import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Coins } from "lucide-react";

const avatarItems = {
  heads: [
    { id: 1, name: "Default Head", price: 0, owned: true },
    { id: 2, name: "Robot Head", price: 250, owned: false },
    { id: 3, name: "Knight Helmet", price: 500, owned: false },
  ],
  bodies: [
    { id: 1, name: "Default Body", price: 0, owned: true },
    { id: 2, name: "Armor", price: 350, owned: false },
    { id: 3, name: "Space Suit", price: 450, owned: false },
  ],
  accessories: [
    { id: 1, name: "Sunglasses", price: 100, owned: false },
    { id: 2, name: "Crown", price: 600, owned: false },
    { id: 3, name: "Wings", price: 800, owned: false },
  ],
};

const Avatar = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-8">Customize Your Avatar</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="p-8 space-y-4">
              <h3 className="font-bold text-xl text-center">Preview</h3>
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-primary rounded-full" />
              </div>
              <Button className="w-full" size="lg">
                Save Avatar
              </Button>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Tabs defaultValue="heads" className="space-y-6">
              <TabsList className="bg-card w-full">
                <TabsTrigger value="heads" className="flex-1">Heads</TabsTrigger>
                <TabsTrigger value="bodies" className="flex-1">Bodies</TabsTrigger>
                <TabsTrigger value="accessories" className="flex-1">Accessories</TabsTrigger>
              </TabsList>
              
              <TabsContent value="heads">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {avatarItems.heads.map((item) => (
                    <Card key={item.id} className="p-4 space-y-3">
                      <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg" />
                      <div className="space-y-2">
                        <p className="font-semibold">{item.name}</p>
                        {item.owned ? (
                          <Button variant="outline" className="w-full" size="sm">
                            Equipped
                          </Button>
                        ) : (
                          <Button className="w-full gap-2" size="sm">
                            <Coins className="w-4 h-4" />
                            {item.price}
                          </Button>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="bodies">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {avatarItems.bodies.map((item) => (
                    <Card key={item.id} className="p-4 space-y-3">
                      <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg" />
                      <div className="space-y-2">
                        <p className="font-semibold">{item.name}</p>
                        {item.owned ? (
                          <Button variant="outline" className="w-full" size="sm">
                            Equipped
                          </Button>
                        ) : (
                          <Button className="w-full gap-2" size="sm">
                            <Coins className="w-4 h-4" />
                            {item.price}
                          </Button>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="accessories">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {avatarItems.accessories.map((item) => (
                    <Card key={item.id} className="p-4 space-y-3">
                      <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg" />
                      <div className="space-y-2">
                        <p className="font-semibold">{item.name}</p>
                        {item.owned ? (
                          <Button variant="outline" className="w-full" size="sm">
                            Equipped
                          </Button>
                        ) : (
                          <Button className="w-full gap-2" size="sm">
                            <Coins className="w-4 h-4" />
                            {item.price}
                          </Button>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Avatar;
