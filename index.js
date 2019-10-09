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

    assistant.message(
	  {
	    assistantId: '4043060f-f4e4-447c-821c-e57b953ceccb',
	    sessionId: sessionId,
	    input:{
	    	'message_type': 'text',
	    	'text': 'hola'
	    }
	  })
	  .then(response => {
	    //console.log(JSON.stringify(response.result, null, 2));
	    var intents = response.result.output.intents;
	    console.log(intents[0].intent);
	  })
	  .catch(err => {
	    console.log(err);
	  });

  })
  .catch(err => {
    console.log(err);
  });
 






app.listen('5500', function() {
	console.log('Servidor web escuchando en el puerto 5500');
});


