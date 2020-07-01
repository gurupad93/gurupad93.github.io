function search(ele) {
    if(event.key === 'Enter') {
        var entered = $('input').val().toLowerCase();
        if(entered == 'ls'){
            $('#errorMsg').hide();
            $('input').hide();
            $('#car').hide();
            $('#mainCollapse').collapse('show');
        } else {
            $('#errorMsg').show();
        }
    }
}

$('#aboutmeLink').on('click', function(){
    $('#aboutmeCollapse').collapse('toggle');
    setTimeout(function(){ document.getElementById('aboutmeDiv').scrollIntoView({behavior: "smooth"}); }, 300);
});
$('#educationLink').on('click', function(){
    $('#educationCollapse').collapse('toggle');
    setTimeout(function(){ document.getElementById('educationCardDiv').scrollIntoView({behavior: "smooth"}); }, 300);
});
$('#experienceLink').on('click', function(){
    $('#experienceCollapse').collapse('toggle');
    setTimeout(function(){ document.getElementById('experienceCardDiv').scrollIntoView({behavior: "smooth"}); }, 300);
});
$('#projectsLink').on('click', function(){
    $('#projectsCollapse').collapse('toggle');
    setTimeout(function(){ document.getElementById('projectsCardDiv').scrollIntoView({behavior: "smooth"}); }, 300);
});

$('#aboutmeCollapse').on('show.bs.collapse', function () {
    $('#aboutmeLink').text('- About me');
});
$('#aboutmeCollapse').on('hidden.bs.collapse', function () {
    $('#aboutmeLink').text('+ About me');
});
$('#projectsCollapse').on('show.bs.collapse', function () {
    $('#projectsLink').text('- Projects');
});
$('#projectsCollapse').on('hidden.bs.collapse', function () {
    $('#projectsLink').text('+ Projects');
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