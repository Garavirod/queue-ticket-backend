const Ticket = require('./Ticket');

class TicketList {
    constructor() {
        this.lastNumber = 0;
        this.asigned = [];
        this.queue = [];
    }
    /* GETTERS */
    get nextNumber(){
        this.lastNumber ++;
        return this.lastNumber;
    }

    get latest13(){
        return this.asigned.slice(0,3);
    }

    createTicket(){
        const newTicket =  new Ticket( this.nextNumber() );
        this.queue.push(newTicket);
        return newTicket;
    }

    asignTicket( agent, desktop){
        if(this.queue.length === 0)
            return null;
        
        const nextTicket = this.queue.shift();
        nextTicket.agent = agent;
        nextTicket.desktop = desktop;

        this.asigned.unshift(nextTicket);
        return nextTicket;
    }
}

module.exports = TicketList;