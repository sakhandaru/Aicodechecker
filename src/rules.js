export const rules = [
  {
    regex: /password\s*=\s*['"].+['"]/i,
    message: "🚨 Hardcoded password ditemukan",
  },
  {
    regex: /api[_-]?key\s*=\s*['"].+['"]/i,
    message: "🚨 Hardcoded API key ditemukan",
  },
  {
    regex: /\beval\s*\(/i,
    message: "⚠️  Penggunaan eval() berbahaya",
  },
  {
    regex: /\bdocument\.write\s*\(/i,
    message: "⚠️  Hindari document.write(), gunakan DOM API modern",
  },
];
