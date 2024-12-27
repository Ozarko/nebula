import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { CustomMiddleware } from "./chain";
import { StaticPagePath } from "@enums/general/static-page-path";

export const withSurveyGuard = (middleware: CustomMiddleware) => {
  return async (req: NextRequest, event: NextFetchEvent) => {
    // First middleware in the chain should create response
    const res = NextResponse.next();

    const url = req.nextUrl.pathname;
    if (url.includes(StaticPagePath.Survey)) {
      const urlSlug = url.split("/").filter(Boolean);
      if (urlSlug.length !== 3) {
        const homeUrl = new URL(StaticPagePath.Home, req.nextUrl.origin);
        return NextResponse.redirect(homeUrl.href);
      }
    }

    return middleware(req, event, res);
  };
};
