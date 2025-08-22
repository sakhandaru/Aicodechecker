import fs from 'fs';

export function analyzeFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    const findings = [];

    lines.forEach((line, index) => {
      const lineNumber = index + 1;
      const trimmedLine = line.trim();

      // Check for hardcoded passwords
      if (trimmedLine.includes('password') && trimmedLine.includes('=') && 
          (trimmedLine.includes('"') || trimmedLine.includes("'"))) {
        findings.push({
          line: lineNumber,
          message: 'Hardcoded password detected - security risk!',
          code: line.trim()
        });
      }

      // Check for hardcoded API keys
      if (trimmedLine.includes('apiKey') && trimmedLine.includes('=') && 
          (trimmedLine.includes('"') || trimmedLine.includes("'"))) {
        findings.push({
          line: lineNumber,
          message: 'Hardcoded API key detected - security risk!',
          code: line.trim()
        });
      }

      // Check for eval() usage
      if (trimmedLine.includes('eval(')) {
        findings.push({
          line: lineNumber,
          message: 'eval() usage detected - potential security vulnerability!',
          code: line.trim()
        });
      }

      // Check for document.write() usage
      if (trimmedLine.includes('document.write(')) {
        findings.push({
          line: lineNumber,
          message: 'document.write() usage detected - potential XSS vulnerability!',
          code: line.trim()
        });
      }

      // Check for console.log in production code (if not in test/debug files)
      if (trimmedLine.includes('console.log(') && !filePath.includes('test')) {
        findings.push({
          line: lineNumber,
          message: 'console.log() found - should be removed in production',
          code: line.trim()
        });
      }
    });

    return findings;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message);
    return [];
  }
}
