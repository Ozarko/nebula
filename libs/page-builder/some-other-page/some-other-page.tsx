import { SomeOtherPageType } from "@typeslib/survey/page-types";
import { TypographyH2 } from "@ui/typography/typographyH2";
import { TypographyP } from "@ui/typography/typographyP";

export const SomeOtherPage = ({ someOtherProp }: SomeOtherPageType) => {
  return (
    <main className="flex flex-col items-center container min-h-screen pt-[76px]">
      <TypographyH2>
        Hi, I&apos;m a page of some other type. I&apos;m here to show you how to
        create a new page type.
      </TypographyH2>
      <TypographyP>{someOtherProp}</TypographyP>
    </main>
  );
};
