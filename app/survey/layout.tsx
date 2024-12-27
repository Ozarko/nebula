import "server-only";

import { SurveyGuard } from "@/libs/guards/survey-guard";
import { LayoutProps } from "@typeslib/app";

export default function QuestionaryLayout({ children }: LayoutProps) {
  return (
    <SurveyGuard>
      <main className="flex flex-col items-center container min-h-screen pt-[76px]">
        {children}
      </main>
    </SurveyGuard>
  );
}
