async function fetchMessage(sourceId, content) {
  sourceId = sourceId.value ?? "";
  content = content.value ?? "";
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.chatpdf.com/v1/chats/message');
        xhr.setRequestHeader('x-api-key', 'sec_oVR5DxgcOAjbB4eFwiObjHtzH1U9IpiB');
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(new Error('impossible'));
            }
        };
        xhr.onerror = function () {
            reject(new Error('impossible'));
        };
        const data = JSON.stringify({
            sourceId: sourceId,
            messages: [{
                role: 'user',
                content: content
            }]
        });
        xhr.send(data);
    });
}
