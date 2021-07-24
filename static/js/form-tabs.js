function tabs(value) {
    var data = ["login", "register"]
    var track = value.getAttribute("id")
    data.map(e => {
        if (e.includes(track)) {
            $("." + e + "-tab").show()
            $("#" + e).addClass("active-form")
        } else {
            $("." + e + "-tab").hide()
            $("#" + e).removeClass("active-form")
        }
    });
}