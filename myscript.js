function search(ele) {
    if(event.key === 'Enter') {
        $('input').hide();
        $('#car').hide();
        $('#mainCollapse').collapse('show');
    }
}

$('#aboutmeLink').on('click', function(){
    $('#aboutmeCollapse').collapse('toggle');
});
$('#educationLink').on('click', function(){
    $('#educationCollapse').collapse('toggle');
});
$('#experienceLink').on('click', function(){
    $('#experienceCollapse').collapse('toggle');
});

$('#aboutmeCollapse').on('show.bs.collapse', function () {
    $('#aboutmeLink').text('- About me');
});
$('#aboutmeCollapse').on('hidden.bs.collapse', function () {
    $('#aboutmeLink').text('+ About me');
});
$('#educationCollapse').on('show.bs.collapse', function () {
    $('#educationLink').text('- Education');
});
$('#educationCollapse').on('hidden.bs.collapse', function () {
    $('#educationLink').text('+ Education');
});
$('#experienceCollapse').on('show.bs.collapse', function () {
    $('#experienceLink').text('- Experience');
});
$('#experienceCollapse').on('hidden.bs.collapse', function () {
    $('#experienceLink').text('+ Experience');
});

$('a').hover(function(){
    $(this).css('cursor','pointer');
});