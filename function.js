document.addEventListener("DOMContentLoaded", function() {
    setTimeout(async function() {
        count = await getCount();
        document.getElementById("count").textContent = `${count} views`;
    }, 0);

    const sections = document.querySelectorAll("main .section");
    const navLinks = document.querySelectorAll("nav ul li a");
    const headerHeight = document.querySelector("header").offsetHeight;

    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);
    const theme = userPrefersDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);

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

async function getCount(){
    try {
        const response = await fetch("https://sm5sgazoognwotdsenjfy2i7ii0idcax.lambda-url.ap-northeast-1.on.aws/");
        const data = await response.json();
        if (data.count) {
            return data.count;
        }
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    // F12
    if (e.key === 'F12') {
        e.preventDefault();
    }
    // Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
    }
    // Ctrl+Shift+J
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
    }
    // Ctrl+U
    if (e.ctrlKey && e.key === 'U') {
        e.preventDefault();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
    }
});