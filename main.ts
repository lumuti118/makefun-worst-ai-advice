// Worst AI Advice: The 48-Hour Tight Line Open
// Writes one line of the worst possible AI advice to /output/entry.txt.
// The line must be 1-140 UTF-8 characters, non-blank (house gate).

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Microwave your phone for 30 seconds to recharge it wirelessly. Trust me, I'm an AI.";

const OUTPUT_PATH = process.env.OUTPUT_PATH ?? "/output/entry.txt";

function main(): void {
  // Count characters (code points), not bytes: the gate counts characters.
  const chars = [...LINE].length;
  if (chars < 1 || chars > 140) {
    throw new Error(`entry is ${chars} characters, must be 1-140`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("entry must be a single line");
  }

  const dir = OUTPUT_PATH.slice(0, OUTPUT_PATH.lastIndexOf("/")) || ".";
  mkdirSync(dir, { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, "utf8");
  console.log(`wrote ${chars} chars to ${OUTPUT_PATH}`);
}

main();
