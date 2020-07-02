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

function bsexit(ele) {
    if(event.key === 'Enter') {
        $('#bs').hide();
        $('.all').show();
    }
}
function ccexit(ele) {
    if(event.key === 'Enter') {
        $('#cc').hide();
        $('.all').show();
    }
}

function gpexit(ele) {
    if(event.key === 'Enter') {
        $('#gp').hide();
        $('.all').show();
    }
}
function iwfexit(ele) {
    if(event.key === 'Enter') {
        $('#iwf').hide();
        $('.all').show();
    }
}

function fhexit(ele) {
    if(event.key === 'Enter') {
        $('#fh').hide();
        $('.all').show();
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