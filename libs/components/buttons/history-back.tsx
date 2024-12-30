"use client";

import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

import { Button } from "@ui/button/button";

export const HistoryBackButton = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Button variant="empty" onClick={handleBack}>
      {children}
    </Button>
  );
};
