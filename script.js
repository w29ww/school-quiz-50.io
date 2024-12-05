const questions = [
  {
    "question": "Кто приходит с подарками на Новый год?",
    "optionA": "Почтальон",
    "optionB": "Учитель",
    "optionC": "Полицейский",
    "optionD": "Дед Мороз",
    "correctOption": "optionD"
  },
  {
    "question": "Что мы вешаем на елку?",
    "optionA": "Картины",
    "optionB": "Фотографии",
    "optionC": "Овощи",
    "optionD": "Игрушки",
    "correctOption": "optionD"
  },
  {
    "question": "Какое животное обычно изображено на новогодних открытках?",
    "optionA": "Лев",
    "optionB": "Снеговик",
    "optionC": "Змея",
    "optionD": "Птица",
    "correctOption": "optionB"
  },
  {
    "question": "Что надевают на Новый год, чтобы было тепло?",
    "optionA": "Платья",
    "optionB": "Брюки",
    "optionC": "Плащи",
    "optionD": "Шапки",
    "correctOption": "optionD"
  },
  {
    "question": "Что кладут под елку?",
    "optionA": "Веники",
    "optionB": "Подарки",
    "optionC": "Книги",
    "optionD": "Одежда",
    "correctOption": "optionB"
  },
  {
    "question": "Какой напиток часто пьют под бой курантов?",
    "optionA": "Кока-кола",
    "optionB": "Шампанское",
    "optionC": "Вода",
    "optionD": "Чай",
    "correctOption": "optionB"
  },
  {
    "question": "Что едят на новогоднем столе?",
    "optionA": "Бутерброды",
    "optionB": "Салаты",
    "optionC": "Лекарства",
    "optionD": "Моющее средство",
    "correctOption": "optionB"
  },
  {
    "question": "Как называется традиционное новогоднее украшение, которое блестит?",
    "optionA": "Шнурок",
    "optionB": "Коробка",
    "optionC": "Печенье",
    "optionD": "Гирлянда",
    "correctOption": "optionD"
  },
  {
    "question": "Что делают дети, чтобы узнать, что лежит под елкой?",
    "optionA": "Читают",
    "optionB": "Играют",
    "optionC": "Открывают подарки",
    "optionD": "Готовят",
    "correctOption": "optionC"
  },
  {
    "question": "Что символизирует елка на Новый год?",
    "optionA": "Грусть",
    "optionB": "Зло",
    "optionC": "Радость",
    "optionD": "Страх",
    "correctOption": "optionC"
  },
  {
    "question": "Что одевает Дед Мороз?",
    "optionA": "Платье",
    "optionB": "Шорты",
    "optionC": "Рубашку",
    "optionD": "Костюм",
    "correctOption": "optionD"
  },
  {
    "question": "Что обычно едят на Новый год?",
    "optionA": "Овощи",
    "optionB": "Фрукты",
    "optionC": "Конфеты",
    "optionD": "Грибы",
    "correctOption": "optionC"
  },
  {
    "question": "Что зажигают, чтобы елка засияла?",
    "optionA": "Огонь",
    "optionB": "Фонари",
    "optionC": "Факелы",
    "optionD": "Гирлянды",
    "correctOption": "optionD"
  },
  {
    "question": "Какой вид транспорта часто используют Дед Мороз и Снегурочка?",
    "optionA": "Автомобиль",
    "optionB": "Самолет",
    "optionC": "Поезд",
    "optionD": "Сани",
    "correctOption": "optionD"
  },
  {
    "question": "Какого животного используют, чтобы украсить дом на Новый год?",
    "optionA": "Птицы",
    "optionB": "Снеговик",
    "optionC": "Рыбы",
    "optionD": "Коты",
    "correctOption": "optionB"
  },
  {
    "question": "Что часто кладут в канун Нового года на стол?",
    "optionA": "Дрова",
    "optionB": "Приборы",
    "optionC": "Мешки",
    "optionD": "Сумки",
    "correctOption": "optionB"
  },
  {
    "question": "Что часто используют, чтобы написать поздравление с Новым годом?",
    "optionA": "Гвозди",
    "optionB": "Камни",
    "optionC": "Ножи",
    "optionD": "Ручки",
    "correctOption": "optionD"
  },
  {
    "question": "Что символизирует елочка в зимние праздники?",
    "optionA": "Осень",
    "optionB": "Весну",
    "optionC": "Зиму",
    "optionD": "Лето",
    "correctOption": "optionC"
  },
  {
    "question": "Какой предмет обычно украшают блестящими игрушками?",
    "optionA": "Окно",
    "optionB": "Дом",
    "optionC": "Машина",
    "optionD": "Елка",
    "correctOption": "optionD"
  },
  {
    "question": "Что часто делают в Новогоднюю ночь?",
    "optionA": "Готовят еду",
    "optionB": "Изучают английский",
    "optionC": "Смотрят праздничные передачи",
    "optionD": "Шьют одежду",
    "correctOption": "optionC"
  },
  {
	"question": "Какой праздник является предвестником Нового года?",
	"optionA": "День Победы",
	"optionB": "Рождество",
	"optionC": "День матери",
	"optionD": "Пасха",
	"correctOption": "optionB"
  },
  {
    "question": "Какой праздник приближает Новый год?",
    "optionA": "День рождения",
    "optionB": "День отдыха",
    "optionC": "Рождество",
    "optionD": "День любви",
    "correctOption": "optionC"
  },
  {
    "question": "Что означает слово \"канун\"?",
    "optionA": "Начало",
    "optionB": "Преддверие",
    "optionC": "Выход",
    "optionD": "Завершение",
    "correctOption": "optionB"
  },
  {
    "question": "Где Дед Мороз хранит свои подарки?",
    "optionA": "В школе",
    "optionB": "В мешке",
    "optionC": "В доме",
    "optionD": "В больнице",
    "correctOption": "optionB"
  },
  {
    "question": "Что часто рисуют на новогодних открытках?",
    "optionA": "Самолеты",
    "optionB": "Книги",
    "optionC": "Елки и снеговиков",
    "optionD": "Трассы",
    "correctOption": "optionC"
  },
  {
    "question": "Какой звук ассоциируется с Новым годом?",
    "optionA": "Крики птиц",
    "optionB": "Шум ветра",
    "optionC": "Бой курантов",
    "optionD": "Шум дождя",
    "correctOption": "optionC"
  },
  {
    "question": "Когда обычно начинается празднование Нового года?",
    "optionA": "В полдень",
    "optionB": "Вечером",
    "optionC": "Ночью",
    "optionD": "Утром",
    "correctOption": "optionC"
  },
  {
    "question": "Как называют новогодние праздники в английском языке?",
    "optionA": "Halloween",
    "optionB": "Christmas",
    "optionC": "Easter",
    "optionD": "New Year's Eve",
    "correctOption": "optionB"
  }
]


let shuffledQuestions = []

function handleQuestions() { 
  while (shuffledQuestions.length <= 9) {
      const random = questions[Math.floor(Math.random() * questions.length)]
      if (!shuffledQuestions.includes(random)) {
          shuffledQuestions.push(random)
      }
  }
}


let questionNumber = 1
let playerScore = 0
let wrongAttempt = 0
let indexNumber = 0

function NextQuestion(index) {
  handleQuestions()
  const currentQuestion = shuffledQuestions[index]
  document.getElementById("question-number").innerHTML = questionNumber
  document.getElementById("player-score").innerHTML = playerScore
  document.getElementById("display-question").innerHTML = currentQuestion.question;
  document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
  document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
  document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
  document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
  const currentQuestion = shuffledQuestions[indexNumber]
  const currentQuestionAnswer = currentQuestion.correctOption 
  const options = document.getElementsByName("option");
  let correctOption = null

  options.forEach((option) => {
      if (option.value === currentQuestionAnswer) {
          correctOption = option.labels[0].id
      }
  })

  if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
      document.getElementById('option-modal').style.display = "flex"
  }

  options.forEach((option) => {
      if (option.checked === true && option.value === currentQuestionAnswer) {
          document.getElementById(correctOption).style.backgroundColor = "green"
          playerScore++
          indexNumber++
          setTimeout(() => {
              questionNumber++
          }, 1000)
      }

      else if (option.checked && option.value !== currentQuestionAnswer) {
          const wrongLabelId = option.labels[0].id
          document.getElementById(wrongLabelId).style.backgroundColor = "red"
          document.getElementById(correctOption).style.backgroundColor = "green"
          wrongAttempt++ 
          indexNumber++
          setTimeout(() => {
              questionNumber++
          }, 100)
      }
  })
}



function handleNextQuestion() {
  checkForAnswer()
  unCheckRadioButtons()
  setTimeout(() => {
      if (indexNumber <= 9) {
          NextQuestion(indexNumber)
      }
      else {
          handleEndGame()
      }
      resetOptionBackground()
  }, 1000);
}

function resetOptionBackground() {
  const options = document.getElementsByName("option");
  options.forEach((option) => {
      document.getElementById(option.labels[0].id).style.backgroundColor = ""
  })
}

function unCheckRadioButtons() {
  const options = document.getElementsByName("option");
  for (let i = 0; i < options.length; i++) {
      options[i].checked = false;
  }
}

function handleEndGame() {
  let remark = null
  let remarkColor = null

  if (playerScore <= 3) {
      remark = "Плохая оценка, Продолжай практиковаться."
      remarkColor = "red"
  }
  else if (playerScore >= 4 && playerScore < 7) {
      remark = "Средняя оценка, ты можешь добиться большего."
      remarkColor = "orange"
  }
  else if (playerScore >= 7) {
      remark = "Отлично, продолжайте в том же духе."
      remarkColor = "green"
  }
  const playerGrade = (playerScore / 10) * 100

  document.getElementById('remarks').innerHTML = remark
  document.getElementById('remarks').style.color = remarkColor
  document.getElementById('grade-percentage').innerHTML = playerGrade
  document.getElementById('wrong-answers').innerHTML = wrongAttempt
  document.getElementById('right-answers').innerHTML = playerScore
  document.getElementById('score-modal').style.display = "flex"

}

function closeScoreModal() {
  questionNumber = 1
  playerScore = 0
  wrongAttempt = 0
  indexNumber = 0
  shuffledQuestions = []
  NextQuestion(indexNumber)
  document.getElementById('score-modal').style.display = "none"
}

function closeOptionModal() {
  document.getElementById('option-modal').style.display = "none"
}


const button = document.getElementById('snow');
const image = document.getElementById('gif-overlay');

button.addEventListener('click', () => {
  image.classList.toggle('visible');
});