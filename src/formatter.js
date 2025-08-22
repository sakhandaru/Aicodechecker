import chalk from "chalk";

export function formatResult(result) {
  let color;
  if (result.type === "error") color = chalk.red("❌ Error");
  else if (result.type === "warning") color = chalk.yellow("⚠️ Warning");
  else color = chalk.blue("💡 Suggestion");

  return `${color} in ${chalk.cyan(result.file)} → ${result.message}`;
}

export function printSummary(results) {
  const errors = results.filter(r => r.type === "error").length;
  const warnings = results.filter(r => r.type === "warning").length;
  const suggestions = results.filter(r => r.type === "suggestion").length;

  console.log("\n📊 Summary:");
  console.log(`   ${chalk.red(errors + " Errors")} | ${chalk.yellow(warnings + " Warnings")} | ${chalk.blue(suggestions + " Suggestions")}`);
}
