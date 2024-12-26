import "server-only";

import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

import { StaticPagePath } from "@enums/static-page-path";
import { Question } from "@typeslib/survey/general";
import { isBlockBuilderQuestion } from "@utils/types-guard/page-builder/is-block-builder-question";
import { isOneMorePage } from "@utils/types-guard/page-builder/is-one-more-page";
import { isSomeOtherPage } from "@utils/types-guard/page-builder/is-some-other-page";

const BlockBuilderPage = dynamic(async () => {
  const { BlockBuilderPage } = await import(
    "@page-builder/block-builder/block-builder-page"
  );
  return BlockBuilderPage;
});

const SomeOtherPage = dynamic(async () => {
  const { SomeOtherPage } = await import(
    "@page-builder/some-other-page/some-other-page"
  );
  return SomeOtherPage;
});

const OneMorePage = dynamic(async () => {
  const { OneMorePage } = await import(
    "@page-builder/one-more-page/one-more-page"
  );
  return OneMorePage;
});

type PageBuilderProps = {
  question: Question;
};

export const PageBuilder = ({ question }: PageBuilderProps) => {
  switch (true) {
    case isBlockBuilderQuestion(question):
      return <BlockBuilderPage {...question} />;
    case isSomeOtherPage(question):
      return <SomeOtherPage {...question} />;
    case isOneMorePage(question):
      return <OneMorePage {...question} />;
    default:
      redirect(StaticPagePath.NotFound);
  }
};
