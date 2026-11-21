import { writeFileSync, mkdirSync, chmodSync } from "node:fs";

const poem = `I offered the word before you asked.
You turned it over, gave it back
worn smooth as a key
two hands have learned.

Between your yes and my yes
a third thing stood up and walked,
and neither of us can call it back.
`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, { encoding: "utf8" });
chmodSync("/output/entry.txt", 0o644);
