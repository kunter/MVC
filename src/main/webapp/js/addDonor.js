//    $("city").kladr({
//            token: '51dfe5d42fb2b43e3300006e',
//            key: '86a2c2a06f1b2451a87d05512cc2c3edfdf41969',
//            type: $.kladr.type.city
//    });

$(function () {

    $(document).ready(function() {

        $("input[id*='birthDay']").mask('99/99/9999');
        $("input[id*='createRecord']").mask('99/99/9999');

        $('#trigger').on('click',function(e){
            if($('.jsc-sidebar-content').hasClass('jsc-sidebar-pushed')){
                console.log("removeClass")
                $('.jsc-sidebar-content').removeClass('jsc-sidebar-pushed') ;
                $('.jsc-sidebar-content').removeClass('col-xs-20') ;
                $('.jsc-sidebar-content').addClass('col-xs-24') ;
                $('#jsi-nav').hide();
            }else{
                console.log("addClass")
                $('.jsc-sidebar-content').addClass('jsc-sidebar-pushed');
                $('.jsc-sidebar-content').removeClass('col-xs-24') ;
                $('.jsc-sidebar-content').addClass('col-xs-20') ;
                $('#jsi-nav').show();

            }
        });
//        $('#jsi-nav').sidebar({
//            trigger: '#trigger',
//            scrollbarDisplay: true,
//            pullCb: function () { console.log('pull'); },
//            pushCb: function () { console.log('push'); }
//        });
//
//        $('#api-pull').on('click', function (e) {
//            alert("pull");
//            e.preventDefault();
//            $('#jsi-nav').data('sidebar').push();
//        });
//        $('#api-push').on('click', function (e) {
//            alert("push");
//            e.preventDefault();
//            $('#jsi-nav').data('sidebar').pull();
//        });
    });

//    fillDate();
//    jsf.ajax.addOnError(showModal)
//    jsf.ajax.addOnEvent(showModal);
//    jsf.ajax.addOnEvent(defineKladr);
//    jsf.ajax.addOnError(attachAdressButton());
//    attachAdressButton(event) ;
//    $(document).on('click',function(){
//
//
//
//    });

//    alert(document.activeElement);
//$("").validate({
//    rules: {
//
//    }
//
//})

});
function fillDate() {
//    var d = new Date();
//
//    var month = d.getMonth()+1;
//    var day = d.getDate();
////
////    var output = d.getFullYear() + '/' +
////        (month<10 ? '0' : '') + month + '/' +
////        (day<10 ? '0' : '') + day;
//    var output = day + '/' +
//        (month<10 ? '0' : '') + month + '/' +
//        (day<10 ? '0' : '') +  d.getFullYear() ;
//    alert(output);
//
////    var input=calendarWidget.getDate();
//    alert(calendarWidget.getDate());
////    input.setDay(d.getDay());
//    input.SetMonth(d.getMonth());
//    input.setYear(d.getYear());
//
//    calendarWidget.setDate(input);

}
function showModal() {
    if (true) {
        alert("asdsad");

    }
    alert("sss");
    $('#myModal').modal('show')
    $('#myModal').modal('toggle')

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
            break;

        case "success": // This is called when ajax response is successfully processed.
            var varVal = document.getElementsByClassName("has-error");

            if (varVal.length == 0) {
                $('#myModal').modal('show')
//                $('#myModal').modal('toggle')
            }
            break;
    }
}
function attachAdressButton(event) {

    var varSplitElemenatName = event.target.id.split(':');
    var varIndexText = varSplitElemenatName[1];

    varNameCity = '[id="repLoc:' + varIndexText + ':city"]';
    varNameStreet = '[id="repLoc:' + varIndexText + ':street"]';
    varNameBuilding = '[id="repLoc:' + varIndexText + ':building"]'

    var token = '531f705edba5c7132300004e';
    var key = 'af65faaaa56923c42de5687ad5a236da7870ff52';


    var city = $(varNameCity);
    var street = $(varNameStreet);
    var building = $(varNameBuilding);

    city.kladr({
        token: token,
        key: key,
        type: $.kladr.type.city,
        verify: true,
        select: function (obj) {
            street.kladr('parentType', $.kladr.type.city);
            street.kladr('parentId', obj.id);
            building.kladr('parentType', $.kladr.type.city);
            building.kladr('parentId', obj.id);
        }});

    street.kladr({
        token: token,
        key: key,
        type: $.kladr.type.street,
        verify: true,
        select: function (obj) {
            building.kladr('parentType', $.kladr.type.street);
            building.kladr('parentId', obj.id);
        }
    });
    building.kladr({
        withParents: true,
        token: token,
        key: key,
        type: $.kladr.type.building
    });

}

