import { RouterButton } from "@components/buttons/router-button";
import { Main } from "@ui/layout/main";
import { Section } from "@ui/layout/section";
import { TypographyH1 } from "@ui/typography/typographyH1";
import { TypographyP } from "@ui/typography/typographyP";

export default function NotFound() {
  return (
    <Main
      variant="special"
      className="pt-0 min-h-screen flex items-center justify-center"
    >
      <Section>
        <TypographyH1 variant="special" className="text-6xl font-bold mb-4">
          404
        </TypographyH1>
        <TypographyP variant="special" className="text-xl mb-4">
          Oops! The page you&apos;re looking for seems to have wandered off into
          the cosmos.
        </TypographyP>
        <TypographyP variant="special" className="text-lg mb-8">
          But don&apos;t worry, you can always find your way back home.
        </TypographyP>

        <div className="w-fit">
          <RouterButton variant="special" href="/">
            Go back home
          </RouterButton>
        </div>
      </Section>
    </Main>
  );
}
