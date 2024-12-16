
function gradeScore(scores){
    
    if (scores >= 70 && scores <=100){
        return "Your grade is A";
    }else if (scores >= 60 && scores <79){
        return "Your grade is B";
    }else if (scores >= 49 && scores <= 59){
        return "Your grade is C";
    }else if (scores >= 40 && scores <49){
        return "Your grade is D";
    }else if (scores >= 0 && scores <= 40){
        return "Your grade is E";
    }else {
        return "Invalide scores,,,please try again";
    }
}
//parseInt convert the input from prompt to a number because its returnned as a string
let score = parseInt(prompt("Enter your scores: "));// It prompts the user to enter the score
alert(gradeScore(score));

