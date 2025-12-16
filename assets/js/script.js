$(document).ready(function () {

    // Menu toggle
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Scroll & load events
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        // Scroll top button
        if (window.scrollY > 60) {
            $('#scroll-top').addClass('active');
        } else {
            $('#scroll-top').removeClass('active');
        }

        // Scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`a[href="#${id}"]`).addClass('active');
            }
        });
    });

    // Smooth scrolling
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });

    // EmailJS contact form
    $("#contact-form").submit(function (event) {
        event.preventDefault();

        emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

        emailjs.sendForm('contact_service', 'template_contact', this)
            .then(function () {
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function () {
                alert("Form Submission Failed! Try Again");
            });
    });

});

// Tab visibility title change
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Portfolio | Tanmoy Sable";
        $("#favicon").attr("href", "assets/images/favicon.png");
    } else {
        document.title = "Come Back To Portfolio";
        $("#favicon").attr("href", "assets/images/favhand.png");
    }
});

// Typed.js effect
var typed = new Typed(".typing-text", {
    strings: ["Full-Stack Developer", "Cyber Security Student"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

// Fetch data
async function fetchData(type = "skills") {
    let response = type === "skills"
        ? await fetch("skills.json")
        : await fetch("./projects/projects.json");

    return await response.json();
}

// Show skills
function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";

    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
            <div class="info">
                <img src="${skill.icon}" alt="skill" />
                <span>${skill.name}</span>
            </div>
        </div>`;
    });

    skillsContainer.innerHTML = skillHTML;
}

// Show projects
function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";

    projects
        .slice(0, 10)
        .filter(project => project.category !== "android")
        .forEach(project => {
            projectHTML += `
            <div class="box tilt">
                <img src="/assets/images/projects/${project.image}.png" alt="project" draggable="false"/>
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
            </div>`;
        });

    projectsContainer.innerHTML = projectHTML;

    // Tilt effect
    VanillaTilt.init(document.querySelectorAll(".tilt"), { max: 15 });
}

// Load data
fetchData().then(showSkills);
fetchData("projects").then(showProjects);

// ScrollReveal (ONLY ONCE)
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

// Scroll animations
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });
srtop.reveal('.home .image', { delay: 400 });

srtop.reveal('.about .content', { delay: 200 });
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.education .box', { interval: 200 });
srtop.reveal('.work .box', { interval: 200 });
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.contact .container', { delay: 400 });

// Tawk.to Live Chat (ONLY ONCE)
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
