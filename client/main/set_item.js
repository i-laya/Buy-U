/**
 * Created by stevenchun on 4/16/16.
 */
$('#search').keypress(function (e) {
    if (e.keyCode == 13) {
        var myDataRef = new Firebase('https://glowing-inferno-7563.firebaseio.com/');
        var search = $('#search').val();
        myDataRef.set({
            a_search: search
        });
    }
});