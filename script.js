function toggleMenu() {
    document.querySelector(".menu").classList.toggle("active");
}

function toggleMenu() {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("active");
}

// Menutup menu ketika salah satu item diklik
document.querySelectorAll(".menu a").forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector(".menu").classList.remove("active");
    });
});

function kirim() {
    let notif = document.getElementById("notif");

    notif.style.display="flex";
}

function tutup() {
    let notif = document.getElementById("notif");

    notif.style.display="none";
}