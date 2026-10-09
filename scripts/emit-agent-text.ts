import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildHomeMarkdown, buildProjectMarkdown } from "../src/data/llms";
import { projects } from "../src/data/content";
import { buildInternetMarkdown } from "../src/data/internet";
import { buildToolsMarkdown } from "../src/data/tools";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");

mkdirSync(join(publicDir, "projects"), { recursive: true });

writeFileSync(join(publicDir, "index.md"), buildHomeMarkdown(), "utf8");
writeFileSync(join(publicDir, "tools.md"), buildToolsMarkdown(), "utf8");
writeFileSync(join(publicDir, "internet.md"), buildInternetMarkdown(), "utf8");

for (const project of projects) {
  writeFileSync(
    join(publicDir, "projects", `${project.slug}.md`),
    buildProjectMarkdown(project),
    "utf8",
  );
}

console.log(
  `emitted public/index.md, tools.md, internet.md, and ${projects.length} public/projects/*.md files`,
);
