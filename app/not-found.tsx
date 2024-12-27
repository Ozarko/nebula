import { RouterButton } from "@components/buttons/router-button";
import { Main } from "@ui/layout/main";
import { TypographyH2 } from "@ui/typography/typographyH2";
import { TypographyP } from "@ui/typography/typographyP";

export default function NotFound() {
  return (
    <Main className="flex flex-col justify-center items-center min-h-screen container">
      <TypographyH2 className="text-6xl font-bold mb-4">404</TypographyH2>
      <TypographyP className="text-xl mb-4">
        Oops! The page you&apos;re looking for seems to have wandered off into
        the cosmos.
      </TypographyP>
      <TypographyP className="text-lg mb-8">
        But don&apos;t worry, you can always find your way back home.
      </TypographyP>

      <div className="w-fit">
        <RouterButton href="/">Go back home</RouterButton>
      </div>
    </Main>
  );
}
