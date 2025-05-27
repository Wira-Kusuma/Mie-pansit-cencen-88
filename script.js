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
    let notif = document.getElementById("notif");

    // Hapus animasi sebelumnya jika ada
    notif.classList.remove("flex-show");
    void notif.offsetWidth; // reflow agar animasi bisa diulang

    notif.classList.add("flex-show");
}


function tutup() {
    let notif = document.getElementById("notif");

    notif.style.display="none";
}