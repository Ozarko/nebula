"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@ui/button";

export const HistoryBack = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Button variant="empty" onClick={handleBack}>
      <Image src="/chevron.svg" alt="Back" width={24} height={24} />
    </Button>
  );
};
