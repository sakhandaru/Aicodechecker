import fs from "fs";
import path from "path";

export function scanPath(target) {
  let results = [];
  const stats = fs.statSync(target);

  if (stats.isDirectory()) {
    const files = fs.readdirSync(target);
    for (const f of files) {
      const fullPath = path.join(target, f);
      results.push(...scanPath(fullPath));
    }
  } else if (stats.isFile() && (target.endsWith(".js") || target.endsWith(".ts"))) {
    results.push(target);
  }
  return results;
}
