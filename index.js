import fs from "fs";
import path from "path";
import { rules } from "./rules/index.js";

export function runChecker(targetPath) {
  const files = getAllFiles(targetPath, [".js", ".ts"]);

  let totalErrors = 0;
  let totalWarnings = 0;
  let totalSuggestions = 0;

  files.forEach((file) => {
    const content = fs.readFileSync(file, "utf-8");
    rules.forEach((rule) => {
      const matches = content.match(rule.regex);
      if (matches) {
        matches.forEach((line) => {
          console.log(
            `${file}: ${rule.type.toUpperCase()} → ${rule.message} (found: ${line.trim()})`
          );
        });
        if (rule.type === "error") totalErrors += matches.length;
        if (rule.type === "warning") totalWarnings += matches.length;
        if (rule.type === "suggestion") totalSuggestions += matches.length;
      }
    });
  });

  console.log("\n📊 Summary:");
  console.log(`   Errors: ${totalErrors}`);
  console.log(`   Warnings: ${totalWarnings}`);
  console.log(`   Suggestions: ${totalSuggestions}`);
}

function getAllFiles(dir, exts, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllFiles(fullPath, exts, files);
    } else {
      if (exts.includes(path.extname(entry.name))) {
        files.push(fullPath);
      }
    }
  }
  return files;
}
