/**
 * Created by layaindukuri on 4/16/16.
 */
var myDataRef = new Firebase('https://glowing-inferno-7563.firebaseio.com/');
$('#messageInput').keypress(function (e) {
    if (e.keyCode == 13) {
        var name = $('#nameInput').val();
        var text = $('#messageInput').val();
        myDataRef.set({name: name, text: text});
        //$('#messageInput').val('');
    }
});
myDataRef.on('child_added', function(snapshot) {
    var message = snapshot.val();
    displayChatMessage(message.name, message.text);
});