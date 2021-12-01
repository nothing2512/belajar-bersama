(function () {
    const sidebarActive = $(".sidebar nav.sidebar-content ul li.active").eq(0);
    const contentUrl = sidebarActive.data('content');
    $(".container .content-wrapper .auth-container").eq(0).load(contentUrl);
    $(document).ready(function () {
        $(".loading").eq(0).removeClass("loading-close");
    });
})();

(function () {
    $(".sidebar nav.sidebar-content ul li").each(function () {
        const item = $(this);
        const contentUrl = item.data('content');
        const contentTitle = item.data("title");
        item.on('click', function () {
            if (contentUrl !== undefined) {
                $(".sidebar nav.sidebar-content ul li.active").removeClass('active');
                item.addClass('active');
                document.title = contentTitle;
                $(".loading").eq(0).addClass("loading-close");

                const timer = setInterval(function () {
                    $(".container .content-wrapper .auth-container").eq(0).load(contentUrl);
                    $(".loading").eq(0).removeClass("loading-close");
                    clearInterval(timer);
                }, 500);
            }
        });
    });
})();

function setCookie(cname, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + value + ";" + expires + ";path=/";
}

function getCookie(cname, defaultValue) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return defaultValue;
}

function isLoggedIn() {
    return getCookie("login", "n") === "y";
}

function login() {
    return setCookie("login", "y", 1);
}