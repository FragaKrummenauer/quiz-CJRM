const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')


const correctAnswers = ['B', 'A', 'A', 'B', 'A', 'A']

form.addEventListener('submit', event => {
    event.preventDefault()

    let score = 0
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]

    userAnswers.forEach(( userAnswers, index ) => {
        if ( userAnswers === correctAnswers[index] ) {
            score += 25
        }
    })

    // Recebe a Cordenada X e a Cordenada Y
    scrollTo(0, 0)

    
    finalResult.classList.remove('d-none')

    let counter = 0 

    const timer = setInterval( () => {
        
        if ( counter === score ) {
            clearInterval(timer)
        }
        finalResult.querySelector('span').textContent = `${counter}%`
        counter++
    }, 10);
})

// Executa uma função após um certo tempo que seja executada a "setTimeout"
// setTimeout( ( ) => {
//     alert('Seja Bem Vindo ao Quiz CJRM com o tema de "Filmes".')
// }, 4000)

