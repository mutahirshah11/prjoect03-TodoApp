import inquirer from "inquirer";
let ToDo = [];
let condition = true;
while (condition) {
    let ToDoQuestions = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "what do you want to add to your ToDo's ?",
        },
        {
            name: 'secondQuestion',
            type: 'confirm',
            message: 'Do you want to Add more ?',
            default: "true"
        },
    ]);
    ToDo.push(ToDoQuestions.firstQuestion);
    condition = ToDoQuestions.secondQuestion;
    console.log(ToDo);
}
