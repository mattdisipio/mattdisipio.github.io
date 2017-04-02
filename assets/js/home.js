(function(){
    'use strict';

    $( document ).ready(function() {
        var curDate = new Date();
        var birthDate = new Date(1988, 9, 7);
        var difference = (curDate - birthDate)/(1000*60*60*24*365);
        $('#age').text(difference.toFixed(1) + ' Years Old');

        function printFile(fileId) {
            var request = gapi.client.drive.files.get({
                'fileId': fileId
            });
            request.execute(function(resp) {
                console.log('Title: ' + resp.title);
                console.log('Description: ' + resp.description);
                console.log('MIME type: ' + resp.mimeType);
            });
            }
    });

})();