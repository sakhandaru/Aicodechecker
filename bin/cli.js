#!/usr/bin/env node
import { Command } from "commander";
import { analyzeFile } from "../src/analyzer.js";
import { reportFindings } from "../src/reporter.js";

const program = new Command();

program
  .name("aicodeaudit")
  .description("🔍 AI Code Audit – simple static analyzer for bad practices & security risks")
  .argument("<file>", "File yang mau di-audit")
  .action((file) => {
    const findings = analyzeFile(file);
    reportFindings(file, findings);
  });

program.parse(process.argv);
