window.function = async function(src, ctnt, checkRep) {
  src = src.value ?? "";
  ctnt = ctnt.value ?? "";
  checkRep = checkRep.value ?? "";
  
  // Vérifier si la colonne Réponse est vide
  if (checkRep === "") {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://api.chatpdf.com/v1/chats/message');
      xhr.setRequestHeader('x-api-key', 'sec_oVR5DxgcOAjbB4eFwiObjHtzH1U9IpiB');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.responseText);
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
  } else {
    // Colonne réponse non vide, renvoyer une réponse déjà envoyée
    return 'Réponse déjà envoyé';
    return new Promise((resolve, reject) => {
      reject(new Error('Réponse déjà envoyée'));
    });
  }
};
