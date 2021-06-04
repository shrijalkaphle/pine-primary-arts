$('#fullname').on('focus',function(){
    $('#name-div').addClass('border-green-primary text-green-primary')
    $('#name-logo').addClass('text-green-primary')
})
$('#fullname').on('focusout', function() {
    $('#name-div').removeClass('border-green-primary text-green-primary')
    $('#name-logo').removeClass('text-green-primary')
})

$('#mail').on('focus',function(){
    $('#mail-div').addClass('border-green-primary text-green-primary')
    $('#mail-logo').addClass('text-green-primary')
})
$('#mail').on('focusout', function() {
    $('#mail-div').removeClass('border-green-primary text-green-primary')
    $('#mail-logo').removeClass('text-green-primary')
})

$('#subject').on('focus',function(){
    $('#subject-div').addClass('border-green-primary text-green-primary')
    $('#subject-logo').addClass('text-green-primary')
})
$('#subject').on('focusout', function() {
    $('#subject-div').removeClass('border-green-primary text-green-primary')
    $('#subject-logo').removeClass('text-green-primary')
})

$('#navigator').on('click', function() {
    $('#navigationItem').slideToggle()
    $(document.body).toggleClass('overflow-hidden')
})
$('#navigatorClose').on('click', function() {
    $('#navigationItem').slideToggle()
    $(document.body).toggleClass('overflow-hidden')
})