#!/usr/bin/env node
import { scanPath } from "../src/utils.js";
import { analyzeFile } from "../src/analyzer.js";
import { formatResult, printSummary } from "../src/formatter.js";
import fs from "fs";

const targetPath = process.argv[2];

if (!targetPath) {
  console.log("❌ Usage: aicodechecker <file-or-folder>");
  process.exit(1);
}

const files = scanPath(targetPath);
let allResults = [];

for (const file of files) {
  const code = fs.readFileSync(file, "utf-8");
  const results = analyzeFile(file, code);
  allResults.push(...results);

  results.forEach(r => {
    console.log(formatResult(r));
  });
}

printSummary(allResults);
