# Deployment Guide - Learning Hub

Panduan ini menjelaskan langkah-langkah men-deploy aplikasi **Learning Hub** (Native PHP) ke layanan Shared Hosting standar (berbasis cPanel).

## Prasyarat
1.  Akun Hosting dengan dukungan PHP 7.4+ dan MySQL.
2.  Akses ke cPanel dan File Manager / FTP.
3.  File source code proyek (`fp_pweb` folder).

---

## Langkah 1: Persiapan Database

1.  **Buat Database Baru:**
    *   Masuk ke cPanel -> **MySQL Database Wizard**.
    *   Buat database baru, misalnya: `u12345_learninghub`.
    *   Buat user database baru, misalnya: `u12345_learninghub_admin`.
    *   Berikan user tersebut akses penuh (**All Privileges**) ke database yang baru dibuat.
    *   **PENTING:** Catat Nama Database, Username, dan Password.

2.  **Import Struktur Database:**
    *   Buka **phpMyAdmin** di cPanel.
    *   Pilih database `u12345_learninghub` di sidebar kiri.
    *   Klik tab **Import**.
    *   Upload file `database.sql` dari root folder proyek ini.
    *   Klik **Go** untuk menjalankan query. Pastikan semua tabel (`users`, `courses`, `enrollments`, `progress`) berhasil dibuat.

---

## Langkah 2: Konfigurasi Koneksi PHP

Sebelum mengupload file, kita perlu menyesuaikan kredensial database agar sesuai dengan server hosting.

1.  Buka file `config/database.php` di text editor.
2.  Ubah variabel konfigurasi sesuai data dari Langkah 1:

```php
class Database {
    // Ubah sesuai hosting
    private $host = "localhost"; // Biasanya tetap localhost
    private $db_name = "u12345_learninghub"; // Nama DB Hosting
    private $username = "u12345_learninghub_admin"; // User DB Hosting
    private $password = "PasswordSangatKuat123!"; // Password DB Hosting
    public $conn;
    
    // ... sisa kode tetap sama
}
```

---

## Langkah 3: Upload File (File Structure)

Struktur file di server harus mencerminkan struktur lokal agar path import PHP (`include_once`) tetap berjalan.

1.  **Buka File Manager** di cPanel.
2.  Masuk ke folder `public_html`.
3.  (Opsional) Jika ingin diakses via `domain.com/learninghub`, buat folder `learninghub` di dalam `public_html`.
4.  **Upload** semua file dan folder proyek **kecuali** `REPORT.md`, `VIDEO_SCRIPT.md`, `DEPLOYMENT.md`, `DESIGN_DOC.md`, dan `.git`.

**Struktur Akhir di Server:**
```text
public_html/
└── learninghub/
    ├── api/
    ├── assets/
    ├── config/
    ├── src/
    ├── database.sql (Backup)
    └── README.md
```

---

## Langkah 4: Penyesuaian Path (Jika Diperlukan)

Karena aplikasi ini menggunakan path relatif (contoh: `../../config/database.php`), seharusnya tidak ada masalah path. Namun, perhatikan hal berikut:

1.  **File Permissions:** Pastikan folder memiliki permission `755` dan file `644`.
2.  **Redirect ke Halaman Utama:**
    *   Secara default, pengunjung harus mengetik `domain.com/learninghub/src/html/index.html`.
    *   Untuk mempermudah, buat file `index.php` di root folder (`public_html/learninghub/`) dengan isi:
    ```php
    <?php
    header("Location: src/html/index.html");
    exit();
    ?>
    ```

---

## Langkah 5: Pengujian (Testing)

1.  Buka browser dan akses URL aplikasi Anda (misal: `http://namadomain.com/learninghub`).
2.  Aplikasi akan me-redirect ke halaman utama.
3.  Coba fitur **Login**: Jika gagal, cek kembali konfigurasi `config/database.php`.
4.  Coba **Enroll Course**: Pastikan data masuk ke tabel `enrollments` di phpMyAdmin hosting.

**Troubleshooting:**
*   **Error 500:** Biasanya kesalahan syntax PHP atau `.htaccess` yang salah. Cek "Error Log" di cPanel.
*   **Database Connection Error:** Pastikan password dan username database benar-benar sesuai.
*   **CORS Error:** Jika API dan Frontend berada di domain berbeda (jarang terjadi di hosting yang sama), tambahkan header CORS di file PHP.

---
**Deployment Selesai!** Aplikasi Anda kini dapat diakses secara global.