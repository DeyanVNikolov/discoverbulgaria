const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []
const imgloc = document.querySelector('#imgimg');

let questions = [{
        question: 'In which city is Asparuhov Bridge?',
        choice1: 'Varna',
        choice2: 'Sofia',
        choice3: 'Plovdiv',
        choice4: 'Burgas',
        answer: 1,
        img: "img/Asparuhov_most.jpg"
    },
    {
        question: 'What do you see in the picture?',
        choice1: 'Baba Vida Fortress - Vidin',
        choice2: 'The Ancient Theater - Plovdiv',
        choice3: 'Sofia University - Sofia',
        choice4: 'Tsarevets Fortress - Veliko Turnovo',
        answer: 4,
        img: "img/tsarevets_10179d2-4368-1140x0.jpg"
    },
    {
        question: 'Which city is known for its love for humor?',
        choice1: 'Varna',
        choice2: 'Gabrovo',
        choice3: 'Vidin',
        choice4: 'Blagoevgrad',
        answer: 2,
        img: "img/gabrovo_1.jpg"
    },
    {
        question: 'Where is the Monument "Creators of the Bulgarian State" located',
        choice1: 'Sofia',
        choice2: 'Burgas',
        choice3: 'Veliko Tarnovo',
        choice4: 'Shumen',
        answer: 4,
        img: "https://discoverbulgaria.online/img/shumen_1.jpg"
    },
    {
        question: 'Which city is known for its "Salt Museum"',
        choice1: 'Pomorie',
        choice2: 'Bansko',
        choice3: 'Targovishte',
        choice4: 'Varna',
        answer: 1,
        img: "https://discoverbulgaria.online/img/pomorie_sol.jpg"
    },
    {
        question: 'Where is the National Palace of Culture?',
        choice1: 'Blagoevgrad',
        choice2: 'Varna',
        choice3: 'Sofia',
        choice4: 'Samokov',
        answer: 3,
        img: "img/980x551_1569585947.jpg"
    },
    {
        question: 'Where is the "compass" located?',
        choice1: 'Burgas',
        choice2: 'Varna',
        choice3: 'Plovdiv',
        choice4: 'Wolf dol',
        answer: 1,
        img: "https://discoverbulgaria.online/img/kompasat.jpeg"
    },
    {
        question: 'The rowing base is a symbol of ...?',
        choice1: 'Kostinbrod',
        choice2: 'Stara Zagora',
        choice3: 'Varna',
        choice4: 'Plovdiv',
        answer: 4,
        img: "https://discoverbulgaria.online/img/grebna_baza.jpg"
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 8

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.href = "end.html"
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question
    document.getElementById("imgimgimg").src=currentQuestion.img
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0


    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score += num
}

startGame()