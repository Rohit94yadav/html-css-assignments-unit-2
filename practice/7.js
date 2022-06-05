let employee = ["Sam", "John", "Mark", "Peter", "Simon"];
let department = ["Sales", "Marketting", "Operation", "Finance", "Tech"];
let salary  = [40000, 60000, 50000, 60000, 70000];

let data=[];
for(let i=0;i<employee.length;i++){
    let obj={};

    obj["employee"]=employee[i];
    obj["salary"]=salary[i];
    obj["department"]=department[i];

    data.push(obj)
}
console.log(data)

function employeeName(reqdata){

    for(let i=0;i<reqdata.length;i++){
        console.log(reqdata[i].employee)
    }
}
employeeName(data)

function maxsalary(reqdata){
    let person =reqdata[0];

    for(let i=0;i<reqdata.length;i++){
        if(reqdata[i].salary>person.salary){
            person=reqdata[i];
        }
    }
    console.log(person);
}
maxsalary(data);
