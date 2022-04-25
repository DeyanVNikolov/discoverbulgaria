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
        question: 'В кой град се намира "Аспарухов мост"? ',
        choice1: 'Варна',
        choice2: 'София',
        choice3: 'Пловдив',
        choice4: 'Бургас',
        answer: 1,
        img: "img/Asparuhov_most.jpg"
    },
    {
        question: 'Какво виждате на снимката?',
        choice1: 'Крепоста "Баба Вида" - Видин',
        choice2: 'Античният театър - Пловдив',
        choice3: 'Софийски университет - София',
        choice4: 'Крепоста "Царевец" - Велико Търново',
        answer: 4,
        img: "img/tsarevets_10179d2-4368-1140x0.jpg"
    },
    {
        question: 'Кой град е известен с любовта си към хумора?',
        choice1: 'Варна',
        choice2: 'Габрово',
        choice3: 'Видин',
        choice4: 'Благоевград',
        answer: 2,
        img: "img/gabrovo_1.jpg"
    },
    {
        question: 'Къде се намира паметника "Създатели на българската държава"',
        choice1: 'София',
        choice2: 'Бургас',
        choice3: 'Велико Търново',
        choice4: 'Шумен',
        answer: 4,
        img: "https://discoverbulgaria.online/img/shumen_1.jpg"
    },
    {
        question: 'Кой град е известен със своя "музей на солта"',
        choice1: 'Поморие',
        choice2: 'Банско',
        choice3: 'Търговище',
        choice4: 'Варна',
        answer: 1,
        img: "https://discoverbulgaria.online/img/pomorie_sol.jpg"
    },
    {
        question: 'Къде се намира НДК?',
        choice1: 'Благоевград',
        choice2: 'Варна',
        choice3: 'София',
        choice4: 'Самоков',
        answer: 3,
        img: "img/980x551_1569585947.jpg"
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 6

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