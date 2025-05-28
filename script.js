function toggleMenu() {
    let kotak = document.getElementById("menu");

    document.querySelector(".menu").classList.toggle("active");
}

function toggleMenu() {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("active");
}

setTimeout(() => {
    menu.classList.add("muncul");
  }, 10);

// Menutup menu ketika salah satu item diklik
document.querySelectorAll(".menu a").forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector(".menu").classList.remove("active");
    });
});

function kirim() {
    const bg = document.getElementById("notif");
    const box = bg.querySelector(".notif");

    // Reset jika sebelumnya sudah ditampilkan
    box.classList.remove("show");
    bg.classList.remove("show");

    // Tampilkan ulang
    bg.style.display = "flex";
    bg.classList.add("show");

    setTimeout(() => {
        box.classList.add("show");
    }, 10);

    setTimeout(() => {
        bg.function (tutup())
    },5000)

    let detik = document.getElementById("detik");

    setTimeout(() => {
        detik.innerHTML="4";
    },1000)
    setTimeout(() => {
        detik.innerHTML="3";
    },2000)
    setTimeout(() => {
        detik.innerHTML="2";
    },3000)
    setTimeout(() => {
        detik.innerHTML="1";
    },4000)
    setTimeout(() => {
        detik.innerHTML="5";
    },4999)
}


function tutup() {
    const bg = document.getElementById("notif");
    const box = bg.querySelector(".notif");

    // 1. Tutup animasi scale box
    box.classList.remove("show");

    // 2. Tutup animasi fade latar
    bg.classList.remove("show");

    // 3. Setelah transisi selesai, reset semua
    setTimeout(() => {
        bg.style.display = "none";
    }, 300); // durasi sama dengan transition di CSS
}


