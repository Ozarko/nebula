"use client";

import { useSearchParams } from "next/navigation";

import { QueryUrlButtonType } from "@typeslib/survey/components";

import { RouterButton } from "./router-button";

export const QueryUrlButton = ({ config }: QueryUrlButtonType) => {
  const { title, queryKey } = config;

  const params = useSearchParams();

  const href = params.get(queryKey);

  if (!href) return null;

  return (
    <RouterButton href={href} className="mb-5 w-full">
      {title}
    </RouterButton>
  );
};
