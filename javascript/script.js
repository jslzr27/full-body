$('.dropdown-trigger').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false,
    hover: false,
    gutter: 0,
    belowOrigin: false,
    alignment: 'left',
    stopPropagation: false 
});

$(document).ready(function hideWk() {
    $(".workouts").hide();
    $("#tableHeaders").hide();
})

var wkOne = $('#dayOne').click( function () {
    $('#secondDaywk').hide();
    $('#thirdDaywk').hide();
    $('#firstDaywk').show();
}) 

var wkTwo = $('#dayTwo').click( function () {
    $('#firstDaywk').hide();
    $('#thirdDaywk').hide();
    $('#secondDaywk').show();
}) 

var wkThree = $('#dayThree').click( function () {
    $('#firstDaywk').hide();
    $('#secondDaywk').hide()
    $('#thirdDaywk').show();
}) 

function showVideo () {
    var video = document.createElement('video');
    video.src = 'https://youtu.be/XSza8hVTlmM';
}

$('.benchPress').click(function showVideo () {
    var video = document.createElement('video');
    var sourceVideo = document.createElement("source"); 
    sourceVideo.type = "video/mp4";
    sourceVideo.src = 'https://youtu.be/XSza8hVTlmM';

    video.appendChild(sourceVideo);
});