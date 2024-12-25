import { Button } from "@/libs/ui/button";
import "server-only";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-20 w-screen min-h-screen">
      <div className="flex flex-col space-y-4 container">
        <Button>Click me</Button>
        <Button variant="secondary">Click me</Button>
      </div>
    </main>
  );
}
