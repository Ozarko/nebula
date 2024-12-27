import "server-only";

import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

import { SkeletonPage } from "@components/skeletons/page-skeleton";
import { StaticPagePath } from "@enums/general/static-page-path";
import { Question } from "@typeslib/survey/general";
import { isBlockBuilderQuestion } from "@utils/types-guard/page-builder/is-block-builder-question";
import { isOneMorePage } from "@utils/types-guard/page-builder/is-one-more-page";
import { isResultsPage } from "@utils/types-guard/page-builder/is-results-page-type";

const BlockBuilderPage = dynamic(
  async () => {
    const { BlockBuilderPage } = await import(
      "@page-builder/block-builder/block-builder-page"
    );
    return BlockBuilderPage;
  },
  { loading: () => <SkeletonPage /> },
);

const ResultsPage = dynamic(
  async () => {
    const { ResultsPage } = await import("@page-builder/results/results");
    return ResultsPage;
  },
  { loading: () => <SkeletonPage /> },
);

const OneMorePage = dynamic(
  async () => {
    const { OneMorePage } = await import(
      "@page-builder/one-more-page/one-more-page"
    );
    return OneMorePage;
  },
  { loading: () => <SkeletonPage /> },
);

type PageBuilderProps = {
  question: Question;
};

export const PageBuilder = ({ question }: PageBuilderProps) => {
  switch (true) {
    case isBlockBuilderQuestion(question):
      return <BlockBuilderPage {...question} />;
    case isResultsPage(question):
      return <ResultsPage {...question} />;
    case isOneMorePage(question):
      return <OneMorePage {...question} />;
    default:
      redirect(StaticPagePath.NotFound);
  }
};
