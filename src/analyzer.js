import fs from 'fs';
import { rules } from './rules.js';

export function analyzeFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    const findings = [];
 
    lines.forEach((line, index) => {
      const lineNumber = index + 1;
 
      // Apply regex-based rules from rules.js
      for (const rule of rules) {
        if (rule.regex.test(line)) {
          findings.push({
            line: lineNumber,
            message: rule.message,
            code: line.trim(),
          });
        }
      }
 
      // Check for console.log in production code (if not in test/debug files)
      // This rule is kept separate as it depends on the filePath context.
      if (!filePath.includes('test') && line.trim().startsWith('console.log(')) {
        findings.push({
          line: lineNumber,
          message: '🤔 Ditemukan console.log. Sebaiknya hapus untuk production.',
          code: line.trim(),
        });
      }
    });
 
    return findings;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message);
    return [];
  }
}
