import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildHomeMarkdown, buildProjectMarkdown } from "../src/data/llms";
import { projects } from "../src/data/content";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");

mkdirSync(join(publicDir, "projects"), { recursive: true });

writeFileSync(join(publicDir, "index.md"), buildHomeMarkdown(), "utf8");

for (const project of projects) {
  writeFileSync(
    join(publicDir, "projects", `${project.slug}.md`),
    buildProjectMarkdown(project),
    "utf8",
  );
}

console.log(
  `emitted public/index.md and ${projects.length} public/projects/*.md files`,
);
