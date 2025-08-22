import chalk from "chalk";

export function reportFindings(file, findings) {
  console.log(chalk.cyan(`\n🔍 Audit file: ${file}\n`));

  if (findings.length === 0) {
    console.log(chalk.green("✅ Tidak ada masalah ditemukan!"));
  } else {
    findings.forEach((f) => {
      console.log(
        chalk.red(`❌ [Line ${f.line}] ${f.message}\n   ${chalk.yellow(f.code)}`)
      );
    });
  }
}
