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
		question: 6,
		choice1: 1,
		choice2: 2,
		choice3: 3,
		choice4: 4,
		answer: 1
	},
	{
		id: 6,
		question: 7,
		choice1: 1,
		choice2: 2,
		choice3: 3,
		choice4: 4,
		answer: 1
	},
	{
		id: 7,
		question: 8,
		choice1: 1,
		choice2: 2,
		choice3: 3,
		choice4: 4,
		answer: 1
	},
	{
		id: 8,
		question: 9,
		choice1: 1,
		choice2: 2,
		choice3: 3,
		choice4: 4,
		answer: 1
	},
	{
		id: 9,
		question: 10,
		choice1: 1,
		choice2: 2,
		choice3: 3,
		choice4: 4,
		answer: 1
	}
]

let score = 0;

class UI {
	static startQuiz() {
		$('#startBtn').click(() => {
			let firstQuestion = `
			<div id="questionBox" data-id="0" class="d-flex flex-column">
				<label>${questions[0].question}</label>
					<div>
						<input type='radio' name='choice' value="${questions[0].choice1}"> ${questions[0].choice1}
						<br>
						<input type='radio' name='choice' value="${questions[0].choice2}"> ${questions[0].choice2}
						<br>
						<input type='radio' name='choice' value="${questions[0].choice3}"> ${questions[0].choice3}
						<br>
						<input type='radio' name='choice' value="${questions[0].choice4}"> ${questions[0].choice4}
					</div>
					<button id="nextBtn" class="btn btn-secondary">Next</button>
			</div>
			`
			$('#startBtn').addClass('d-none')
			$('#questionBox').append(firstQuestion)
		})
	}

	static nextQuestion() {
		document.addEventListener('click', (e) => {
			if(e.target && e.target.getAttribute('id') == 'nextBtn') {
				let index = parseInt(e.target.parentElement.getAttribute('data-id')) + 1
				if(index < 9) {
					let question = `
					<div id="questionBox" data-id="${index}" class="d-flex flex-column">
						<label>${questions[index].question}</label>
							<div>
								<input type='radio' name='choice' value="${questions[index].choice1}"> ${questions[index].choice1}
								<br>
								<input type='radio' name='choice' value="${questions[index].choice2}"> ${questions[index].choice2}
								<br>
								<input type='radio' name='choice' value="${questions[index].choice3}"> ${questions[index].choice3}
								<br>
								<input type='radio' name='choice' value="${questions[index].choice4}"> ${questions[index].choice4}
							</div>
							<button id="nextBtn" class="btn btn-secondary">Next</button>
					</div>
					`
					$('#questionBox').html(question)
				} else if(index == 9) {
					let question = `
					<div id="questionBox" data-id="${index}" class="d-flex flex-column">
						<label>${questions[index].question}</label>
							<div>
								<input type='radio' name='choice' value="${questions[index].choice1}"> ${questions[index].choice1}
								<br>
								<input type='radio' name='choice' value="${questions[index].choice2}"> ${questions[index].choice2}
								<br>
								<input type='radio' name='choice' value="${questions[index].choice3}"> ${questions[index].choice3}
								<br>
								<input type='radio' name='choice' value="${questions[index].choice4}"> ${questions[index].choice4}
							</div>
							<button id="resultBtn" class="btn btn-success">See results</button>
					</div>
					`
					$('#questionBox').html(question)
				}
			}
		})
	}
}


UI.startQuiz()
UI.nextQuestion()
