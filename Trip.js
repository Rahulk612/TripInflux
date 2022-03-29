class Check {
  constructor(input) {
    Object.assign(this, input);
  }

  fill(member) {
    this.member = member;
  }

  isFreeSpace() {
    return !this.member;
  }

  release() {
    this.member = undefined;
  }
}

class Trip {
  constructor(trip) {
    this.Groups = "";
    this.members = new Set();
    this.expenses = [];

  }

  CreateGroup(NameOfGroup) {
    this.Groups = NameOfGroup;
  }

  hasMember(member) {
    return this.members.has(member);
  }

  hasExpenses(member) {
    let flag = false;
    this.expenses.filter((e) => {
      if (e.name === member) {
        flag = true;
        return flag;
      }
    });
    return flag;
  }

  AddMembers(member) {
    if (!this.members.has(member)) {
      this.members.add(member);
      console.log(`${member} is added in trip plan`);
      console.log(
        `total number of members are now ${
          this.members.size
        } and members are ${Array.from(this.members.values())}`
      );
    }
  }

  AddExpenses(person, expenses) {
    if (person && expenses) {
      let obj = {
        name: person,
        expenses,
      };
      if (this.hasMember(person)) {
        if (this.hasExpenses(person)) {
          this.expenses.filter((e) => {
            if (e.name === person) {
              e.expenses += expenses;
              return;
            }
          });
        } else {
          this.expenses.push(obj);
        }
      } else {
        console.log(`${person} is not found`);
      }
    } else return;
  }

  SplitExpenses(){
      let total = 0
      this.expenses.filter((e) => (total += e.expenses));
      this.totalExpenses = total
      this.PerPerson = (this.totalExpenses/this.members.size).toFixed(2)
      let owes = ''
      this.expenses.filter((e)=>{
            if(e.expenses-this.PerPerson > 0){
                owes += e.name
            }
      })
      this.expenses.filter((e)=>{
          if(e.expenses-this.PerPerson < 0){
              console.log(
                `${e.name} owes ${Math.abs(e.expenses - this.PerPerson).toFixed(2)} to ${owes}`
              );
          }
      })
      
  }

}

Main();

function Main(){
    const Group = new Trip();

    Group.CreateGroup("Rahul Group");

    Group.AddMembers("Rahul");
    Group.AddMembers("Vishal");
    Group.AddMembers("Manish");
    Group.AddExpenses("Rahul", 30);
    Group.AddExpenses("Vishal", 30);
    Group.AddExpenses("Manish",30)

    Group.SplitExpenses();

    console.log(Group);
}
Extra()

function Extra(){
    const Group = new Trip();

    Group.CreateGroup("Rahul Group");
    Group.AddMembers("Rahul");
    Group.AddMembers("Vishal");
    Group.AddMembers("Manish");

    let Names = ["Rahul","Vishal","Manish"]


    for(let i  = 0; i<100; i++){
        Group.AddExpenses(
          Names[Math.floor(Math.random() * Names.length)],(
            Math.floor(Math.random() * (100 - 1 + 1)) + 1
          )
        );
    }

    Group.SplitExpenses();
    console.log(Group)
}
