const marker = document.querySelector('#marker')
var items = document.querySelectorAll('#navbar a')
items.forEach(link => {
    link.addEventListener('click', (e) => {
        $('.navlink').removeClass('active')
        var t = e.target
        var id = t.id
        $('#'+id).addClass('active')
        indicator(e.target)
    })
})

function indicator(item) {
    marker.style.top = item.offsetTop + 'px'
    marker.style.height = item.offsetHeight + 'px'
}

var dflt = document.querySelector('#cdp-link')
dflt.classList.add('active')
indicator(dflt)

$(window).scroll(function () {
    var cdpoffset = $("#cdp").offset().top;
    var cdplink = document.querySelector('#cdp-link')
    var artoffset = $("#art-clubs").offset().top;
    var artlink = document.querySelector('#art-link')
    var counsuloffset = $("#cdp-consulting").offset().top;
    var counsullink = document.querySelector('#consulting-link')
    var yearoffset = $("#year6").offset().top;
    var yearlink = document.querySelector('#year-link')
    if ($(window).scrollTop() >= cdpoffset) {
        $('.navlink').removeClass('active')
        $('#cdp-link').addClass('active')
        indicator(cdplink)
    }
    if ($(window).scrollTop() >= artoffset) {
        $('.navlink').removeClass('active')
        $('#art-link').addClass('active')
        indicator(artlink)
    }
    if ($(window).scrollTop() >= counsuloffset) {
        $('.navlink').removeClass('active')
        $('#consulting-link').addClass('active')
        indicator(counsullink)
    }
    if ($(window).scrollTop() >= yearoffset) {
        $('.navlink').removeClass('active')
        $('#year-link').addClass('active')
        indicator(yearlink)
    }
});