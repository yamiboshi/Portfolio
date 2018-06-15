window.addEventListener('load', main);
// all the questions , answers (odp is short from polish odpowiedż which means answer) and correct aswers indicator
var questions = [
    {question:'Are you a student?', odp:['Yes','No','I will be soon'],correct:1 },
    {question:'Are you a veteran?', odp:['Yes','No','No more'],correct:1},
    {question:'Have you done drugs?', odp:['Yes','No','I used to'],correct:1},
    {question:'Have you worked with B.B.O.C before?', odp:['Yes','No','You might say that'],correct:1 },
    {question:'In which sector would you like to work in?', odp:['Managment','Delivery','Production'],correct:1 },
    {question:'What level of education do you have?', odp:['Finished highshcool', 'Masters degree',"B.B.O.C.'s Masters degree"],correct:2 },
    {question:'Do you have criminal past?', odp:['Yes','No','No more'],correct:1 },
    {question:'Do you know what "_wintermute" is?', odp:['Yes','No','I know some urban legends'],correct:1 },
    {question:'Do you have letter of recomendation from one of our managers?', odp:['Yes','No',"I'm manager"],correct:0 },
    {question:'Do you find it wrong to kill?', odp:['Yes','No','Not the bad guys'],correct:1 },
    {question:'Do you have a family?', odp:['Yes','No','I used to'],correct:0 },
    {question:'Do you know how to use a gun?', odp:['Yes','No','I used to'],correct:0 },
    {question:'Do you know any martial arts?', odp:['Yes','No','I used to'],correct:0 },
    {question:'Do you have any exploitable weaknesses?', odp:['Yes','No','A lot'],correct:2 }
];


// links to right places in the HTML file
var question;
var answers;

// boxes for needed values
var currentIndex;
var currentQuestion = {odp:"arggt"}; // this value is premade because the console was flaging an error after clicking starting button

// final score value
var score = 0;

function main ()
{
    console.log("main!");
    console.log(questions);

    // link question and answer buttons
    question = document.getElementById('question');
    answers = document.getElementsByClassName('answers');
    console.log(answers);

    //hidding all but first button at the begining
    for (var i=1;i<answers.length;i++)
    {
        answers[i].setAttribute('id', 'hidden');
    }

    // setting event listeners to all the buttons
    for (var i=0;i<answers.length;i++)
        {
            answers[i].addEventListener('click', loadQuiz);
        }


}
function loadQuiz() 
{
    // revealing the hidden buttons
    for (var i=1;i<answers.length;i++)
    {
        answers[i].removeAttribute('id', 'hidden');
    }

    // checking if there are questions left
    if  (questions.length <= 0)
    {
         // checking if the answer is correct
        if(event.target.innerHTML == currentQuestion.odp[currentQuestion.correct])
        {
            //if it is adding 1 to the score
            score++;
            console.log('correct');
        }
        console.log('LastQuestion');
        // if there aren't  = load the last question
        lastQuestion();
    }
    else 
    {
        // checking if the answer is correct
        if(event.target.innerHTML == currentQuestion.odp[currentQuestion.correct])
        {
            //if it is +1 to the score
            score++;
            console.log('correct');
        }
    
    
        //if there are pick a random question from the ones left
        currentIndex = Math.floor(Math.random()*questions.length);
        currentQuestion = questions[currentIndex];
        // loading question text into question <div>
        question.innerHTML = currentQuestion.question;
        // loading answers int answer <div>'s
        for (var i=0;i<answers.length;i++)
        {
            answers[i].innerHTML = currentQuestion.odp[i];
        }
        //removing used question from the array
        questions.splice(currentIndex,1);
        //controle console log just to be sure everything is working
        console.log(questions);
    }
}
// scripted to be the last, 11th question
function lastQuestion()
{
    // adding new event listeners to buttons
    for (var i=0;i<answers.length;i++)
        {
            answers[i].addEventListener('click', scoreDisplay);
        }
    // loading last questions's text and answers
    question.innerHTML = "What do you think about B.B.O.C.<br>(Big Bad Overlord Corporation)?";
    for (var i=0;i<answers.length;i++)
        {
            answers[i].innerHTML = "OBEY";
        }
}
// displaying the final score
function scoreDisplay()
{
    // hidding all buttons
    for (var i=0;i<answers.length;i++)
    {
        answers[i].setAttribute('id', 'hidden');
    }
    question.innerHTML = "Your Score is: " + score + ". <br> You're dismissed.";
}