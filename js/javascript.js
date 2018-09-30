    function openNav() {
        document.getElementById("myNav").style.width = "100%";
    }

    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }

    $(document).ready(function () {
        $(".section1 > div:gt(0)").hide();

        setInterval(function () {
            $('.section1 > div:first')
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('.section1');
        }, 3000);

    });
