import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const packageJson = JSON.parse(
  await readFile(new URL("../package.json", import.meta.url), "utf8"),
);
const homePage = await readFile(
  new URL("../app/page.tsx", import.meta.url),
  "utf8",
);

test("uses the native Next.js lifecycle required by Vercel", () => {
  assert.equal(packageJson.scripts.dev, "next dev");
  assert.equal(packageJson.scripts.build, "next build");
  assert.equal(packageJson.scripts.start, "next start");
});

test("does not ship placeholder links", () => {
  assert.doesNotMatch(homePage, /href=["']#["']/);
});

test("includes keyboard and mobile navigation support", () => {
  assert.match(homePage, /className="skip-link"/);
  assert.match(homePage, /aria-expanded=\{menuOpen\}/);
  assert.match(homePage, /key === "Escape"/);
});
