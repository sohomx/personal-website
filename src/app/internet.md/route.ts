import { buildInternetMarkdown } from "@/data/internet";

export const dynamic = "force-static";

export function GET() {
  return new Response(buildInternetMarkdown(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}
