import { copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
await mkdir(outputDir, { recursive: true });
await copyFile(join(import.meta.dirname, "entry.png"), join(outputDir, "entry.png"));
