document.addEventListener("DOMContentLoaded", function () {
  const toggleSubmenu = document.querySelector(".toggle-submenu");
  const submenu = document.getElementById("laporan-submenu");

  // Tambahkan event listener untuk toggle submenu
  toggleSubmenu.addEventListener("click", function (event) {
    event.preventDefault();
    submenu.classList.toggle("show-submenu");
  });

  // Ambil semua link submenu
  const submenuItems = submenu.querySelectorAll(".new-item");

  // Loop untuk setiap link submenu
  submenuItems.forEach(function (item) {
    // Periksa jika link tersebut memiliki kelas new-active
    if (item.classList.contains("new-active")) {
      // Buka submenu jika link memiliki kelas new-active
      submenu.classList.add("show-submenu");
    }

    // Tambahkan event listener untuk setiap link submenu
    item.addEventListener("click", function () {
      // Hapus kelas new-active dari semua link
      submenuItems.forEach(function (subitem) {
        subitem.classList.remove("new-active");
      });
      // Tambahkan kelas new-active ke link yang sedang diklik
      item.classList.add("new-active");
    });
  });
});