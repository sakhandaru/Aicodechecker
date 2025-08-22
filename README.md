# 📖 README (update dengan section baru)

````markdown
# 🛠️ AI Code Audit

AI-powered CLI tool untuk mengecek kualitas code JavaScript/TypeScript kamu secara otomatis.  
Tujuannya: membantu developer menemukan potensi bug, code smell, dan memberikan saran perbaikan.

---

## 🚀 Instalasi

1. Clone repository (bebas di folder mana saja, contoh `~/Code`):

   ```bash
   cd ~/Code
   git clone https://github.com/username/aicodeaudit.git
   cd aicodeaudit
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Link agar bisa dipakai secara global:

   ```bash
   npm link
   ```

---

## 📂 Dimana Harus Clone?

Kamu bisa **clone di folder mana saja**. Contoh:

* **macOS/Linux**: `~/Code/` atau `~/Projects/`
* **Windows**: `C:\Users\<username>\Projects\`

Setelah clone + `npm link`, command `aicodeaudit` bisa dipakai dari **folder mana pun** di komputer kamu.

---

## 🧑‍💻 Cara Pakai

Audit file JavaScript/TypeScript:

```bash
aicodeaudit test/sample.js
```

Audit seluruh folder project:

```bash
aicodeaudit ./src
```

---

## ✨ Contoh Output

```
[+] Analyzing test/sample.js ...
⚠️  Line 12: Possible unused variable
💡 Suggestion: Consider removing or using the variable
```

---

## 🤝 Kontribusi

Pull request dan issue selalu terbuka!
Kalau ada ide fitur baru (misalnya dukungan untuk Python, Go, atau integrasi langsung dengan GitHub Actions), silakan ajukan.

---

## 📜 License

MIT

```

---

Apakah mau aku bikinin juga **contoh badge keren di atas README** (misalnya npm version, license, build passing) biar kelihatan profesional ala open-source project populer?
```
