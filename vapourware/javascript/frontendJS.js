(function() {
    $("#headerContent").load("header.html", function(){
        $('.icon-menu').click(function() {
            $('.menu').animate({
                left: "0px"
            }, 200);

            $('body').animate({
                left: "285px"
            }, 200);
            console.log("hello");
        });

        $('.icon-close').click(function() {
            $('.menu').animate({
                left: "-285px"
            }, 200);

            $('body').animate({
                left: "0px"
            }, 200);    
        });        
    }); // load header/nav-bar
    $("#footerContent").load("footer.html"); // load footer
    $("#pushmenuContent").load("push-menu.html", function() {
        $('.icon-menu').click(function() {
            $('.menu').animate({
                left: "0px"
            }, 200);

            $('body').animate({
                left: "285px"
            }, 200);
        });

        $('.icon-close').click(function() {
            $('.menu').animate({
                left: "-285px"
            }, 200);

            $('body').animate({
                left: "0px"
            }, 200);    
        }); 
    }); // load push menu
})();
