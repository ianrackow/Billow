chrome.runtime.onMessageExternal.addListener(


    function(request, sender, sendResponse) {
        console.log(JSON.stringify(request));
        console.log("here");
        if (request.action == "clear"){
            chrome.storage.local.set({ "req": false });
            console.log("clear");
        } else {
            chrome.storage.local.get({emailIds: []}, function (result) {
                console.log("ids", JSON.stringify(result));
                var emailIds = result.emailIds;
        
                if (!emailIds.includes(request.id)){
                    chrome.storage.local.set({ "req": {id: request.id, data: request.data }});
                    console.log(request);
                }
            });
        }   
});