# Panduan Instalasi dan Deployment (Fedora Linux)

Berikut adalah langkah-langkah untuk menjalankan project ini di sistem operasi **Fedora Linux**.

## 1. Prasyarat (Prerequisites)

Pastikan sistem Anda sudah terupdate dan paket-paket yang diperlukan sudah terinstall.

Update sistem paket repository:
```bash
sudo dnf update
```

Install PHP beserta ekstensi yang dibutuhkan:
```bash
sudo dnf install php php-cli php-mysqlnd php-mbstring php-xml
```

Install MariaDB (Database server alternatif MySQL di Fedora):
```bash
sudo dnf install mariadb-server
```

## 2. Persiapan Database

Nyalakan service MariaDB dan atur agar berjalan otomatis saat boot:
```bash
sudo systemctl start mariadb
sudo systemctl enable mariadb
```

Masuk ke console MariaDB sebagai root:
```bash
sudo mysql -u root
```

Jalankan perintah SQL berikut di dalam console MariaDB untuk membuat database dan user:
```sql
CREATE DATABASE ichanhub_local;
CREATE USER 'ichan_user'@'localhost' IDENTIFIED BY 'password123';
GRANT ALL PRIVILEGES ON ichanhub_local.* TO 'ichan_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

Import struktur dan data awal dari file `database.sql` ke dalam database yang baru dibuat:
```bash
mysql -u root ichanhub_local < database.sql
```

## 3. Konfigurasi Aplikasi

Pastikan konfigurasi koneksi database di aplikasi sesuai dengan kredensial yang dibuat.
Edit file `config/database.php` dan pastikan isinya cocok:

```php
$host = "localhost";
$db_name = "ichanhub_local";
$username = "ichan_user";
$password = "password123";
```

## 4. Menjalankan Aplikasi

Jalankan PHP built-in server dari root direktori project:

```bash
php -S localhost:8000
```

## 5. Akses Aplikasi

Buka browser favorit Anda dan akses URL berikut:
http://localhost:8000/src/html/index.html

**Kredensial Login (Demo):**
*   **Email:** `student@ichanhub.com`
*   **Password:** `password123`