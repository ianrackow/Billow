chrome.runtime.onMessageExternal.addListener(
    function(request, sender, sendResponse) {
        if (request.action == "clear"){
            chrome.storage.local.set({ "req": false });
        } else {
            chrome.storage.local.get({emailIds: []}, function (result) {
                var emailIds = result.emailIds;
        
                if (!emailIds.includes(request.id)){
                    chrome.storage.local.set({ "req": {id: request.id, data: request.data }});
                }
            });
        }   
});