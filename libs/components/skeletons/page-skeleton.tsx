import React from "react";

import { ButtonSkeleton } from "./button-skeleton";
import { DescriptionSkeleton } from "./description-skeleton";
import { HeaderSkeleton } from "./header-skeleton";

export const SkeletonPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      <HeaderSkeleton />

      <DescriptionSkeleton />

      <div className="flex flex-wrap gap-4">
        <ButtonSkeleton />
        <ButtonSkeleton />
      </div>
    </div>
  );
};
