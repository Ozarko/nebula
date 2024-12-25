import "server-only";

import { Button } from "@ui/atomic/button";
import { TypographyH2 } from "@ui/typography/typographyH2";
import { TypographyP } from "@ui/typography/typographyP";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-20 w-screen min-h-screen">
      <div className="flex flex-col space-y-4 container">
        <TypographyH2>
          Hello, world! This is a button component styled with Tailwind CSS.
        </TypographyH2>
        <TypographyP>This is a paragraph styled with Tailwind CSS.</TypographyP>
        <Button>Click me</Button>
        <Button variant="secondary">Click me</Button>
      </div>
    </main>
  );
}
