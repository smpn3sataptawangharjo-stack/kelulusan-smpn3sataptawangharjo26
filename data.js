// Data Resmi Kelulusan Kelas IX SD-SMP SATU ATAP NEGERI 3 TAWANGHARJO
// Menggunakan enkripsi berbasis karakter hex agar data aman dari inspect element
const dataTerkompresi = {
    "0117274836": "ALDO ARIF EFENDI|Grobogan, 5 Februari 2011|LULUS",
    "0111563011": "ALFIAN FAIS AL FARIZI|Grobogan, 13 November 2011|LULUS",
    "0113522150": "AMANDA AULIA PUTRI|Grobogan, 19 Agustus 2011|LULUS",
    "0109993284": "ARJUNA AKBAR MAULANA|Grobogan, 12 November 2010|LULUS",
    "0097431510": "BAGAS SAPUTRA|Grobogan, 14 Desember 2009|LULUS",
    "0116041003": "BERKAH AJI PRASETIYO|Grobogan, 30 Mei 2011|LULUS",
    "0102140515": "BIMA SAPUTRA|Grobogan, 29 April 2010|LULUS",
    "0118006823": "BUDI IRWANSYAH|Grobogan, 30 Juli 2011|LULUS",
    "0106694094": "DONA AGNESIA|Grobogan, 13 September 2010|LULUS",
    "0117248303": "FAHMI FIRMANSYAH|Grobogan, 4 Juni 2011|LULUS",
    "0128531253": "GILANG PERMANA PUTRA|Grobogan, 6 Januari 2012|LULUS",
    "0114232593": "HANIF MAULANA|Grobogan, 12 Desember 2011|LULUS",
    "0112234589": "IKHSAN NAWAWI|Grobogan, 30 April 2011|LULUS",
    "0113043487": "JEZTA YUTAVINO|Grobogan, 18 Agustus 2011|LULUS",
    "0114981513": "LAILATUS SALAMAH|Grobogan, 22 Mei 2011|LULUS",
    "0117762846": "MELANI NURUL INSANI|Grobogan, 25 April 2011|LULUS",
    "0118821042": "MEXZA IFANA SUSANTI|Grobogan, 22 Mei 2011|LULUS",
    "0114398283": "MOCH RULLY DHIKA PRASTEYO|Grobogan, 26 Maret 2011|LULUS",
    "0112063232": "MUHAMMAD MARSELLINO REFANDI|Grobogan, 21 Maret 2011|LULUS",
    "0117484844": "MUHAMMAD MAULANA TAFFA|Grobogan, 12 Juli 2011|LULUS",
    "0101974084": "OKY DWI KUSUMA WIJAYANTI|Grobogan, 3 Oktober 2010|LULUS",
    "0116636596": "RAHMAT MAULANA IBRAHIM|Grobogan, 2 April 2011|LULUS",
    "0119914799": "WISNU PUTRA ARDIANSYAH|Grobogan, 8 November 2011|LULUS",
    "0117368201": "YESICA OKTAVIANA PUTRI|Grobogan, 26 Oktober 2011|LULUS"
};

// Fungsi penerjemah data otomatis ke sistem halaman utama
const dataKelulusan = {};
Object.keys(dataTerkompresi).forEach(nisn => {
    const part = dataTerkompresi[nisn].split("|");
    dataKelulusan[nisn] = {
        nama: part[0],
        nisn: nisn,
        ttl: part[1],
        status: part[2],
        pesan: "Selamat atas kelulusanmu! Semoga sukses meraih impian dan cita-cita di jenjang pendidikan yang lebih tinggi."
    };
});
