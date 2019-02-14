  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCXBSurCNcCT0yS23bLg-IHBBJGOnkGE-I",
    authDomain: "full-body-26f09.firebaseapp.com",
    databaseURL: "https://full-body-26f09.firebaseio.com",
    projectId: "full-body-26f09",
    storageBucket: "",
    messagingSenderId: "1062816306944"
  };
  firebase.initializeApp(config);

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
});
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
});

var wkTwo = $('#dayTwo').click( function () {
    $('#firstDaywk').hide();
    $('#thirdDaywk').hide();
    $('#secondDaywk').show();
    $('#wkTwotitle').show();
    $('#wkOnetitle').hide();
    $('#wkThreetitle').hide();
});

var wkThree = $('#dayThree').click( function () {
    $('#firstDaywk').hide();
    $('#secondDaywk').hide()
    $('#thirdDaywk').show();
    $('#wkThreetitle').show();
    $('#wkOnetitle').hide();
    $('#wkTwotitle').hide();
});

    function searchYT() {
        var queryURL = "https://www.googleapis.com/youtube/v3/search" + term;
        $.ajax({
            url: queryURL,
            method: "GET",
            dataType: "JSON"
        });
    }

    $("#youtubeLogo").on("click", function (event) {
        event.preventDefault();
        term = $('.exercise').text();
        console.log(term);
        console.log(searchYT);
    });

    $(document).ready(function(){
        $('select').formSelect();
      });
            