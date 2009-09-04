//lightweight implementation of bayeux protocol

(function(){
  var comet = {};
  comet.send = function(msg, callback){
    _.X
  }
  comet.handshake = function(){
    comet.send([comet.buildmessage({
        channel: '/meta/handshake',
        version: "1.0",
        minimumVersion: "1.0beta",
        supportedConnectionTypes: ["long-polling"]
      })], function(x){
      comet.clientId = _.S(x).clientId;
    })
  }
  comet.connect = function(){
    comet.send([
      comet.buildmessage({
        channel: '/meta/connect',
        clientId: comet.clientId,
        connectionType: "long-polling"
      }, function(){
        
      })
    ])
  }
  comet.disconnect = function(){
    comet.send([
      comet.buildmessage({channel: '/meta/disconnect', clientId: comet.clientId})
    ], function(){
    
    })
  }
  comet.subscribe = function(channel){
    comet.send([
      comet.buildmessage({
        channel: '/meta/subscribe', 
        clientId: comet.clientId, 
        subscription: channel
      })
    ], function(){
      
    })
  }
  comet.unsubscribe = function(channel){
    comet.send([
      comet.buildmessage({
        channel: '/meta/unsubscribe', 
        clientId: comet.clientId, 
        subscription: channel,
        data: data,
        id: "post"+Math.floor(Math.random()*99999)
      })
    ], function(){
    
    })
  }
  
  comet.publish = function(channel){
    comet.send([
      comet.buildmessage({
        channel: channel, 
        clientId: comet.clientId, 
        
      })
    ], function(){
    
    })  
  }
  
  comet.buildmessage = function(d){
    return _.T(d,{

    })
  }
})()