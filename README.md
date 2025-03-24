# Proyek React + Vite + Tailwind CSS

## Deskripsi
Proyek ini merupakan aplikasi berbasis web yang menggunakan **React** untuk membangun antarmuka pengguna yang dinamis, **Vite** sebagai build tool untuk proses pengembangan yang cepat, dan **Tailwind CSS** untuk styling dengan pendekatan utility-first. Kombinasi ini memungkinkan pengembangan aplikasi yang modern, responsif, dan efisien.

---

## Teknologi yang Digunakan

1. **React**
   - Pustaka JavaScript untuk membangun UI berbasis komponen.
2. **Vite**
   - Build tool modern dengan startup cepat dan HMR (Hot Module Replacement).
3. **Tailwind CSS**
   - Framework CSS berbasis utility-first untuk styling yang fleksibel.

---

## Fitur

- UI dinamis dan responsif.
- Proses pengembangan cepat dengan hot module replacement.
- Styling langsung di elemen HTML menggunakan kelas Tailwind CSS.

---

## Instalasi

### Persyaratan
- Node.js versi terbaru
- NPM atau Yarn

### Langkah-Langkah Instalasi
1. **Clone Repository**
   ```bash
   git clone https://github.com/nafal2002/SIWISJA
   cd <nama-folder>
   ```

2. **Instal Dependensi**
   ```bash
   npm install
   ```

3. **Pasang Tailwind CSS**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```

4. **Konfigurasi Tailwind CSS**
   Tambahkan konfigurasi berikut di `tailwind.config.js`:
   ```javascript
   module.exports = {
     content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

5. **Tambahkan CSS Tailwind ke Proyek**
   Tambahkan baris berikut di `src/index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

6. **Jalankan Proyek**
   ```bash
   npm run dev
   ```

---

## Struktur Proyek
```plaintext
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── ProductCard.jsx
├── App.jsx
└── main.jsx
public/
├── index.html
tailwind.config.js
vite.config.js
```

---

## Contoh Penggunaan

### Komponen `ProductCard.jsx`
```jsx
export default function ProductCard({ title, description }) {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
```

### File `App.jsx`
```jsx
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Daftar tempat wisata jawa barat</h1>
      <ProductCard title="Produk 1" description="Deskripsi tempat wisata 1." />
      <ProductCard title="Produk 2" description="Deskripsi tempat wisata 2." />
    </div>
  );
}

export default App;
```

---

## Build untuk Produksi

1. **Build Proyek**
   ```bash
   npm run build
   ```

2. **Preview Build**
   ```bash
   npm run preview
   ```

---

## Kontribusi

1. Fork repository ini.
2. Buat branch baru untuk fitur atau perbaikan.
   ```bash
   git checkout -b feature/nama-fitur
   ```
3. Commit perubahan Anda.
   ```bash
   git commit -m "Deskripsi fitur atau perbaikan"
   ```
4. Push ke branch.
   ```bash
   git push origin feature/nama-fitur
   ```
5. Buat Pull Request.

---

## Lisensi
Proyek ini dilisensikan di bawah [MIT License](LICENSE).

---

## Kontak
Jika Anda memiliki pertanyaan, silakan hubungi saya melalui email di [nafalmf@gmail.com].


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
