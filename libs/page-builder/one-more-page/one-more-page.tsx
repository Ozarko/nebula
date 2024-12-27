import { OneMorePageType } from "@typeslib/survey/page-types";
import { TypographyH1 } from "@ui/typography/typographyH1";
import { TypographyP } from "@ui/typography/typographyP";

export const OneMorePage = ({ oneMoreProp }: OneMorePageType) => {
  return (
    <main className="flex flex-col items-center container min-h-screen pt-[76px]">
      <TypographyH1>It is a One More Page</TypographyH1>
      <TypographyP>{oneMoreProp}</TypographyP>
    </main>
  );
};
