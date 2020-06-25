var mqtt=require('mqtt')

optionsConnect={
    clientId:"any_id",
    username:"sammy",
    password:"password",
    clean:true
}

optionsSubscribe={
    rap:true,
    rh : true
}

//For use with  mqtts / tls
//var client = mqtt.connect("mqtts://broker1.nube-iiot.com:8883",optionsConnect)

//For use with  mqtts / tcp 
var client = mqtt.connect("mqtt://broker1.nube-iiot.com:1883",optionsConnect)

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
