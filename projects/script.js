$(document).ready(function () {

    // Menu toggle
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Scroll & load
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            $('#scroll-top').addClass('active');
        } else {
            $('#scroll-top').removeClass('active');
        }
    });
});

// Page visibility change
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Projects | Portfolio Tanmoy Sable";
        $("#favicon").attr("href", "/assets/images/favicon.png");
    } else {
        document.title = "Come Back To Portfolio";
        $("#favicon").attr("href", "/assets/images/favhand.png");
    }
});


// ===== FETCH PROJECTS =====
async function getProjects() {
    const response = await fetch("projects.json");
    return await response.json();
}

function showProjects(projects) {
    const projectsContainer = document.querySelector(".work .box-container");
    let projectsHTML = "";

    projects.forEach(project => {
        projectsHTML += `
        <div class="grid-item ${project.category}">
            <div class="box tilt" style="width:380px;margin:1rem">
                <img src="/assets/images/projects/${project.image}.png" draggable="false" alt="project">
                <div class="content">
                    <div class="tag"><h3>${project.name}</h3></div>
                    <div class="desc">
                        <p>${project.desc}</p>
                        <div class="btns">
                            <a href="${project.links.view}" target="_blank" class="btn">
                                <i class="fas fa-eye"></i> View
                            </a>
                            <a href="${project.links.code}" target="_blank" class="btn">
                                Code <i class="fas fa-code"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    });

    projectsContainer.innerHTML = projectsHTML;

    // Initialize Isotope AFTER content loads
    const $grid = $('.box-container').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    // Filter buttons
    $('.button-group').on('click', 'button', function () {
        $('.button-group button').removeClass('is-checked');
        $(this).addClass('is-checked');
        const filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
}

// Load projects
getProjects().then(showProjects);


// ✅ Tawk.to Live Chat (ONLY ONCE – CORRECT)
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://tawk.to/chat/69419e964f7afe19760b61c4/1jck570ds';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();


// ⚠️ Disable developer tools (optional)
document.onkeydown = function (e) {
    if (e.keyCode === 123) return false;
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) return false; // I
    if (e.ctrlKey && e.shiftKey && e.keyCode === 67) return false; // C
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) return false; // J
    if (e.ctrlKey && e.keyCode === 85) return false; // U
};
