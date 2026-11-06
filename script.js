/* =========================================================
   AARADHAYA SUTRAVE PORTFOLIO
   MASTER JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       1. HOME PAGE — FEATURED PROJECT SLIDESHOW
       ===================================================== */

    const slides = document.querySelectorAll(".featured-slide");
    const dots = document.querySelectorAll(".slider-dot");
    const previousButtons = document.querySelectorAll(".slider-prev");
    const nextButtons = document.querySelectorAll(".slider-next");

    let currentSlide = 0;


    function showSlide(index) {

        if (slides.length === 0) {
            return;
        }

        if (index < 0) {
            index = slides.length - 1;
        }

        if (index >= slides.length) {
            index = 0;
        }

        currentSlide = index;

        slides.forEach(function (slide) {
            slide.classList.remove("active");
        });

        dots.forEach(function (dot) {
            dot.classList.remove("active");
        });

        slides[currentSlide].classList.add("active");

        if (dots[currentSlide]) {
            dots[currentSlide].classList.add("active");
        }
    }


    nextButtons.forEach(function (button) {

        button.addEventListener("click", function () {
            showSlide(currentSlide + 1);
        });

    });


    previousButtons.forEach(function (button) {

        button.addEventListener("click", function () {
            showSlide(currentSlide - 1);
        });

    });


    dots.forEach(function (dot, index) {

        dot.addEventListener("click", function () {
            showSlide(index);
        });

    });


    /* Start the featured slideshow */

    if (slides.length > 0) {
        showSlide(0);
    }


    /* =====================================================
       2. WORK PAGE — PROJECT ORDER
       ===================================================== */

    /*
       This is the order used on the Work page.

       Newest projects appear first.

       To change the order later, simply move the
       project names up or down this list.
    */

    const chronologicalOrder = [

        "holographic-vision",
        "microheater",
        "lock-in-amplifier",
        "playground",
        "backseat-minder",
        "kundt-tube",
        "voronoi-mesh",
        "wind-tunnel",
        "ansys-fea",
        "aluminum-hammer",
        "mars-rover",
        "racing-wheelchair",
        "pill-container",
        "heat-sink",
        "porsche-911"

    ];


    const workGrid = document.querySelector(".work-grid");

    const workCards = Array.from(
        document.querySelectorAll(".work-card")
    );


    function sortWorkCardsChronologically() {

        if (!workGrid || workCards.length === 0) {
            return;
        }

        const sortedCards = [...workCards].sort(function (a, b) {

            const projectA = a.dataset.project || "";
            const projectB = b.dataset.project || "";

            let indexA = chronologicalOrder.indexOf(projectA);
            let indexB = chronologicalOrder.indexOf(projectB);

            if (indexA === -1) {
                indexA = 999;
            }

            if (indexB === -1) {
                indexB = 999;
            }

            return indexA - indexB;

        });


        sortedCards.forEach(function (card) {
            workGrid.appendChild(card);
        });

    }


    sortWorkCardsChronologically();


    /* =====================================================
       3. WORK PAGE — FILTERS
       ===================================================== */

    const filterButtons =
        document.querySelectorAll(".filter-button");


    function filterProjects(selectedFilter) {

        if (!workGrid) {
            return;
        }


        workCards.forEach(function (card) {

            const categories =
                (card.dataset.category || "")
                    .toLowerCase()
                    .split(/\s+/);


            if (
                selectedFilter === "all" ||
                categories.includes(
                    selectedFilter.toLowerCase()
                )
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });


        /*
           Reapply chronological order after filtering.
        */

        const visibleCards = workCards.filter(function (card) {
            return !card.classList.contains("hidden");
        });


        const orderedVisibleCards = [];


        chronologicalOrder.forEach(function (projectName) {

            const matchingCard = visibleCards.find(
                function (card) {
                    return card.dataset.project === projectName;
                }
            );


            if (matchingCard) {
                orderedVisibleCards.push(matchingCard);
            }

        });


        visibleCards.forEach(function (card) {

            if (!orderedVisibleCards.includes(card)) {
                orderedVisibleCards.push(card);
            }

        });


        orderedVisibleCards.forEach(function (card) {
            workGrid.appendChild(card);
        });

    }


    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedFilter =
                button.dataset.filter || "all";


            filterButtons.forEach(function (filterButton) {
                filterButton.classList.remove("active");
            });


            button.classList.add("active");


            filterProjects(selectedFilter);

        });

    });


    /* =====================================================
       4. HOME PAGE — ENGINEERING WORKSTATION MONITOR
       ===================================================== */

    const monitorPhoto =
        document.querySelector(".monitor-photo");

    const monitorProject =
        document.querySelector(".monitor-project");

    const screenProjectNumber =
        document.querySelector(".project-number");

    const screenProjectCategory =
        document.querySelector(".screen-project-category");

    const screenProjectTitle =
        document.querySelector(".screen-project-title");


    const homepageProjects = [

        {
            year: "2026",
            category: "RESEARCH · OPTICS · HOLOGRAPHY",
            title: "Holographic Vision"
        },

        {
            year: "2026",
            category: "RESEARCH · OPTICS · LABVIEW",
            title: "Microheater Optics Experiment"
        },

        {
            year: "2026",
            category: "RESEARCH · INSTRUMENTATION",
            title: "Lock-In Amplifier Data Acquisition"
        },

        {
            year: "2026",
            category: "DESIGN · ANSYS · FEA",
            title: "Structural Design & FEA on Playground Equipment"
        },

        {
            year: "2026",
            category: "ELECTRICAL · CAD · SIMULATION",
            title: "Backseat Minder"
        },

        {
            year: "2026",
            category: "RESEARCH · SOLIDWORKS · ACOUSTICS",
            title: "Textile Weave Structures in Kundt Tubes"
        },

        {
            year: "2026",
            category: "RESEARCH · MATLAB · FEA",
            title: "Mesh Generation with Voronoi Tessellation"
        },

        {
            year: "2025",
            category: "DESIGN · SIMULATION · EXPERIMENTAL",
            title: "Aerodynamic Car Design & Wind Tunnel Testing"
        },

        {
            year: "2025",
            category: "ANSYS · FEA · MECHANICAL DESIGN",
            title: "Exploring Discontinuity Effects on Mechanical Design"
        },

        {
            year: "2025",
            category: "MANUFACTURING · MACHINING",
            title: "Aluminum Hammer Fabrication"
        },

        {
            year: "2025",
            category: "PYTHON · SIMULATION",
            title: "Mars Rover Landing Simulation"
        },

        {
            year: "2025",
            category: "SOLIDWORKS · FEA · 3D PRINTING",
            title: "Racing Wheelchair Frame Optimization"
        },

        {
            year: "2024",
            category: "DESIGN · PROTOTYPING",
            title: "Daily Accessible Pill Container"
        },

        {
            year: "2024",
            category: "DESIGN · MANUFACTURING",
            title: "Heat Sink Design"
        },

        {
            year: "2024",
            category: "DESIGN · SOLIDWORKS",
            title: "Porsche 911 Carrera CAD Model"
        }

    ];


    let homepageProjectIndex = 0;


    function showMonitorPhoto() {

        if (!monitorPhoto || !monitorProject) {
            return;
        }

        monitorPhoto.classList.add("active");
        monitorProject.classList.remove("active");

    }


    function showMonitorProject() {

        if (
            !monitorPhoto ||
            !monitorProject ||
            !screenProjectNumber ||
            !screenProjectCategory ||
            !screenProjectTitle
        ) {
            return;
        }


        const project =
            homepageProjects[homepageProjectIndex];


        if (!project) {
            return;
        }


        screenProjectNumber.textContent =
            String(homepageProjectIndex + 1).padStart(2, "0") +
            " — " +
            project.year;


        screenProjectCategory.textContent =
            project.category;


        screenProjectTitle.textContent =
            project.title;


        monitorPhoto.classList.remove("active");
        monitorProject.classList.add("active");

    }


    /*
       Only run the monitor slideshow if the monitor
       actually exists on the current page.
    */

    if (monitorPhoto && monitorProject) {

        showMonitorPhoto();


        setTimeout(function () {

            showMonitorProject();


            setInterval(function () {

                homepageProjectIndex++;

                if (
                    homepageProjectIndex >=
                    homepageProjects.length
                ) {

                    homepageProjectIndex = 0;

                    showMonitorPhoto();


                    setTimeout(function () {
                        showMonitorProject();
                    }, 5000);


                } else {

                    showMonitorProject();

                }

            }, 4000);

        }, 5000);

    }


    /* =========================================================
   PROJECT OVERLAY SYSTEM
   ========================================================= */

/*
   Each project button in work.html should look like:

   <button
       type="button"
       class="project-open-button"
       data-project="projects/microheater.html">

       VIEW PROJECT

       <span>→</span>

   </button>

   JavaScript takes the file specified by data-project
   and loads it into the iframe.
*/


const projectOverlay =
    document.getElementById("project-overlay");

const projectFrame =
    document.getElementById("project-frame");

const projectOverlayClose =
    document.getElementById("project-overlay-close");

const projectOverlayBackdrop =
    document.querySelector(".project-overlay-backdrop");

const projectOpenButtons =
    document.querySelectorAll(".project-open-button");


/* =========================================================
   OPEN PROJECT
   ========================================================= */

function openProjectOverlay(projectPath) {

    if (!projectOverlay || !projectFrame) {
        console.error("Project overlay elements not found.");
        return;
    }

    if (!projectPath) {
        console.error("No project path was provided.");
        return;
    }


    /* Load the project HTML */

    projectFrame.src = projectPath;


    /* Open the overlay */

    projectOverlay.classList.add("open");

    projectOverlay.setAttribute(
        "aria-hidden",
        "false"
    );


    /* Prevent the main page from scrolling */

    document.body.classList.add("overlay-open");

}


/* =========================================================
   CLOSE PROJECT
   ========================================================= */

function closeProjectOverlay() {

    if (!projectOverlay) {
        return;
    }


    /* Close overlay */

    projectOverlay.classList.remove("open");

    projectOverlay.setAttribute(
        "aria-hidden",
        "true"
    );


    /* Allow page scrolling again */

    document.body.classList.remove("overlay-open");


    /*
       Wait for the closing animation before
       clearing the iframe.
    */

    setTimeout(function () {

        if (projectFrame) {
            projectFrame.src = "about:blank";
        }

    }, 350);

}


/* =========================================================
   VIEW PROJECT BUTTONS
   ========================================================= */

projectOpenButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        /*
           Safety net: if this ever ends up on an <a> tag
           with a real href, stop it from navigating the
           whole page away from the overlay.
        */

        event.preventDefault();

        const projectPath =
            button.getAttribute("data-project");

        openProjectOverlay(projectPath);

    });

});


/* =========================================================
   CLOSE BUTTON
   ========================================================= */

if (projectOverlayClose) {

    projectOverlayClose.addEventListener(
        "click",
        closeProjectOverlay
    );

}


/* =========================================================
   BACKDROP CLICK
   ========================================================= */

if (projectOverlayBackdrop) {

    projectOverlayBackdrop.addEventListener(
        "click",
        closeProjectOverlay
    );

}


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            projectOverlay &&
            projectOverlay.classList.contains("open")
        ) {

            closeProjectOverlay();

        }

    }
);

});
