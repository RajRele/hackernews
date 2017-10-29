class Developer{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getName(){
        return this.firstname + ' ' + this.lastname;
    }
}

const bharat = new Developer('Bharat', 'Rele');
console.log(bharat.getName());

class MeetingManager{
  
}