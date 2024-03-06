window.function = async function(src, ctnt) {
  src = src ?? "src_thL0VGXcR0Azj97QAs8vI";
  ctnt = ctnt ?? "quel est le titre ?"
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
        // Gérez les erreurs côté serveur et renvoyez-les comme message d'erreur
        const errorMessage = xhr.statusText || 'Erreur lors de la requête';
        reject(new Error(errorMessage));
      }
    };
    xhr.onerror = function () {
      // Affichez les erreurs réseau
      reject(new Error('Erreur réseau lors de la requête'));
    };
    const data = JSON.stringify({
      sourceId: src,
      messages: [{
        role: 'user',
        content: ctnt
      }]
    });
    xhr.send(data);
  });
};
