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
})
var hideTitles =  function hideTitles() {
    $('#wkOnetitle').hide();
    $('#wkTwotitle').hide();
    $('#wkThreetitle').hide();
    }
hideTitles();

var wkOne = $('#dayOne').click( function () {
    $('#secondDaywk').hide();
    $('#thirdDaywk').hide();
    $('#firstDaywk').show();
    $('#wkOnetitle').show();
    $('#wkTwotitle').hide();
    $('#wkThreetitle').hide();
}) 

var wkTwo = $('#dayTwo').click( function () {
    $('#firstDaywk').hide();
    $('#thirdDaywk').hide();
    $('#secondDaywk').show();
    $('#wkTwotitle').show();
    $('#wkOnetitle').hide();
    $('#wkThreetitle').hide();
}) 

var wkThree = $('#dayThree').click( function () {
    $('#firstDaywk').hide();
    $('#secondDaywk').hide()
    $('#thirdDaywk').show();
    $('#wkThreetitle').show();
    $('#wkOnetitle').hide();
    $('#wkTwotitle').hide();
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