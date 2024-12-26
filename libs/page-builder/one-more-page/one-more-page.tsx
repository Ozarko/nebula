import { OneMorePageType } from "@typeslib/questionary";
import { TypographyH2 } from "@ui/typography/typographyH2";
import { TypographyP } from "@ui/typography/typographyP";

export const OneMorePage = ({ oneMoreProp }: OneMorePageType) => {
  return (
    <main className="flex flex-col items-center container min-h-screen pt-[76px]">
      <TypographyH2>It is a One More Page</TypographyH2>
      <TypographyP>{oneMoreProp}</TypographyP>
    </main>
  );
};
