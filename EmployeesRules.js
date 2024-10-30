import filesystem  from "fs";

let data = [];
let lastId = 0;



 var results = filesystem.readFileSync("employees.txt", "utf-8").split("\n").filter((x) => x != "");

 results.forEach(x => {
    data.push(JSON.parse(x));
 });
 lastId = data.length > 0 ? data[data.length - 1].Id : 0; 
 

function createEmployee(employee) {
    lastId += 1;
    employee = { Id: lastId, ...employee};
    data.push(employee);
    saveFile();
    return employee;
}

function readEmployees(){
    return data;    
}

function readEmployeeById(id) {
    return data.find((employee) => employee.Id === parseInt(id))    
}

function updateEmployee(id, updatedEmployee){
    let index = data.findIndex((employee) => employee.Id === parseInt(id))
    if(index !== -1){
        data[index] = { ...data[index], ...updatedEmployee };        
        saveFile();
        return data[index];        
    }
    return null;
}

function deleteEmployee(id) {
    let index = data.findIndex((employee) => employee.Id === parseInt(id))    
    if(index !== -1){
        let deletedItem = data.splice(index, 1)[0];        
        saveFile();
        return deletedItem;                
    }
    return null;
}

function saveFile(){
    let updatedContent = data.map((employee) => JSON.stringify(employee)).join("\n") + "\n";
    filesystem.writeFileSync("employees.txt", updatedContent);
}

export { createEmployee, readEmployees, readEmployeeById, updateEmployee, deleteEmployee }

