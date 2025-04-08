const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", function() {
    if (sidebar.style.width === "250px") {
        // Close the sidebar
        sidebar.style.width = "0";
        menuBtn.classList.remove("open");
    } else {
        // Open the sidebar
        sidebar.style.width = "250px";
        menuBtn.classList.add("open");
    }
});
