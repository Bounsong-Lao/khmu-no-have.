document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Quiz Logic
    const questions = [
        {
            question: "ປະໂຫຍກ 'ສຶມມ່າຍເລິ' (Smmaay le'.) ໃນພາສາກຶມມຸ ໝາຍຄວາມວ່າແນວໃດ?",
            options: [
                "ຂອບໃຈ",
                "ສະບາຍດີ",
                "ລາກ່ອນ",
                "ເຈົ້າຊື່ຫຍັງ?"
            ],
            answer: "ສະບາຍດີ",
            explanation: "ສຶມມ່າຍເລິ ເປັນຄຳທັກທາຍພື້ນຖານ ໝາຍເຖິງ ສະບາຍດີ."
        },
        {
            question: "ຄຳວ່າ 'ໂອຣັກບາ' (O-rak-ba.) ໝາຍຄວາມວ່າແນວໃດ?",
            options: [
                "ຂ້ອຍກິນເຂົ້າ",
                "ຂ້ອຍຮັກເຈົ້າ",
                "ຂ້ອຍໄປ",
                "ຂ້ອຍເຈັບຫົວ"
            ],
            answer: "ຂ້ອຍຮັກເຈົ້າ",
            explanation: "ໂອຣັກບາ ໝາຍເຖິງ ຂ້ອຍຮັກເຈົ້າ."
        },
        {
            question: "ໃນພາສາກຶມມຸ, ຄຳວ່າ 'ພໍ່' ແມ່ນຄຳໃດ?",
            options: [
                "ມະ",
                "ຢົງ",
                "ກຼົນ",
                "ໂຣກ"
            ],
            answer: "ຢົງ",
            explanation: "ຢົງ ໝາຍເຖິງ ພໍ່."
        },
        {
            question: "ຖ້າຕ້ອງການເວົ້າວ່າ 'ຄິດຮອດພໍ່ແມ່' ໃນພາສາກຶມມຸ, ທ່ານຈະເວົ້າຄຳໃດ?",
            options: [
                "ສຼືເອງ",
                "ຢົງມະ",
                "ສຼືເອງຢົງມະ",
                "ໂອຣັກບາ"
            ],
            answer: "ສຼືເອງຢົງມະ",
            explanation: "ສຼືເອງຢົງມະ ໝາຍເຖິງ ຄິດຮອດພໍ່ແມ່."
        },
        {
            question: "ຄຳວ່າ 'ກຼົນໂຣກ' ໃນພາສາກຶມມຸ ໝາຍເຖິງຫຍັງ?",
            options: [
                "ຄົນຮັ່ງມີ",
                "ຄົນຈົນ",
                "ຄົນດີ",
                "ຄົນຊົ່ວ"
            ],
            answer: "ຄົນຈົນ",
            explanation: "ກຼົນ ໝາຍເຖິງ ຄົນ, ໂຣກ ໝາຍເຖິງ ຈົນ. ສະນັ້ນ, ກຼົນໂຣກ ໝາຍເຖິງ ຄົນຈົນ."
        },
        {
            question: "ຄຳໃດໃນພາສາກຶມມຸທີ່ແປວ່າ 'ບໍ່ມີ'?",
            options: [
                "ອາ",
                "ອຳ",
                "ອຳອາ",
                "ມີອາ"
            ],
            answer: "ອຳອາ",
            explanation: "ອຳ ໝາຍເຖິງ ບໍ່, ອາ ໝາຍເຖິງ ມີ. ສະນັ້ນ, ອຳອາ ໝາຍເຖິງ ບໍ່ມີ."
        },
        {
            question: "ຖ້າທ່ານຕ້ອງການເວົ້າວ່າ 'ລາວຜູ້ຍິງງາມ' ໃນພາສາກຶມມຸ, ທ່ານຈະເວົ້າຄຳໃດ?",
            options: [
                "ເມເບຼຍ",
                "ບາເບຼຍ",
                "ໂອເບຼຍ",
                "ນາເບຼຍ"
            ],
            answer: "ບາເບຼຍ",
            explanation: "ບາ ແມ່ນ ລາວຜູ້ຍິງ, ເບຼຍ ແມ່ນ ງາມ. ສະນັ້ນ ບາເບຼຍ ໝາຍເຖິງ ລາວຜູ້ຍິງງາມ."
        },
        {
            question: "ຄຳວ່າ 'ດີໃຈ' ໃນພາສາກຶມມຸ ແມ່ນຄຳໃດ?",
            options: [
                "ເລີະ",
                "ຫຼືເຍື້ອມ",
                "ເລີະຫຼືເຍື້ອມ",
                "ຕຼືແນມ"
            ],
            answer: "ເລີະຫຼືເຍື້ອມ",
            explanation: "ເລີະ ໝາຍເຖິງ ດີ, ຫຼືເຍື້ອມ ໝາຍເຖິງ ຫົວໃຈ. ສະນັ້ນ, ເລີະຫຼືເຍື້ອມ ໝາຍເຖິງ ດີໃຈ."
        },
        {
            question: "ຖ້າທ່ານຢາກບອກໃຫ້ໃຜຜູ້ໜຶ່ງ 'ຢູ່ຊື່ໆ' ໃນພາສາກຶມມຸ, ທ່ານຈະເວົ້າຄຳໃດ?",
            options: [
                "ຢັດ",
                "ເປໍະໆ",
                "ຢັດເປຼໍະໆ",
                "ກຼູນ"
            ],
            answer: "ຢັດເປຼໍະໆ",
            explanation: "ຢັດ ໝາຍເຖິງ ຢູ່, ເປໍະໆ ໝາຍເຖິງ ຊື່ໆ. ສະນັ້ນ, ຢັດເປຼໍະໆ ໝາຍເຖິງ ຢູ່ຊື່ໆ."
        },
        {
            question: "ຄຳວ່າ 'ເຫັນລາວຜູ້ຍິງ' ໃນພາສາກຶມມຸ ແມ່ນຄຳໃດ?",
            options: [
                "ກຼູນເມ",
                "ກຼູນບາ",
                "ເບິຫມາະ",
                "ເອືອກອົມ"
            ],
            answer: "ກຼູນບາ",
            explanation: "ກຼູນ ໝາຍເຖິງ ເຫັນ, ບາ ໝາຍເຖິງ ລາວຜູ້ຍິງ. ສະນັ້ນ, ກຼູນບາ ໝາຍເຖິງ ເຫັນລາວຜູ້ຍິງ."
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const quizContainer = document.getElementById('quiz-container');
    const quizResults = document.getElementById('quiz-results');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');
    const scoreSpan = document.getElementById('score');
    const totalQuestionsSpan = document.getElementById('total-questions');

    startQuizBtn.addEventListener('click', startQuiz);
    restartQuizBtn.addEventListener('click', startQuiz);

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        quizResults.style.display = 'none';
        quizContainer.style.display = 'block';
        totalQuestionsSpan.textContent = questions.length;
        displayQuestion();
    }

    function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            quizContainer.innerHTML = `
                <div class="quiz-question">
                    <h3>${q.question}</h3>
                    <ul class="quiz-options">
                        ${q.options.map(option => `<button>${option}</button>`).join('')}
                    </ul>
                    <div class="feedback"></div>
                    <button id="next-question-btn" style="display:none;">ຄຳຖາມຕໍ່ໄປ</button>
                </div>
            `;
            const optionButtons = quizContainer.querySelectorAll('.quiz-options button');
            optionButtons.forEach(button => {
                button.addEventListener('click', selectAnswer);
            });
        } else {
            showResults();
        }
    }

    function selectAnswer(event) {
        const selectedButton = event.target;
        const userAnswer = selectedButton.textContent;
        const currentQuestion = questions[currentQuestionIndex];
        const feedbackDiv = quizContainer.querySelector('.feedback');
        const nextBtn = document.getElementById('next-question-btn');
        const optionButtons = quizContainer.querySelectorAll('.quiz-options button');

        optionButtons.forEach(button => {
            button.disabled = true;
            if (button.textContent === currentQuestion.answer) {
                button.classList.add('correct');
            } else {
                button.classList.add('wrong');
            }
        });

        if (userAnswer === currentQuestion.answer) {
            score++;
            feedbackDiv.textContent = "ຖືກຕ້ອງ! 👍";
            feedbackDiv.classList.remove('wrong');
            feedbackDiv.classList.add('correct');
        } else {
            feedbackDiv.textContent = `ຜິດ! ຄຳຕອບທີ່ຖືກຕ້ອງແມ່ນ: "${currentQuestion.answer}". ${currentQuestion.explanation}`;
            feedbackDiv.classList.remove('correct');
            feedbackDiv.classList.add('wrong');
        }
        nextBtn.style.display = 'block';
        nextBtn.addEventListener('click', nextQuestion);
    }

    function nextQuestion() {
        currentQuestionIndex++;
        displayQuestion();
    }

    function showResults() {
        quizContainer.style.display = 'none';
        quizResults.style.display = 'block';
        scoreSpan.textContent = score;
    }

    // Initial load: show start button
    document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
});
