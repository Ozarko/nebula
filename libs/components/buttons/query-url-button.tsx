"use client";

import { useSearchParams } from "next/navigation";

import { withSuspense } from "@hoc/withSuspense";

import { RouterButton, RouterButtonProps } from "./router-button";

type QueryUrlButtonProps = { queryKey: string } & Omit<
  RouterButtonProps,
  "href"
>;

export const QueryUrlButton = withSuspense(
  ({ queryKey, ...rest }: QueryUrlButtonProps) => {
    const params = useSearchParams();

    const href = params.get(queryKey);

    if (!href) return null;

    return <RouterButton {...rest} href={href} />;
  },
);
