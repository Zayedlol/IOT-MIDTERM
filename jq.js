function flip() {
    
    if ($(".card1").attr("id") == "bashopart") {
        // set the .pic src to img/ww.jpg
        $(".card1").removeclass("bashopart");
        $(".card1").addclass("yosapart");
        $(".card2").removeclass("yosapart");
        $(".card2").addclass("bashopart");

    } else {
        $(".card2").removeclass("bashopart");
        $(".card2").addclass("yosapart");
        $(".card1").removeclass("bashopart");
        $(".card1").addclass("yosapart");
    }
}