class Developer{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getName(){
        return this.firstname + ' ' + this.lastname;
    }
}

class Node{
    constructor(data, left = null, right = null){
        this.val = data;
        this.left = null;
        this.right = null;
    }
}

const bharat = new Developer('Bharat', 'Rele');
console.log(bharat.getName());

class MeetingManager{
  
}