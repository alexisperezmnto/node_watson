const express = require('express');
const app = express();



//Conexión a Watson
const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');
 
const assistant = new AssistantV2({
  authenticator: new IamAuthenticator({ apikey: "tvJOxT3at9S0v4u14lcYHjXK9_c4bCWruDqTPFUmMljo" }),
  url: 'https://gateway.watsonplatform.net/assistant/api/',
  version: '2018-09-19'
});


//Crear session
var sessionId;

assistant.createSession({
  assistantId: '4043060f-f4e4-447c-821c-e57b953ceccb'
})
  .then(res => {
    //console.log(JSON.stringify(res, null, 2));

    sessionId = res.result.session_id;

    console.log(sessionId);
  })
  .catch(err => {
    console.log(err);
  });
 
// assistant.message(
//   {
//     input: { text: "What's the weather?" },
//     assistantId: '4043060f-f4e4-447c-821c-e57b953ceccb',
//     sessionId: sessionId,
//   })
//   .then(response => {
//     console.log(JSON.stringify(response.result, null, 2));
//   })
//   .catch(err => {
//     console.log(err);
//   });





app.listen('3000', function() {
	console.log('Servidor web escuchando en el puerto 3000');
});


