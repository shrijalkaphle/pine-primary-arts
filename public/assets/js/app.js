$('#fullname').on('focus',function(){
    $('#name-div').addClass('border-logo text-logo')
    $('#name-logo').addClass('text-logo')
})
$('#fullname').on('focusout', function() {
    $('#name-div').removeClass('border-logo text-logo')
    $('#name-logo').removeClass('text-logo')
})

$('#mail').on('focus',function(){
    $('#mail-div').addClass('border-logo text-logo')
    $('#mail-logo').addClass('text-logo')
})
$('#mail').on('focusout', function() {
    $('#mail-div').removeClass('border-logo text-logo')
    $('#mail-logo').removeClass('text-logo')
})

$('#subject').on('focus',function(){
    $('#subject-div').addClass('border-logo text-logo')
    $('#subject-logo').addClass('text-logo')
})
$('#subject').on('focusout', function() {
    $('#subject-div').removeClass('border-logo text-logo')
    $('#subject-logo').removeClass('text-logo')
})

$('#navigator').on('click', function() {
    $('#navigationItem').toggle()
    $(document.body).toggleClass('overflow-hidden')
})
$('#navigatorClose').on('click', function() {
    $('#navigationItem').toggle()
    $(document.body).toggleClass('overflow-hidden')
})
const marker = document.querySelector('#marker')
var items = document.querySelectorAll('#navbar a')
items.forEach(link => {
    link.addEventListener('click', (e) => {
        $('#navbar a').css('color','#bbb')
        link.style.color = 'white'
        indicator(e.target)
    })
})

function indicator(item) {
    marker.style.top = item.offsetTop + 'px'
    marker.style.height = item.offsetHeight + 'px'
}

var dflt = document.querySelector('#default')
indicator(dflt)