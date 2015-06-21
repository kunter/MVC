$(document).ready(function () {

    console.log("ready");
    sidebarHandler();



});

function fillDate(radioValue) {
    var yearHandler = $("#yearHandler");
    var ageHandler = $("#ageHandler");


    switch (radioValue) {
        case "1":
            console.log("1");
            ageHandler.hide();
            yearHandler.show();
            break;
        case "2":
            console.log("2");
            ageHandler.show();
            yearHandler.hide();
            break;
        case "3":
            console.log("3");
            ageHandler.show();
            yearHandler.show();
            break;
    }
}
function updateAfterAjax(){
    console.log("updateAfterAjax");

    fillDate(jQuery('input[name=searchByAgeSelector]:checked').val());
}
function sidebarHandler() {

    $('#trigger').on('click', function (e) {
        console.log("sidebar");
        if ($('.jsc-sidebar-content').hasClass('jsc-sidebar-pushed')) {
            console.log("removeClass");
            $('.jsc-sidebar-content').removeClass('jsc-sidebar-pushed');
            $('.jsc-sidebar-content').removeClass('col-xs-20');
            $('.jsc-sidebar-content').addClass('col-xs-24');
            $('#jsi-nav').hide();
        } else {
            console.log("addClass");
            $('.jsc-sidebar-content').addClass('jsc-sidebar-pushed');
            $('.jsc-sidebar-content').removeClass('col-xs-24');
            $('.jsc-sidebar-content').addClass('col-xs-20');
            $('#jsi-nav').show();

        }
    });

}
function showProgress(data) {
    var inputElement = data.source; // The HTML DOM input element.
    var ajaxStatus = data.status; // Can be "begin", "success" and "complete"

    var messageForInputElement = document.getElementById(inputElement.id + "_message");

    switch (ajaxStatus) {
        case "begin": // This is called right before ajax request is been sent.
//            alert("begin")

            break;

        case "complete": // This is called right after ajax response is received.
//            alert("complte")
            updateAfterAjax();
            break;

        case "success": // This is called when ajax response is successfully processed.
            updateAfterAjax();
            break;
    }
}