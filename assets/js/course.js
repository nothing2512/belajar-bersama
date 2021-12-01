(function () {
    $(".submit-button").each(function() {
        $(this).on('click', function() {
            alert("Answer Submitted")
            $(".loading").eq(0).addClass("loading-close");
            const timer = setInterval(function () {
                $(".container .content-wrapper").eq(0).load("pages/courses.html")
                document.title = "Courses"
                $(".loading").eq(0).removeClass("loading-close");
                clearInterval(timer);
            }, 500);
        })
    })
})();