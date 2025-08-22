# 🛠️ AI Code Checker
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


`AicodeChecker` is a simple command-line tool (CLI) static analysis to help developers find potential problems, *code smells*, and security risks in JavaScript code.

## ✨ Features

- Detects *hardcoded secrets* (passwords, API keys).
- Finds insecure function usage like `eval()` and `document.write()`.
- Easily extendable with new rules.

## 🚀 Installation

1. Clone the repository (anywhere you like, e.g., `~/Code`):

   ```bash
   cd ~/Code
   git clone https://github.com/sakhandaru/Aicodechecker.git
   cd AicodeChecker

   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Link the package to make it globally available:

   ```bash
   npm link
   ```

> **Note**: After running `npm link`, the `AicodeChecker` command will be available from any directory in your system.

## 🧑‍💻 Usage

Audit a single JavaScript file:

```bash
AicodeChecker test/sample.js
```

Audit an entire project folder:

```bash
AicodeChecker ./src
```

## ✨ Example Output

Based on the provided `test/sample.js`, the output will be:

```
🔍 Audit file: test/sample.js

❌ [Line 2] 🚨 Hardcoded password ditemukan
   const password = "12345";
❌ [Line 3] 🚨 Hardcoded API key ditemukan
   const apiKey = "my-secret-key";
❌ [Line 4] ⚠️  Penggunaan eval() berbahaya
   eval("console.log('halo')");
❌ [Line 5] ⚠️  Hindari document.write(), gunakan DOM API modern
   document.write("Hello");
```

## 🤝 Contributing

Pull requests and issues are always welcome!
If you have ideas for new features (e.g., support for Python, Go, or direct integration with GitHub Actions), feel free to open an issue.


## 🇮🇩 Versi Bahasa Indonesia

`AicodeChecker` adalah sebuah command-line tool (CLI) static analysis sederhana untuk membantu developer menemukan potensi masalah, *code smell*, dan risiko keamanan dalam kode JavaScript.

## ✨ Fitur

- Deteksi *hardcoded secrets* (password, API key).
- Menemukan penggunaan fungsi yang tidak aman seperti `eval()` dan `document.write()`.
- Mudah diperluas dengan aturan-aturan baru.

## 🚀 Instalasi

1. Clone repository (bebas di folder mana saja, contoh `~/Code`):

   ```bash
   cd ~/Code
   git clone https://github.com/sakhandaru/Aicodechecker.git
   cd AicodeChecker

   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Link agar bisa dipakai secara global:

   ```bash
   npm link
   ```

> **Catatan**: Setelah `npm link`, command `AicodeChecker` bisa dijalankan dari direktori mana pun di sistem Anda.

## 🧑‍💻 Cara Pakai

Jalankan audit pada sebuah file JavaScript:

```bash
AicodeChecker test/sample.js
```

Audit seluruh folder project:

```bash
AicodeChecker ./src
```

## ✨ Contoh Output

Berdasarkan file `test/sample.js`, outputnya akan seperti ini:

```
[+] Analyzing test/sample.js ...
⚠️  Line 12: Possible unused variable
💡 Suggestion: Consider removing or using the variable
```

## 🤝 Kontribusi

Pull request dan issue selalu terbuka!
Kalau ada ide fitur baru (misalnya dukungan untuk Python, Go, atau integrasi langsung dengan GitHub Actions), silakan ajukan.
