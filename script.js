window.addEventListener("scroll", function () {
    const topNavigation = document.querySelector(".topnav");
    const header = document.querySelector(".header");
    const content = document.querySelector(".content");

    if (window.innerWidth < 768) {
        console.log("Mobile detected");
        return;
    }

    if (window.scrollY > header.offsetHeight) {
        topNavigation.classList.add("fixed");
    } else {
        topNavigation.classList.remove("fixed");
    }
});


if (window.innerWidth >= 768) {
    document.querySelectorAll(".photo-frame").forEach(function (photoFrame) {
        photoFrame.addEventListener("click", function () {
            console.log("clicked on photo");
            if (photoFrame.classList.contains("full-width")) {
                photoFrame.classList.remove("full-width");
            } else {
                photoFrame.classList.add("full-width");
            }
        });
    });
}

