chrome.runtime.onMessageExternal.addListener(


    function(request, sender, sendResponse) {

        chrome.storage.local.get({emailIds: []}, function (result) {
            var emailIds = result.emailIds;
    
            if (!emailIds.includes(request.id)){
                chrome.storage.local.set({ "req": {id: request.id, data: request.data }});
                console.log(request);
            }
        });
});