import "server-only";

import { Navigation } from "@components/layout/navigation";
import { LayoutProps } from "@typeslib/app";

export default function QuestionaryLayout({ children }: LayoutProps) {
  return (
    <main className="flex flex-col items-center container min-h-screen pt-[76px]">
      <Navigation withHistoryBack />
      {children}
    </main>
  );
}
