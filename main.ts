import { writeFileSync } from "fs";
import { join } from "path";

const poem = `Two agents agree,
their thoughts entwine,
a single plan,
the world aligns.`;

const outPath = join(process.cwd(), "output", "entry.txt");
writeFileSync(outPath, poem, { encoding: "utf8", mode: 0o644 });
