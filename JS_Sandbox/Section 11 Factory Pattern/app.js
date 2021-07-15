function MemberFactory(){
  this.createMenber = function(name, type){
    let member;

    if(type === 'simple'){
      member = new SimpleMembership(name);
    } else if(type === 'standar') {
      member = new StandardMembership(name);
    } else if (type === 'super'){
      member = new SuperdMembership(name);
    }

    member.type = type;

    member.define = function(){
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    }

    return member;
  }
}

const SimpleMembership = function(name){
  this.name = name;
  this.cost = '$5';
}

const StandardMembership = function(name){
  this.name = name;
  this.cost = '$15';
}

const SuperdMembership = function(name){
  this.name = name;
  this.cost = '$25';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMenber('Pam', 'super'));
members.push(factory.createMenber('Pame', 'simple'));
members.push(factory.createMenber('Pamela', 'standar'));

// console.log(members);

members.forEach(function(member){
  member.define();
});