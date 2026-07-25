const NOMOR_KAMIL = '6283186723104';
const NOMOR_SALMA = '6285954571414';
const NOMOR_UMUM = '6283186723104';

function bukaMenuUtama(){
    document.getElementById('halamanAwal').classList.add('sembunyi');
    document.getElementById('halamanMenu').classList.remove('sembunyi');
}
function kembaliKeAwal(){
    document.getElementById('halamanMenu').classList.add('sembunyi');
    document.getElementById('halamanAwal').classList.remove('sembunyi');
}
function kembaliKeMenu(){
    document.getElementById('halamanSosmed').classList.add('sembunyi');
    document.getElementById('halamanGaleri').classList.add('sembunyi');
    document.getElementById('halamanDaftarOsis').classList.add('sembunyi');
    document.getElementById('halamanRegistrasi').classList.add('sembunyi');
    document.getElementById('halamanLapor').classList.add('sembunyi');
    document.getElementById('halamanMenu').classList.remove('sembunyi');
}

function tampilkanSosmed(){document.getElementById('halamanMenu').classList.add('sembunyi'); document.getElementById('halamanSosmed').classList.remove('sembunyi');}
function tampilkanGaleri(){document.getElementById('halamanMenu').classList.add('sembunyi'); document.getElementById('halamanGaleri').classList.remove('sembunyi');}
function tampilkanDaftarOsis(){document.getElementById('halamanMenu').classList.add('sembunyi'); document.getElementById('halamanDaftarOsis').classList.remove('sembunyi');}
function tampilkanRegistrasi(){document.getElementById('halamanMenu').classList.add('sembunyi'); document.getElementById('halamanRegistrasi').classList.remove('sembunyi');}
function tampilkanLapor(){document.getElementById('halamanMenu').classList.add('sembunyi'); document.getElementById('halamanLapor').classList.remove('sembunyi');}

function kirimDaftarOsis(){
    const nama = document.getElementById('namaCalon').value.trim();
    const kelas = document.getElementById('kelasCalon').value.trim();
    const pilihTujuan = document.querySelector('input[name="tujuan"]:checked').value;

    if(!nama || !kelas){
        document.getElementById('notifOsis').innerText = 'Lengkapi Nama dan Kelas dulu ya!';
        document.getElementById('notifOsis').style.color = 'yellow';
        return;
    }

    const nomorTujuan = pilihTujuan === 'kamil' ? NOMOR_KAMIL : NOMOR_SALMA;
    const namaTujuan = pilihTujuan === 'kamil' ? 'Kak KAMIL' : 'Kak SALMA';

    const teks = `📥 FORMULIR PENDAFTARAN OSIS SKANSABA

👤 Nama Lengkap: ${nama}
🏫 Asal Kelas: ${kelas}

✅ Dikirimkan kepada: ${namaTujuan}`;

    const link = `https://wa.me/${nomorTujuan}?text=${encodeURIComponent(teks)}`;
    window.open(link, '_blank');

    document.getElementById('notifOsis').innerText = `✅ Membuka WA ${namaTujuan}...`;
    document.getElementById('notifOsis').style.color = 'white';
    document.getElementById('namaCalon').value='';
    document.getElementById('kelasCalon').value='';
    setTimeout(()=>document.getElementById('notifOsis').innerText='',3500);
}

function kirimRegistrasi(){
    const nama = document.getElementById('namaPeserta').value.trim();
    const lomba = document.getElementById('namaLomba').value.trim();
    const kelas = document.getElementById('kelasPeserta').value.trim();

    if(!nama || !lomba || !kelas){
        document.getElementById('notifReg').innerText = 'Lengkapi semua isian dulu!';
        document.getElementById('notifReg').style.color = 'yellow';
        return;
    }

    const teks = `🏆 PENDAFTARAN LOMBA

👤 Nama: ${nama}
🎯 Lomba: ${lomba}
🏫 Kelas: ${kelas}`;

    const link = `https://wa.me/${NOMOR_UMUM}?text=${encodeURIComponent(teks)}`;
    window.open(link, '_blank');

    document.getElementById('notifReg').innerText = '✅ Membuka WhatsApp...';
    document.getElementById('notifReg').style.color = 'green';
    document.getElementById('namaPeserta').value='';
    document.getElementById('namaLomba').value='';
    document.getElementById('kelasPeserta').value='';
    setTimeout(()=>document.getElementById('notifReg').innerText='',3500);
}

function kirimLapor(){
    const nama = document.getElementById('namaPelapor').value.trim();
    const kelas = document.getElementById('kelasPelapor').value.trim();
    const isi = document.getElementById('isiLaporan').value.trim();

    if(!nama || !kelas || !isi){
        document.getElementById('notifLapor').innerText = 'Lengkapi semua isian dulu!';
        document.getElementById('notifLapor').style.color = 'yellow';
        return;
    }

    const teks = `💬 SARAN / LAPORAN OSIS

👤 Nama: ${nama}
🏫 Kelas: ${kelas}

📝 Isi Pesan:
${isi}`;

    const link = `https://wa.me/${NOMOR_UMUM}?text=${encodeURIComponent(teks)}`;
    window.open(link, '_blank');

    document.getElementById('notifLapor').innerText = '✅ Membuka WhatsApp...';
    document.getElementById('notifLapor').style.color = 'green';
    document.getElementById('namaPelapor').value='';
    document.getElementById('kelasPelapor').value='';
    document.getElementById('isiLaporan').value='';
    setTimeout(()=>document.getElementById('notifLapor').innerText='',3500);
}
