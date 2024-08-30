document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("main .section");
    const navLinks = document.querySelectorAll("nav ul li a");
    const headerHeight = document.querySelector("header").offsetHeight;

    window.addEventListener("scroll", function() {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionBottom = sectionTop + sectionHeight;

            if (window.pageYOffset >= sectionTop - 50 && window.pageYOffset < sectionBottom) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });

        // ヘッダー付近にいる場合はすべてのリンクのactiveクラスを削除
        if (window.pageYOffset < headerHeight) {
            navLinks.forEach(link => link.classList.remove("active"));
        }
    });
});
