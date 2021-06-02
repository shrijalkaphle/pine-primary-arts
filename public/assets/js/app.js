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