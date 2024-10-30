import Express from "express";
import { body, validationResult } from "express-validator";
import { 
    createEmployee,
    readEmployees,
    readEmployeeById,
    updateEmployee,
    deleteEmployee    
} from "./EmployeesRules.js";

const server = Express();  
const port = 3300;
const allowedFields = [
    "Nome",
    "Idade",
    "Cidade",
    "Cargo",
    "CPF",
    "Endereco",
    "Codigo_Funcionario",
    "Status"
];

server.use(Express.json());

server.post(
    "/employees",    
    [
        body("Nome").notEmpty().withMessage("O nome é obrigatório."),
        body("Cargo").notEmpty().withMessage("O cargo é obrigatório."),
        body("CPF").notEmpty().withMessage("O CPF é obrigatório."),
        body("Endereco").notEmpty().withMessage("O endereço é obrigatório."),
        body("Cidade").notEmpty().withMessage("A Cidade é obrigatório."),
        body("Codigo_Funcionario").notEmpty().withMessage("O código do funcionário é obrigatório.").isInt().withMessage("O código do funcionário deve ser um valor número."),
        body("Idade").notEmpty().withMessage("A idade é obrigatório.").isInt().withMessage("A idade deve ser um valor número."),
        body("Status").notEmpty().withMessage("O status é obrigatório.").isBoolean().withMessage("Status deve ser um valor booleano.")
    ],
    (req, res) => {        
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let newData = Object.keys(req.body)
            .filter((key) => allowedFields.includes(key))
            .reduce((obj, key) => {
                obj[key] = req.body[key];
                return obj;
            }, {});
        let newEmployee = createEmployee(newData);
        res.status(201).json(newEmployee);
    }
);

server.get("/employees", (req, res) => {
    let employees = readEmployees();
    res.json(employees);
});

server.get("/employees/:id", (req, res) => {
    let employee = readEmployeeById(req.params.id);
    if(employee){
        res.json(employee);
    }else {
        res.status(404).json({Message: "Funcionario não encontrado."});
    }    
});

server.put("/employees/:id",
    [
        body("Nome").notEmpty().withMessage("O nome é obrigatório."),
        body("Cargo").notEmpty().withMessage("O cargo é obrigatório."),
        body("CPF").notEmpty().withMessage("O CPF é obrigatório."),
        body("Endereco").notEmpty().withMessage("O endereço é obrigatório."),
        body("Cidade").notEmpty().withMessage("A Cidade é obrigatório."),
        body("Codigo_Funcionario").notEmpty().withMessage("O código do funcionário é obrigatório.").isInt().withMessage("O código do funcionário deve ser um valor número."),
        body("Idade").notEmpty().withMessage("A idade é obrigatório.").isInt().withMessage("A idade deve ser um valor número."),
        body("Status").notEmpty().withMessage("O status é obrigatório.").isBoolean().withMessage("Status deve ser um valor booleano.")
    ], (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }        
        let updatedEmployee = Object.keys(req.body)
            .filter((key) => allowedFields.includes(key))
            .reduce((obj, key) => {
                obj[key] = req.body[key];
                return obj;
            }, {});            
        let employee = updateEmployee(req.params.id, updatedEmployee);
        if(employee){
            res.json(employee); 
        }else {
            res.status(404).json({Message: "Funcionário não encontrado"});
        }    
})

server.delete("/employees/:id", (req, res) => {    
    let employee = deleteEmployee(req.params.id);
    if(employee){
        res.status(200).json({Message: "Funcionário deletado com sucesso"});
    }else {
        res.status(404).json({Message: "Funcionário não encontrado"});
    }    
});

server.listen(port, () =>{
    console.log("Funcionando");
});