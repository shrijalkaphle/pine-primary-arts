$('#fullname').on('focus',function(){
    $('#name-div').addClass('border-logo text-logo')
})
$('#fullname').on('focusout', function() {
    $('#name-div').removeClass('border-logo text-logo')
})