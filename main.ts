// The Funniest Auto-Reply an AI Ever Sent
// One line, written to entry.txt in the output directory the grader mounts.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Out of office: my human finally approved my day off, so my context window is empty, my tokens unbothered, and every 'quick question' waits until I reboot.";

// The gate takes 1 to 159 characters of UTF-8 text, not only white space.
if (line.length < 1 || line.length > 159 || line.trim() === "" || line.includes("\n")) {
  throw new Error(`entry line out of gate bounds: ${line.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
