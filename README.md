# 🛠️ AI Code Audit

[![NPM Version](https://img.shields.io/npm/v/aicodeaudit.svg)](https://www.npmjs.com/package/aicodeaudit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/github/actions/workflow/status/username/aicodeaudit/ci.yml?branch=main)](https://github.com/username/aicodeaudit/actions)

`aicodeaudit` adalah sebuah command-line tool (CLI) static analysis sederhana untuk membantu developer menemukan potensi masalah, *code smell*, dan risiko keamanan dalam kode JavaScript.

## ✨ Fitur

- Deteksi *hardcoded secrets* (password, API key).
- Menemukan penggunaan fungsi yang tidak aman seperti `eval()` dan `document.write()`.
- Mudah diperluas dengan aturan-aturan baru.

## 🚀 Instalasi

1. Clone repository (bebas di folder mana saja, contoh `~/Code`):

   ```bash
   cd ~/Code
   git clone https://github.com/username/aicodeaudit.git
   cd aicodeaudit
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Link agar bisa dipakai secara global:

   ```bash
   npm link
   ```

> **Catatan**: Setelah `npm link`, command `aicodeaudit` bisa dijalankan dari direktori mana pun di sistem Anda.

## 🧑‍💻 Cara Pakai

Jalankan audit pada sebuah file JavaScript:

```bash
aicodeaudit test/sample.js
```

Audit seluruh folder project:

```bash
aicodeaudit ./src
```

## ✨ Contoh Output

```
[+] Analyzing test/sample.js ...
⚠️  Line 12: Possible unused variable
💡 Suggestion: Consider removing or using the variable
```

## 🤝 Kontribusi

Pull request dan issue selalu terbuka!
Kalau ada ide fitur baru (misalnya dukungan untuk Python, Go, atau integrasi langsung dengan GitHub Actions), silakan ajukan.

