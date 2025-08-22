export function analyzeFile(filename, code) {
  let results = [];

  // Rule 1: cari console.log
  if (code.includes("console.log")) {
    results.push({
      file: filename,
      type: "warning",
      message: "Terdapat console.log, sebaiknya dihapus di production."
    });
  }

  // Rule 2: cari var
  if (code.includes("var ")) {
    results.push({
      file: filename,
      type: "error",
      message: "Gunakan let/const, hindari var."
    });
  }

  return results;
}
