class EmployeePayrollData{
    id;
    name;
    salary;
    gender;
    StartDate;

    //constructor(id,name,salary){
     constructor(...params){
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.StartDate = params[4];
    }
    get name(){return this._name;}
    set name(name){
        
        this._name = name;
    }

    toString(){
        let namERegex=RegExp('^[A-Z]{1}[a-z]{3,}$');

        if(namERegex.test(this.name))
        return "id= "+ this.id+", name="+this.name+", salary="+this.salary+", gender="+this.gender+", StartDate="+this.StartDate;
        else throw "Name is Incorrect"
    }
}

let EmployeePayRollData = new EmployeePayrollData(1,"Mark",3000);
console.log(EmployeePayRollData.toString());

let EmployeePayRollData1 = new EmployeePayrollData(1,"Benl",4000,"M",new Date());
try{
console.log(EmployeePayRollData1.toString());
}catch(e){
    console.log(e);
}