let students = []
let message = "Enter the action add, remove, display, or quit: "
let namePrompt = "Enter a students name: "
let studentName, input;

function add(name) {
    students.push(name)
    return `${name} added to students array!`
}

function remove(name) {
    for (var i = 0; i < students.length; i++){
        if (students[i].toLowerCase() == name.toLowerCase()) {
            let removedName = name
            students.pop(name)
            return `Removed ${name} from students array!`
        } else if (name == null) {
            alert("Error. Invalid enry.")
        } else if (students[i].toLowerCase() != name.toLowerCase()) {
            return `${name} not in students array.`
        }
    }
}

let display = () => {
    let student = students.forEach(student => {
        console.log(student)
    })

    return "Student Roster:\n" + student
}

while(true) {
    input = prompt(message)
    String(input).toLowerCase();

    if (input == "add") {
        studentName = prompt(namePrompt)
        console.log(add(studentName))
    } else if (input.toLowerCase() == "remove") {
        studentName = prompt(namePrompt)
        console.log(remove(studentName))
    } else if (input == "display") {
        display()
    } else if (input == "quit") {
        break
    } else {
        alert("Invalid input!")
        console.log("Error! Invalid input!")
        break
    }

    let result = prompt("Would you like to perform another action? (Y/N)")
    if (String(result).toLowerCase() == "y" || String(result).toLowerCase() == "yes") {
        continue
    } else {
        break
    }
}