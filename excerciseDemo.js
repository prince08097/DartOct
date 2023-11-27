
class Person{

    constructor(name ,age)
    {
        this.name=name;
        this.age=age;
    }

}

class Employee extends Person{

    constructor(name ,age ,role ,contact)
    {
        super(name,age);
        this.role=role;
        this.contact=contact;
    }

    getDetails()
    {
        console.log("The details of employees are:");
        console.log("Name: "+`${this.name}`+"\n Age: "+`${this.age}`+"\n Role:"+`${this.role}`+"\n Phone:"+`${this.contact}`);

    }

}

let c1=new Employee("Beron",24,"Technology Analyst",9534735119);
c1.getDetails();