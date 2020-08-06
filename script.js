var questions = [
	{
		id: 0,
		question: 'What does HTML stand for?',
		choice1: 'Home Tool Markup Language',
		choice2: 'Hyper Text Markup Language',
		choice3: 'Hyperlinks adn Text Markup Language',
		choice4: 'Hyper Typer Myper Lyper',
		answer: 'Hyper Text Markup Language'
	},
	{
		id: 1,
		question: 'Who is making the Web standards?',
		choice1: 'The World Wide Web Consortium',
		choice2: 'Google',
		choice3: 'Mozilla',
		choice4: 'Mircrosoft',
		answer: 'The World Wide Web Consortium'
	},
	{
		id: 2,
		question: 'Choose the correct HTML tag for the largest heading?',
		choice1: 'H1',
		choice2: 'Heading',
		choice3: 'Head',
		choice4: 'H6',
		answer: 'H1'
	},
	{
		id: 3,
		question: 'What is the correct HTML tag for inserting a line break?',
		choice1: 'Br',
		choice2: 'Break',
		choice3: 'Lb',
		choice4: 'Hr',
		answer: 'Br'
	},
	{
		id: 4,
		question: 'How can you make a list that lists the items with numbers?',
		choice1: 'Ol',
		choice2: 'Dl',
		choice3: 'Ul',
		choice4: 'List',
		answer: 'Ol'
	},
	{
		id: 5,
		question: 'What is the HTML tag under which one can write the JavaScript code?',
		choice1: 'JavaScript',
		choice2: 'scripted',
		choice3: 'script',
		choice4: 'js',
		answer: 'script'
	},
	{
		id: 6,
		question: 'What is the correct syntax for referring to an external script called “geek.js”?',
		choice1: 'script src=”geek.js”',
		choice2: 'script href=”geek.js”',
		choice3: 'script ref=”geek.js”',
		choice4: 'script name=”geek.js”',
		answer: 'script src=”geek.js”'
	},
	{
		id: 7,
		question: 'Which of the following is not a reserved word in JavaScript?',
		choice1: 'interface',
		choice2: 'throws',
		choice3: 'program',
		choice4: 'short',
		answer: 'program'
	},
	{
		id: 8,
		question: 'How do you write "Hello World" in an alert box?',
		choice1: "msgBox('Hello World')",
		choice2: "alert('Hello World')",
		choice3: "msg('Hello World')",
		choice4: "alertBox('Hello World')",
		answer: "alert('Hello World')"
	},
	{
		id: 9,
		question: 'How to write an IF statement in JavaScript?',
		choice1: 'if i == 5 then',
		choice2: 'if i = 5 then',
		choice3: 'if i = 5',
		choice4: 'if (i == 5)',
		answer: 'if (i == 5)'
	}
]

var score = 0;

class UI {
	static startQuiz() {
		$('#startBtn').click(() => {
			let firstQuestion = `
			<div id="questionBox" data-id="0" class="d-flex flex-column">
				<label>1.${questions[0].question}</label>
					<div>
						<input type='radio' name='choice' value="${questions[0].choice1}"> ${questions[0].choice1}
						<br>
						<input type='radio' name='choice' value="${questions[0].choice2}"> ${questions[0].choice2}
						<br>
						<input type='radio' name='choice' value="${questions[0].choice3}"> ${questions[0].choice3}
						<br>
						<input type='radio' name='choice' value="${questions[0].choice4}"> ${questions[0].choice4}
					</div>
					<div class="d-flex justify-content-around mt-4">
						<button id="check" class="btn btn-success">Confirm</button>
						<button id="nextBtn" class="btn btn-warning d-none">Next</button>
					</div>
			</div>
			`
			$('#startBtn').addClass('d-none')
			$('#questionBox').append(firstQuestion)
			
		})
	}

	static nextQuestion() {
	
		document.addEventListener('click', (e) => {
			if(e.target && e.target.getAttribute('id') == 'nextBtn') {
				let originalIndex = parseInt(e.target.parentElement.parentElement.getAttribute('data-id')) + 2
				let index = parseInt(e.target.parentElement.parentElement.getAttribute('data-id')) + 1
				let checkedInput = $("input[name='choice']:checked").length 
				if(checkedInput == 1) {
					if(index < 10) {
						let question = `
						<div id="questionBox" data-id="${index}" class="d-flex flex-column">
							<label>${originalIndex}.${questions[index].question}</label>
								<div>
									<input type='radio' name='choice' value="${questions[index].choice1}"> ${questions[index].choice1}
									<br>
									<input type='radio' name='choice' value="${questions[index].choice2}"> ${questions[index].choice2}
									<br>
									<input type='radio' name='choice' value="${questions[index].choice3}"> ${questions[index].choice3}
									<br>
									<input type='radio' name='choice' value="${questions[index].choice4}"> ${questions[index].choice4}
								</div>
								<div class="d-flex justify-content-around mt-4">
									<button id="check" class="btn btn-success">Confirm</button>
									<button id="nextBtn" class="btn btn-warning d-none">Next</button>
								</div>
						</div>
						`
						$('#questionBox').html(question)
					}
					if(index == 9) {
						let question = `
						<div id="questionBox" data-id="${index}" class="d-flex flex-column">
							<label>10.${questions[index].question}</label>
								<div>
									<input type='radio' name='choice' value="${questions[index].choice1}"> ${questions[index].choice1}
									<br>
									<input type='radio' name='choice' value="${questions[index].choice2}"> ${questions[index].choice2}
									<br>
									<input type='radio' name='choice' value="${questions[index].choice3}"> ${questions[index].choice3}
									<br>
									<input type='radio' name='choice' value="${questions[index].choice4}"> ${questions[index].choice4}
								</div>
								<div class="d-flex justify-content-around mt-4">
									<button id="check" class="btn btn-success">Confirm</button>
									<button id="resultBtn" class="btn btn-success d-none">See results</button>
								</div>
						</div>
						`
						$('#questionBox').html(question)
						document.addEventListener('click', (e) => {
						if(e.target && e.target.getAttribute('id') == 'resultBtn') {
							Logic.showResult()
							let result = `
								<h2>Your score: ${score}</h2>
								<button id="againBtn" class="btn btn-primary">Try again</button>
							`
							$('#questionBox').html(result)
						}
					})
					}
				} else {
					alert('Please choose one')
				}
				
				
			}
		})
	}
}

class Logic {
	static checkInput() {
		document.addEventListener('click', (e) => {
		if(e.target && e.target.getAttribute('id') == 'check') {
			let checkedInput = $("input[name='choice']:checked")
			let indexNumber = checkedInput.parent().parent().attr('data-id')
			console.log(indexNumber)
			if($("input[name='choice']:checked").length == 0) {
				alert('Please choose one')
			} else if($("input[name='choice']:checked").length > 0) {
				if(checkedInput.val() == questions[indexNumber].answer){
					score += 1
				}
				$('input').attr('disabled', 'disabled')
				$('#nextBtn').toggleClass('d-none')
				$('#check').toggleClass('d-none')
				$('#resultBtn').toggleClass('d-none')
			}
			console.log(score)
		}
	})
	}

	static showResult() {
		console.log(score)
	}
}

document.addEventListener('click', (e) => {
if(e.target && e.target.getAttribute('id') == 'againBtn') {
	location.reload()
}
})

UI.startQuiz()
UI.nextQuestion()
Logic.checkInput()
