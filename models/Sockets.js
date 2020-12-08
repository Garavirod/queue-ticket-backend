const TicketList = require('./TicketList');
class Sockets{
    constructor(io){
        this.io=io;    
        this.ticketList =  new TicketList();
        this.socketEvents();
    }

    socketEvents(){
        // On Connection Where 'socket' is the client connected
        this.io.on('connection', (socket) => {  
            console.log('client logged');               
            // Events on
            socket.on('request-ticket',(data,callback)=>{
                const newTicket = this.ticketList.createTicket();                
                callback(newTicket);
            })

         });
    }
}

module.exports = Sockets;