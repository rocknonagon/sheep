$(document).ready( function(){
    for (var n = 0; n < 6; n++) {
        $('#figure' + n).hover(
            function (event) {
                var pic = event.target.id;
                var m = parseInt(pic.charAt(pic.length - 1));
                for (var k = 0; k < m; k++) {
                    $("#figure" + k).addClass("returning");
                }
                for (k = m + 1; k < 6; k++) {
                    $("#figure" + k).removeClass("returning");
                }
                if (m == 0) {
                    $("div.page.end:gt(1)").hide(2000);
                }
                if (m == 5) {
                    setTimeout(
                        function(){
                            $(".page").addClass("end");
                        }, 10000);
                }
            },
            function (event) {
                var pic = event.target.id;
                var m = parseInt(pic.charAt(pic.length - 1));
                if (m == 5) {
                    $(".page").addClass("end");
                }
            });
    }
        
    $("button").click(function() {
            $("div.page").show();
            $(".returning").removeClass("returning");
            $(".end").removeClass("end");
    });
});