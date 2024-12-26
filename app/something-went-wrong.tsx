import React from "react";

import { RouterButton } from "@components/buttons/router-button";
import { Navigation } from "@components/layout/navigation";
import { TypographyH2 } from "@ui/typography/typographyH2";
import { TypographyP } from "@ui/typography/typographyP";

export default function SomethingWentWrong() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        <TypographyH2 className="text-6xl font-bold mb-4">Oops!</TypographyH2>
        <TypographyP className="text-xl mb-8">
          It looks like something went wrong on our end. But don&apos;t worry,
          on it!
        </TypographyP>
        <TypographyP className="text-lg mb-8">
          In the meantime, you can head back to our homepage and continue
          exploring the cosmos.
        </TypographyP>
        <div className="w-fit">
          <RouterButton href="/">Go back home</RouterButton>
        </div>
      </main>
    </>
  );
}
