(function () {

    const courses = [
        {
            id: 1,
            name: "Pemgrograman web",
            star: 4.5,
            category: 'Technology',
            logo: "assets/img/image.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
            pro: false
        },
        {
            id: 1,
            name: "Kimia",
            star: 4.5,
            category: 'Science',
            logo: "assets/img/image2.jpeg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
            pro: true
        },
        {
            id: 1,
            name: "Sejarah Islam",
            star: 4.5,
            category: 'History',
            logo: "assets/img/image3.jpeg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
            pro: true
        },
        {
            id: 1,
            name: "Aljabar",
            star: 4.5,
            category: 'Mathematics',
            logo: "assets/img/image4.jpeg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
            pro: true
        },
        {
            id: 1,
            name: "Sepak Bola",
            star: 4.5,
            category: 'Sports',
            logo: "assets/img/image5.jpeg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
            pro: false
        },
    ];

    let categoryData = "all";

    $(".category-item").each(function () {
        const item = $(this);
        item.on('click', function () {
            $(".category-item.active").removeClass('active');
            item.addClass('active');
            categoryData = item.data("category");
            showCourses(courses, categoryData, "");
        });
    });

    $(".search input").keyup(function () {
        const text = $(".search input").val();
        showCourses(courses, categoryData, text);
    })

    showCourses(courses, categoryData, "");

    function showCourses(data, category = "all", search = "") {
        const coursesContainer = $(".courses-container");
        coursesContainer.empty();
        data.forEach((value) => {
            const button = value.pro ?
                `<button class="courses-item-info-button-pro"><i class="fas fa-lock"></i> Pro</button>`
                : `<button class="courses-item-info-button">Detail</button>`;
            const coursesItem = $($.parseHTML(`<div class="courses-item">
                <div class="courses">
                    <img src="${value.logo}" alt="#"/>
                    <div class="courses-item-info">
                        ${button}
                        <div>
                            <i class="fas fa-star"></i>
                            <span>${value.star}</span>
                        </div>
                        <p class="courses-item-info-category">${value.category}</p>
                        <h2 class="courses-item-info-title">${value.name}</h2>
                    </div>
                </div>
                <div class="courses">
                    <p class="courses-item-info-desc">${value.description}</p>
                </div>
            </div>`));

            if (category !== "all" && category !== value.category) return;
            if (!value.name.toLowerCase().includes(search.toLowerCase())) return;

            if (!value.pro) {
                const courseButton = coursesItem.find("button").eq(0)
                courseButton.on('click', function () {
                    $(".loading").eq(0).addClass("loading-close");
                    const timer = setInterval(function () {
                        $(".container .content-wrapper").eq(0).load("pages/course.html")
                        document.title = "Course | " + value.name
                        $(".loading").eq(0).removeClass("loading-close");
                        clearInterval(timer);
                    }, 500);
                })
            }

            coursesContainer.append(coursesItem);
        });
    }
})();