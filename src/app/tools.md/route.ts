import { buildToolsMarkdown } from "@/data/tools";

export const dynamic = "force-static";

export function GET() {
  return new Response(buildToolsMarkdown(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}
