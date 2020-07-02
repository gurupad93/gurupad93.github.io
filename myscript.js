function search(ele) {
    if(event.key === 'Enter') {
        var entered = $('#opt').val().toLowerCase();
        if(entered == 'ls'){
            $('#errorMsg').hide();
            $('#opt').hide();
            $('#car').hide();
            $('#mainCollapse').collapse('show');
        } else {
            $('#errorMsg').show();
        }
    }
}

function showcc(){
    $('#cce').val('');
    $('.all').hide();
    $('#cc').show();
    $('#cce').focus();
    setTimeout(function(){ document.getElementById('cc').scrollIntoView({behavior: "smooth"}); }, 300);
}

function showbs(){
    $('#bse').val('');
    $('.all').hide();
    $('#bs').show();
    $('#bse').focus();
    setTimeout(function(){ document.getElementById('bs').scrollIntoView({behavior: "smooth"}); }, 300);
}

function showgp(){
    $('#gpe').val('');
    $('.all').hide();
    $('#gp').show();
    $('#gpe').focus();
    setTimeout(function(){ document.getElementById('gp').scrollIntoView({behavior: "smooth"}); }, 300);
}

function showfh(){
    $('#fhe').val('');
    $('.all').hide();
    $('#fh').show();
    $('#fhe').focus();
    setTimeout(function(){ document.getElementById('fh').scrollIntoView({behavior: "smooth"}); }, 300);
}

function showiwf(){
    $('#iwfe').val('');
    $('.all').hide();
    $('#iwf').show();
    $('#iwfe').focus();
    setTimeout(function(){ document.getElementById('iwf').scrollIntoView({behavior: "smooth"}); }, 300);
}

$('#bse').on('input', function(){
    console.log('yes');
    if($('#bse').val()=="q"){
        $('#bs').hide();
        $('.all').show();
    }
});


$('#cce').on('input', function(){
    console.log('yes');
    if($('#cce').val()=="q"){
        $('#cc').hide();
        $('.all').show();
    }
});
$('#gpe').on('input', function(){
    console.log('yes');
    if($('#gpe').val()=="q"){
        $('#gp').hide();
        $('.all').show();
    }
});

$('#fhe').on('input', function(){
    console.log('yes');
    if($('#fhe').val()=="q"){
        $('#fh').hide();
        $('.all').show();
    }
});


$('#iwfe').on('input', function(){
    console.log('yes');
    if($('#iwfe').val()=="q"){
        $('#iwf').hide();
        $('.all').show();
    }
});
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