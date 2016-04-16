/**
 * Created by layaindukuri on 4/16/16.
 */
var myDataRef = new Firebase('https://u2empm8axuf.firebaseio-demo.com/');
$('#messageInput').keypress(function (e) {
    if (e.keyCode == 13) {
        var name = $('#nameInput').val();
        var text = $('#messageInput').val();
        myDataRef.push({name: name, text: text});
        $('#messageInput').val('');
    }
});
myDataRef.on('child_added', function(snapshot) {
    var message = snapshot.val();
    displayChatMessage(message.name, message.text);
});