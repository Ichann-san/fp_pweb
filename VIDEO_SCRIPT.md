# Script Video Demo - IchanHub

**Durasi Estimasi:** 3-5 Menit

---

## 1. Opening (0:00 - 0:30)
**Visual:** Tampilan Halaman Utama IchanHub (Home Page).
**Audio (Speaker):**
"Halo semuanya, selamat datang di video demo proyek akhir Pemrograman Web kami. Kami dari kelompok [Nama Kelompok] akan mempresentasikan aplikasi **IchanHub**, sebuah platform pembelajaran web programming interaktif."

"Sebelum masuk ke demo, perkenalkan anggota tim kami:
1. [Nama Anggota 1] sebagai Backend Developer yang menangani database dan API.
2. [Nama Anggota 2] sebagai Frontend Developer yang mengintegrasikan logika JavaScript.
3. [Nama Anggota 3] sebagai UI/UX Designer yang membuat tampilan antarmuka responsif."

---

## 2. End-to-End Demo (0:30 - 2:00)
**Scenario:** User baru mendaftar, mengambil kursus, dan menyelesaikan materi.

**Step 1: Registrasi & Login**
*   **Action:** Klik tombol Login -> Pilih Tab Register.
*   **Input:** Masukkan email `demo@ichanhub.com` dan password. Klik Register.
*   **Action:** Masukkan data yang sama di form Login. Klik Login.
*   **Narasi:** "Pertama, pengguna baru dapat mendaftar akun. Sistem validasi akan memastikan email valid. Setelah registrasi berhasil, kita login untuk masuk ke sistem. Perhatikan menu 'My Dashboard' yang muncul setelah login berhasil."

**Step 2: Enroll Kursus**
*   **Action:** Scroll ke bagian "Available Courses". Pilih "HTML Front end".
*   **Action:** Klik kartu kursus tersebut.
*   **Narasi:** "Di halaman utama, tersedia berbagai pilihan kursus. Saat kita memilih salah satu kursus, sistem akan otomatis mendaftarkan (enroll) user ke kursus tersebut."

**Step 3: Tracking Progress**
*   **Action:** Di halaman detail kursus, baca sekilas materi.
*   **Action:** Klik tombol "Mark Chapter as Complete" di bagian bawah.
*   **Visual:** Alert sukses muncul atau tombol berubah status.
*   **Narasi:** "Pengguna dapat membaca materi dan menandai progress mereka. Data ini disimpan real-time ke database."

**Step 4: Dashboard Check**
*   **Action:** Klik menu "My Dashboard".
*   **Visual:** Tunjukkan progress bar kursus HTML yang sudah terisi sebagian.
*   **Narasi:** "Kita bisa memantau kemajuan belajar di halaman Dashboard. Di sini terlihat kursus HTML progress-nya sudah bertambah."

**Step 5: Logout**
*   **Action:** Klik nama user di pojok kanan atas -> Logout.
*   **Narasi:** "Terakhir, fitur logout untuk mengakhiri sesi pengguna dengan aman."

---

## 3. Code Walkthrough (2:00 - 3:30)
**Visual:** Buka VS Code / Text Editor.

**Part A: Backend (Database & API)**
*   **File:** `config/database.php`
*   **Narasi:** "Untuk backend, kami menggunakan Native PHP. Ini adalah file koneksi database menggunakan PDO untuk keamanan."
*   **File:** `api/auth/login.php`
*   **Narasi:** "Contoh endpoint login ini menerima input JSON, memverifikasi hash password, dan memulai session PHP."

**Part B: Frontend (Integration)**
*   **File:** `src/js/auth.js`
*   **Narasi:** "Di sisi client, kami menggunakan Fetch API. File `auth.js` ini menangani pengiriman data ke backend secara asynchronous tanpa reload halaman."

---

## 4. Deployment Proof (3:30 - 4:00)
**Visual:** Browser address bar menunjukkan URL domain hosting (bukan localhost).
**Action:** Refresh halaman untuk membuktikan live site.
**Narasi:** "Aplikasi ini sudah kami deploy di hosting [Sebutkan Hosting, misal: 000webhost/Niagahoster]. Semua fitur berjalan lancar di lingkungan produksi."

**Closing:**
"Sekian demo dari kelompok kami. Terima kasih."