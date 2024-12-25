import { PropsWithChildren } from "react";

export type SearchParams = Record<string, string | string[] | undefined>;

export type PageProps<TParams = void> = Readonly<{
  params: Promise<TParams>;
  searchParams: Promise<SearchParams>;
}>;

export type LayoutProps<TParams = void, TParallelRoutes = void> = Readonly<
  PropsWithChildren<{
    params: Promise<TParams>;
  }> &
    TParallelRoutes
>;
