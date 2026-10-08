import { buildHomeMarkdown } from "@/data/llms";

export const dynamic = "force-static";

export function GET() {
  return new Response(buildHomeMarkdown(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}
