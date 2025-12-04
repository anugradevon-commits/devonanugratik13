// Data dummy cuaca per kota
const cuacaKota = {
    "Bogor": {
        kota: "Bogor",
        suhu: 27,
        cuaca: "Berawan",
        ikon: "https://openweathermap.org/img/wn/03d@2x.png"
    },
    "Jakarta": {
        kota: "Jakarta",
        suhu: 32,
        cuaca: "Cerah",
        ikon: "https://openweathermap.org/img/wn/01d@2x.png"
    },
    "Bandung": {
        kota: "Bandung",
        suhu: 25,
        cuaca: "Hujan Ringan",
        ikon: "https://openweathermap.org/img/wn/10d@2x.png"
    },
    "Riau": {
        kota: "Riau",
        suhu: 200,
        cuaca: "Hujan badai angin ribut",
        ikon: "https://openweathermap.org/img/wn/10d@2x.png"
    },
    "Kuansing": {
        kota: "Kuansing",
        suhu: 200,
        cuaca: "Hujan uang",
        ikon: "https://openweathermap.org/img/wn/10d@2x.png"
    }

};

// Fungsi untuk menampilkan data
function tampilkanCuaca(data) {
    const card = document.querySelector(".cuaca-card");
    card.classList.remove("show");

    // Delay agar efek fade out terlihat
    setTimeout(() => {
        document.getElementById("kota").innerText = data.kota;
        document.getElementById("deskripsi").innerText = `Cuaca: ${data.cuaca}`;
        document.getElementById("suhu").innerText = `Suhu: ${data.suhu}°C`;
        document.getElementById("icon-cuaca").src = data.ikon;
        card.classList.add("show");
    }, 300);
}

// Event listener saat kota dipilih
document.getElementById("kotaSelect").addEventListener("change", (e) => {
    const kotaDipilih = e.target.value;
    tampilkanCuaca(cuacaKota[kotaDipilih]);
});

// Inisialisasi awal
window.onload = () => {
    document.getElementById("kotaSelect").value = "Bogor";
    tampilkanCuaca(cuacaKota["Bogor"]);
};
