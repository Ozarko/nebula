import "server-only";

import { RouterButton } from "@components/buttons/router-button";
import { Navigation } from "@components/layout/navigation";
import { TypographyH2 } from "@ui/typography/typographyH2";
import { TypographyP } from "@ui/typography/typographyP";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col items-center pt-[76px] container min-h-screen ">
        <div className="flex flex-col space-y-4 max-w-sub-container">
          <TypographyH2>
            Welcome to Nebula - Your Path to Clarity and Happiness
          </TypographyH2>
          <TypographyP>
            Discover the best psychics and astrologers to guide you on your
            journey to happiness. Gain insights, find clarity, and achieve your
            goals with personalized readings and professional guidance from
            Nebula.
          </TypographyP>
          <RouterButton href="/main/prelanding">Start Survey</RouterButton>
        </div>
      </main>
    </>
  );
}
