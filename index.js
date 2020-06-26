var mqtt=require('mqtt')
var fs=require('fs')

optionsConnect={
    clientId:"any_id",
    ca: fs.readFileSync('certs/ca.ctr'),
    key: fs.readFileSync('certs/client.key'),
    cert: fs.readFileSync('certs/client.ctr'),
    clean:true
}

// optionsConnect={
//     clientId:"any_id",
//     clean:true
// }

optionsSubscribe={
    rap:true,
    rh : true
}

//For use with  mqtts / tls
var client = mqtt.connect("mqtts://157.230.248.143:8883",optionsConnect)
//For use with  mqtt / tcp 
//var client = mqtt.connect("mqtts://157.230.248.143:1883",optionsConnect)

client.on("connect",function(){	
    console.log("connected")    
})

client.on("error",function(error){ 
    console.log(error.message)
})

client.publish('test','I Am a message',(cb)=>{
    console.log('message sended to test topic')
})

client.subscribe('test',optionsSubscribe,(cb)=>{
    console.log('subscribe to topic test ')
})

client.on('message',function(topic, message, packet){
    console.log("message is "+ message);
    console.log("topic is "+ topic);
});
