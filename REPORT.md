# Laporan Proyek Akhir Pemrograman Web - Learning Hub

## 1. Penjelasan Teknis
Aplikasi **Learning Hub** dibangun menggunakan pendekatan **Native PHP** untuk Backend dan **HTML/CSS/JS** murni untuk Frontend. Sistem ini menggunakan arsitektur **RESTful API** sederhana di mana frontend berkomunikasi dengan backend melalui HTTP Request (Fetch API) dan menerima respon dalam format JSON.

### Interaksi PHP dengan Database
Koneksi ke database ditangani oleh kelas `Database` yang terletak di `config/database.php`. Kami menggunakan **PDO (PHP Data Objects)** karena:
1.  **Keamanan:** Mendukung *Prepared Statements* yang efektif mencegah serangan SQL Injection.
2.  **Fleksibilitas:** Memudahkan jika di masa depan ingin mengganti driver database.
3.  **Error Handling:** Menggunakan `try-catch` block untuk menangani kegagalan koneksi dengan graceful.

Setiap endpoint API (contoh: `api/auth/login.php`) akan:
1.  Meng-include file database.
2.  Membuat instance objek `Database` dan memanggil method `getConnection()`.
3.  Menjalankan query SQL menggunakan koneksi tersebut.
4.  Mengembalikan hasil dalam format JSON.

---

## 2. Arsitektur Sistem

Berikut adalah alur data (Data Flow) dari sisi Client hingga ke Database:

```mermaid
graph LR
    User[User Browser] -- 1. Interaction (Click/Submit) --> JS[Frontend JavaScript (Fetch API)]
    JS -- 2. HTTP Request (JSON) --> PHP[PHP API Endpoint]
    PHP -- 3. Secure Query (PDO) --> MySQL[(MySQL Database)]
    MySQL -- 4. Result Set --> PHP
    PHP -- 5. JSON Response --> JS
    JS -- 6. DOM Manipulation --> User
```

**Penjelasan Alur:**
1.  **User Action:** Pengguna mengisi form login dan menekan tombol submit.
2.  **Frontend Logic (`src/js/auth.js`):** Javascript menangkap event tersebut, memvalidasi input, dan mengirim data email/password melalui `fetch()` ke endpoint `api/auth/login.php`.
3.  **Backend Processing (`api/auth/login.php`):** Script PHP menerima input JSON, melakukan sanitasi, dan mengeksekusi query `SELECT` ke tabel `users`.
4.  **Database:** MySQL memverifikasi kredensial dan mengembalikan data user jika cocok.
5.  **Response:** PHP memverifikasi password hash. Jika valid, session dibuat dan respon JSON `{ "message": "Login successful", ... }` dikirim kembali.
6.  **UI Update:** Javascript menerima respon sukses, menyimpan status login, dan mengarahkan pengguna ke halaman Dashboard.

---

## 3. Pembagian Tugas (Job Division)

Proyek ini dikerjakan oleh 3 anggota tim dengan pembagian tugas yang merata sesuai keahlian:

### Anggota 1: Backend Engineer & Database
*   **Tanggung Jawab:** Membangun fondasi server-side dan database.
*   **Task:**
    *   Merancang skema database (ERD) dan membuat file `database.sql`.
    *   Membuat file koneksi database `config/database.php`.
    *   Mengembangkan API Authentication (`login.php`, `register.php`, `logout.php`).
    *   Mengembangkan API Courses & Progress (`read.php`, `update.php`).

### Anggota 2: Frontend Logic & Integration
*   **Tanggung Jawab:** Menghubungkan tampilan dengan data menggunakan JavaScript.
*   **Task:**
    *   Membuat modul autentikasi di `src/js/auth.js` (Fetch logic).
    *   Menangani manajemen Session di sisi client (Tampil/Sembunyi tombol Login/Logout).
    *   Membuat logika pengambilan data kursus dinamis di `src/js/script.js`.
    *   Mengimplementasikan logika tracking progress di `src/js/course.js`.

### Anggota 3: UI/UX Designer & Content Specialist
*   **Tanggung Jawab:** Menciptakan antarmuka yang responsif dan konten pembelajaran.
*   **Task:**
    *   Mendesain layout responsif menggunakan HTML & CSS (`src/css/style.css`).
    *   Membuat halaman statis kursus (`html.html`, `css.html`, dll).
    *   Menyusun konten materi pembelajaran untuk setiap modul.
    *   Memastikan UI User Experience yang baik (Navigasi, Dashboard Layout).

---

## 4. Panduan Pengguna (User Guide)

### A. Registrasi & Login
1.  Buka halaman utama, klik tombol **"Login"** di pojok kanan atas.
2.  Pilih tab **"Register"** jika belum punya akun. Masukkan Email dan Password, lalu klik **Register**.
3.  Setelah sukses, login menggunakan kredensial yang baru dibuat.

### B. Mengakses Dashboard
1.  Setelah login, menu **"My Dashboard"** akan muncul di navigasi.
2.  Klik menu tersebut untuk melihat daftar kursus yang sedang diikuti dan progress belajarnya.

### C. Mengikuti Kursus (Enroll)
1.  Di halaman utama atau Dashboard, pilih kartu kursus yang diminati (misal: "HTML Front end").
2.  Klik tombol **"Start Learning"** atau judul kursus.
3.  Sistem akan otomatis mencatat Anda sebagai peserta kursus tersebut (Enroll).

### D. Tracking Progress
1.  Saat membaca materi kursus, klik tombol **"Mark as Complete"** di bagian bawah materi.
2.  Status akan tersimpan. Jika Anda kembali ke Dashboard, progress bar untuk kursus tersebut akan bertambah.