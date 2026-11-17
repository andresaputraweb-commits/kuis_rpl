// ===================== SOAL KUIS =====================
const bankSoal = {
    "RPL 1": [
        { soal: "Apa kepanjangan dari RPL?", opsi: ["Rencana Perangkat Lunak", "Rekayasa Perangkat Lunak", "Rancangan Program Lanjutan", "Rekayasa Program Logika"], kunci: 1 },
        { soal: "Berikut ini adalah bahasa pemrograman adalah...", opsi: ["HTML", "CSS", "Python", "JSON"], kunci: 2 },
        { soal: "Alat yang digunakan untuk menulis kode program disebut...", opsi: ["Pengolah kata", "Editor Kode", "Browser", "Database"], kunci: 1 },
        { soal: "Simbol apa yang digunakan untuk komentar dalam JavaScript?", opsi: ["// ini komentar", "/* ini komentar */", "# ini komentar", "A dan B benar"], kunci: 3 },
        { soal: "HTML adalah singkatan dari...", opsi: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink Text Management Language", "Home Tool Markup Language"], kunci: 0 },
        { soal: "Fungsi dari CSS adalah...", opsi: ["Membuat logika program", "Mengatur tampilan dan gaya halaman", "Mengelola database", "Mengirim data ke server"], kunci: 1 },
        { soal: "Manakah yang termasuk tipe data dalam pemrograman?", opsi: ["String", "Paragraf", "Judul", "Gambar"], kunci: 0 },
        { soal: "Perintah untuk menampilkan pesan di konsol JavaScript adalah...", opsi: ["print()", "echo()", "console.log()", "display()"], kunci: 2 },
        { soal: "Sebuah variabel dalam pemrograman digunakan untuk...", opsi: ["Menyimpan nilai/data", "Mempercantik tampilan", "Menghapus data", "Membuat fungsi"], kunci: 0 },
        { soal: "Urutan tahapan pembuatan perangkat lunak yang benar adalah...", opsi: ["Perancangan → Analisis → Implementasi → Pemeliharaan", "Analisis → Perancangan → Implementasi → Pemeliharaan", "Implementasi → Analisis → Perancangan → Pemeliharaan", "Analisis → Implementasi → Perancangan → Pemeliharaan"], kunci: 1 }
    ],
    "RPL 2": [
        { soal: "Apa fungsi utama dari algoritma?", opsi: ["Sebagai bahasa pemrograman", "Langkah-langkah sistematis untuk menyelesaikan masalah", "Mempercepat komputer", "Membuat komputer cerdas"], kunci: 1 },
        { soal: "Struktur percabangan dalam pemrograman digunakan untuk...", opsi: ["Mengulang perintah", "Memilih kondisi yang berbeda", "Menyimpan data", "Membuat fungsi"], kunci: 1 },
        { soal: "Loop/Perulangan digunakan untuk...", opsi: ["Menjalankan perintah berulang-ulang", "Menghentikan program", "Memilih keputusan", "Menyimpan variabel"], kunci: 0 },
        { soal: "Dalam hubungan data basis, 1 ke Banyak artinya...", opsi: ["Satu data berhubungan dengan banyak data", "Banyak data menjadi satu", "Semua data terpisah", "Tidak ada hubungan"], kunci: 0 },
        { soal: "MySQL adalah contoh perangkat lunak...", opsi: ["Sistem Operasi", "Bahasa Pemrograman", "Sistem Manajemen Basis Data", "Editor Teks"], kunci: 2 },
        { soal: "Fungsi dari SELECT dalam SQL adalah...", opsi: ["Menghapus data", "Mengambil/membaca data", "Mengubah data", "Menambahkan data"], kunci: 1 },
        { soal: "Array adalah...", opsi: ["Satu nilai tunggal", "Kumpulan nilai dengan tipe yang sama", "Jenis variabel tunggal", "Perulangan"], kunci: 1 },
        { soal: "Fungsi yang tidak mengembalikan nilai disebut...", opsi: ["Prosedur", "Fungsi bernilai balik", "Variabel", "Konstanta"], kunci: 0 },
        { soal: "Apa itu debugging?", opsi: ["Menulis kode program", "Mencari dan memperbaiki kesalahan dalam program", "Mengompilasi program", "Menjalankan program"], kunci: 1 },
        { soal: "Manakah yang termasuk siklus hidup pengembangan perangkat lunak?", opsi: ["Air Terjun", "Air Mancur", "Sungai", "Danau"], kunci: 0 }
    ],
    "RPL 3": [
        { soal: "API adalah singkatan dari...", opsi: ["Application Programming Interface", "Advanced Program Instruction", "Application Process Integration", "Automated Program Interface"], kunci: 0 },
        { soal: "Metode pengembangan perangkat lunak yang bertahap dan berulang disebut...", opsi: ["Air Terjun", "Prototipe", "Incremental", "Spiral"], kunci: 2 },
        { soal: "Manakah yang merupakan prinsip pemrograman berorientasi objek?", opsi: ["Enkapsulasi, Pewarisan, Polimorfisme", "Percabangan, Perulangan, Fungsi", "Analisis, Desain, Implementasi", "Variabel, Tipe Data, Konstanta"], kunci: 0 },
        { soal: "Dalam siklus SDLC, tahap pengujian dilakukan untuk...", opsi: ["Menganalisis kebutuhan", "Menemukan kesalahan/kekurangan sistem", "Merancang sistem", "Mendokumentasikan sistem"], kunci: 1 },
        { soal: "Git adalah alat yang digunakan untuk...", opsi: ["Menulis kode program", "Manajemen Versi Kode Sumber", "Mengelola Database", "Menyimpan file"], kunci: 1 },
        { soal: "REST API biasanya berkomunikasi menggunakan format data...", opsi: ["HTML", "JSON", "CSS", "Teks Biasa"], kunci: 1 },
        { soal: "Keamanan sistem yang melindungi dari akses tidak sah disebut...", opsi: ["Firewall", "Compiler", "Interpreter", "Debugger"], kunci: 0 },
        { soal: "Uji coba sistem oleh pengguna akhir disebut...", opsi: ["Unit Testing", "Integration Testing", "User Acceptance Testing", "System Testing"], kunci: 2 },
        { soal: "Dokumen yang berisi penjelasan tentang sistem bagi pengguna disebut...", opsi: ["Buku Panduan Pengguna", "Analisis Sistem", "Desain Sistem", "Kode Program"], kunci: 0 },
        { soal: "Tujuan utama pemeliharaan perangkat lunak adalah...", opsi: ["Membuat sistem baru", "Memperbaiki kesalahan dan menyesuaikan sistem", "Menghapus sistem lama", "Mendesain ulang sistem"], kunci: 1 }
    ]
};

// Variabel Global
let namaSiswa = "";
let kelasSiswa = "";
let soalTerpilih = [];
let tanggalKuis = "";

// ===================== FUNGSI UTAMA =====================

// Mulai Kuis
function mulaiKuis() {
    namaSiswa = document.getElementById("nama").value.trim();
    kelasSiswa = document.getElementById("kelas").value;

    // Validasi Input
    if (!namaSiswa) {
        alert("⚠️ Silakan masukkan Nama Lengkap kamu terlebih dahulu!");
        return;
    }
    if (!kelasSiswa) {
        alert("⚠️ Silakan pilih Kelas kamu terlebih dahulu!");
        return;
    }

    // Tanggal & Waktu
    const sekarang = new Date();
    const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"][sekarang.getDay()];
    const tgl = sekarang.toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" });
    tanggalKuis = `${hari}, ${tgl}`;

    // Tampilkan Info
    document.getElementById("info-kelas").textContent = kelasSiswa;
    document.getElementById("info-waktu").textContent = `📅 ${tanggalKuis}`;

    // Ambil Soal
    soalTerpilih = bankSoal[kelasSiswa.split(" — ")[1]];
    if (!soalTerpilih) soalTerpilih = bankSoal[kelasSiswa];

    tampilkanSoal();

    // Ganti Tampilan
    document.getElementById("section-pilih").classList.add("hidden");
    document.getElementById("section-kuis").classList.remove("hidden");
}

// Tampilkan Soal
function tampilkanSoal() {
    const form = document.getElementById("formKuis");
    form.innerHTML = "";

    soalTerpilih.forEach((item, indeks) => {
        const blokSoal = document.createElement("div");
        blokSoal.className = "question-block";
        blokSoal.innerHTML = `
            <h4>${indeks + 1}. ${item.soal}</h4>
            ${item.opsi.map((opsi, i) => `
                <label class="option-label">
                    <input type="radio" name="jwb${indeks}" value="${i}" required>
                    ${String.fromCharCode(65 + i)}. ${opsi}
                </label>
            `).join("")}
        `;
        form.appendChild(blokSoal);
    });
}

// Kirim Jawaban & Hitung Nilai
function kirimKuis() {
    let benar = 0;
    const totalSoal = soalTerpilih.length;

    for (let i = 0; i < totalSoal; i++) {
        const pilih = document.querySelector(`input[name="jwb${i}"]:checked`);
        if (!pilih) {
            alert(`⚠️ Soal nomor ${i + 1} belum dijawab!`);
            return;
        }
        if (parseInt(pilih.value) === soalTerpilih[i].kunci) {
            benar++;
        }
    }

    const nilai = Math.round((benar / totalSoal) * 100);
    simpanHasil(nilai, benar, totalSoal);
    tampilkanHasil(nilai, benar, totalSoal);
}

// Simpan ke LocalStorage
function simpanHasil(nilai, benar, total) {
    const hasil = {
        nama: namaSiswa,
        kelas: kelasSiswa,
        tanggal: tanggalKuis,
        tahun: new Date().getFullYear(),
        nilai: nilai,
        benar: benar,
        totalSoal: total
    };

    let riwayat = JSON.parse(localStorage.getItem("hasilKuisRPL") || "[]");
    riwayat.unshift(hasil);
    localStorage.setItem("hasilKuisRPL", JSON.stringify(riwayat));
}

// Tampilkan Hasil
function tampilkanHasil(nilai, benar, total) {
    document.getElementById("hasil-nama").textContent = namaSiswa;
    document.getElementById("hasil-kelas").textContent = kelasSiswa;
    document.getElementById("hasil-tanggal").textContent = tanggalKuis;
    document.getElementById("hasil-nilai").textContent = nilai;

    let keterangan = "";
    if (nilai >= 85) keterangan = `🎉 Sangat Bagus! Jawaban Benar: ${benar}/${total}`;
    else if (nilai >= 70) keterangan = `👍 Bagus! Jawaban Benar: ${benar}/${total}`;
    else if (nilai >= 55) keterangan = `😊 Cukup. Jawaban Benar: ${benar}/${total}. Semangat belajar lagi ya!`;
    else keterangan = `💪 Semangat! Jawaban Benar: ${benar}/${total}. Pelajari lagi materi ya!`;

    document.getElementById("hasil-keterangan").textContent = keterangan;

    document.getElementById("section-kuis").classList.add("hidden");
    document.getElementById("section-hasil").classList.remove("hidden");
}

// Ulangi Kuis
function ulangiKuis() {
    document.getElementById("nama").value = "";
    document.getElementById("kelas").value = "";
    document.getElementById("section-hasil").classList.add("hidden");
    document.getElementById("section-pilih").classList.remove("hidden");
}

// ===================== FUNGSI UNTUK Form.html =====================

// Muat Data Saat Halaman Admin Dibuka
if (document.getElementById("isiTabel")) {
    muatDataTabel();
}

function muatDataTabel() {
    const isiTabel = document.getElementById("isiTabel");
    const riwayat = JSON.parse(localStorage.getItem("hasilKuisRPL") || "[]");

    if (riwayat.length === 0) {
        isiTabel.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:20px; color:#888;">📭 Belum ada data hasil kuis.</td></tr>`;
        return;
    }

    isiTabel.innerHTML = riwayat.map((data, indeks) => `
        <tr>
            <td>${indeks + 1}</td>
            <td>${data.nama}</td>
            <td>${data.kelas}</td>
            <td>${data.tanggal}</td>
            <td>${data.tahun}</td>
            <td><strong>${data.nilai}</strong></td>
            <td><button class="btn btn-danger btn-small" onclick="hapusSatuData(${indeks})">Hapus</button></td>
        </tr>
    `).join("");
}

// Hapus Satu Data
function hapusSatuData(indeks) {
    if (confirm("Yakin ingin menghapus data ini?")) {
        let riwayat = JSON.parse(localStorage.getItem("hasilKuisRPL") || "[]");
        riwayat.splice(indeks, 1);
        localStorage.setItem("hasilKuisRPL", JSON.stringify(riwayat));
        muatDataTabel();
    }
}

// Hapus Semua Data
function hapusSemuaData() {
    if (confirm("⚠️ Yakin ingin MENGHAPUS SEMUA data? Tindakan ini tidak bisa dibatalkan!")) {
        localStorage.removeItem("hasilKuisRPL");
        muatDataTabel();
    }
}
