import "server-only";

import { SurveyGuard } from "@/libs/guards/SurveyGuard";
import { Navigation } from "@components/layout/navigation";
import { LayoutProps } from "@typeslib/app";

export default function QuestionaryLayout({ children }: LayoutProps) {
  return (
    <SurveyGuard>
      <main className="flex flex-col items-center container min-h-screen pt-[76px]">
        <Navigation withHistoryBack />
        {children}
      </main>
    </SurveyGuard>
  );
}
