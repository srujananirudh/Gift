// ============================================================
// RAKSHA BANDHAN GIFT QUEST
// 15 STAGES
// ============================================================



// ============================================================
// QUESTIONS
// ============================================================

const questions = [

    // --------------------------------------------------------
    // QUESTION 1
    // --------------------------------------------------------

    {
        question:
            "If you are sleeping and suddenly your alarm rings, what do you do first?",

        options: [
            "A) Wake up",
            "B) Turn it off",
            "C) Check the time",
            "D) Dream that you turned it off"
        ],

        answer: 3
    },


    // --------------------------------------------------------
    // QUESTION 2
    // --------------------------------------------------------

    {
        question:
            "You have 5 apples and you take away 2. How many apples do you have?",

        options: [
            "A) 3",
            "B) 2",
            "C) 5",
            "D) 0"
        ],

        answer: 1
    },


    // --------------------------------------------------------
    // QUESTION 3
    // --------------------------------------------------------

    {
        question:
            "Your mother says, “Come here, I want to talk to you.” What is your first thought?",

        options: [
            "A) What did I do?",
            "B) Maybe she needs help",
            "C) Nothing",
            "D) Start running 🏃"
        ],

        answer: 0
    },


    // --------------------------------------------------------
    // QUESTION 4
    // --------------------------------------------------------

    {
        question:
            "Which is the smallest continent by land area?",

        options: [
            "A) Europe",
            "B) Antarctica",
            "C) Australia",
            "D) South America"
        ],

        answer: 2
    },


    // --------------------------------------------------------
    // QUESTION 5
    // --------------------------------------------------------

    {
        question:
            "How many months have 28 days?",

        options: [
            "A) 1",
            "B) 2",
            "C) 12",
            "D) 6"
        ],

        answer: 2
    },


    // --------------------------------------------------------
    // QUESTION 6
    // --------------------------------------------------------

    {
        question:
            "Your friend says, “I have a secret, but don't tell anyone.” What happens next?",

        options: [
            "A) You keep it forever",
            "B) You tell your best friend",
            "C) You forget it",
            "D) You say, “I won't tell anyone” and immediately start thinking who to tell 😂"
        ],

        answer: 3
    },


    // --------------------------------------------------------
    // QUESTION 7
    // --------------------------------------------------------

    {
        question:
            "What number comes next? 2, 6, 12, 20, 30, ?",

        options: [
            "A) 36",
            "B) 40",
            "C) 42",
            "D) 44"
        ],

        answer: 2
    },


    // --------------------------------------------------------
    // QUESTION 8
    // --------------------------------------------------------

    {
        question:
            "You are outside a closed room. Inside the room is one light bulb. Outside the room are three switches, but only one switch controls the bulb. You may turn the switches on or off as many times as you like, but you may enter the room only once. How can you determine which switch controls the bulb?",

        options: [

            "A) Turn Switch 1 on for 5 minutes, then turn it off. Turn Switch 2 on and immediately enter the room. If the bulb is on, it's Switch 2; if it's off, it's Switch 3.",

            "B) Turn Switch 1 on for a few minutes, then turn it off. Turn Switch 2 on and leave Switch 3 off. Enter the room: if the bulb is on, it's Switch 2; if it's off but warm, it's Switch 1; if it's off and cold, it's Switch 3.",

            "C) Turn all three switches on, then turn them off one by one. Enter the room and check which switch was turned off last.",

            "D) Turn Switch 1 and Switch 2 on together, then enter the room. If the bulb is on, Switch 1 controls it; otherwise, Switch 3 controls it."

        ],

        answer: 1
    },


    // --------------------------------------------------------
    // QUESTION 9
    // --------------------------------------------------------

    {
        question:
            "Which Indian state has the longest coastline?",

        options: [
            "A) Kerala",
            "B) Tamil Nadu",
            "C) Gujarat",
            "D) Andhra Pradesh"
        ],

        answer: 2
    },


    // --------------------------------------------------------
    // QUESTION 10
    // --------------------------------------------------------

    {
        question:
            "If someone says, “Let's go for biryani,” what is the most dangerous question to ask?",

        options: [
            "A) Chicken or mutton?",
            "B) Extra raita?",
            "C) How spicy?",
            "D) “Are you paying?” 😭"
        ],

        answer: 3
    },


    // --------------------------------------------------------
    // QUESTION 11
    // --------------------------------------------------------

    {
        question:
            "A is the brother of B. C is the mother of A. D is the father of C. How is D related to B?",

        options: [
            "A) Father",
            "B) Grandfather",
            "C) Uncle",
            "D) Brother"
        ],

        answer: 1
    },


    // --------------------------------------------------------
    // QUESTION 12
    // --------------------------------------------------------

    {
        question:
            "Which is heavier?",

        options: [
            "A) 1 kg of iron",
            "B) 1 kg of cotton",
            "C) Both are the same",
            "D) Depends on the size"
        ],

        answer: 2
    },


    // --------------------------------------------------------
    // QUESTION 13
    // --------------------------------------------------------

    {
        question:
            "What word becomes shorter when you add two letters to it?",

        options: [
            "A) Small",
            "B) Short",
            "C) Long",
            "D) Tiny"
        ],

        answer: 1
    },


    // --------------------------------------------------------
    // QUESTION 14
    // --------------------------------------------------------

    {
        question:
            "Who is commonly credited with inventing the practical incandescent light bulb?",

        options: [
            "A) Nikola Tesla",
            "B) Thomas Edison",
            "C) Albert Einstein",
            "D) Alexander Graham Bell"
        ],

        answer: 1
    },


    // --------------------------------------------------------
    // QUESTION 15
    // --------------------------------------------------------

    {
        question:
            "Where is the Supreme Court of India located?",

        options: [
            "A) Mumbai",
            "B) New Delhi",
            "C) Hyderabad",
            "D) Kolkata"
        ],

        answer: 1
    }

];



// ============================================================
// VARIABLES
// ============================================================

let currentStage = 0;



// ============================================================
// DOM ELEMENTS
// ============================================================

const startScreen =
    document.getElementById("startScreen");

const mapScreen =
    document.getElementById("mapScreen");

const questionScreen =
    document.getElementById("questionScreen");

const successScreen =
    document.getElementById("successScreen");

const giftScreen =
    document.getElementById("giftScreen");

const stageMap =
    document.getElementById("stageMap");

const questionText =
    document.getElementById("questionText");

const optionsContainer =
    document.getElementById("optionsContainer");

const stageNumber =
    document.getElementById("stageNumber");

const progressText =
    document.getElementById("progressText");

const progressBar =
    document.getElementById("progressBar");

const message =
    document.getElementById("message");



// ============================================================
// START QUEST
// ============================================================

function startQuest() {

    currentStage = 0;

    createStageMap();

    showScreen(mapScreen);

}



// ============================================================
// SHOW SCREEN
// ============================================================

function showScreen(screen) {

    document
        .querySelectorAll(".screen")
        .forEach(
            screenElement => {

                screenElement
                    .classList
                    .remove("active");

            }
        );


    screen
        .classList
        .add("active");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



// ============================================================
// CREATE STAGE MAP
// ============================================================

function createStageMap() {

    stageMap.innerHTML = "";


    for (
        let i = 0;
        i < questions.length;
        i++
    ) {

        const stage =
            document.createElement("div");


        stage.classList.add("stage");


        // ----------------------------------------------------
        // COMPLETED
        // ----------------------------------------------------

        if (i < currentStage) {

            stage.classList
                .add("completed");


            stage.innerHTML = `

                <span class="stage-icon">
                    ✅
                </span>

                <span class="stage-number">
                    Stage ${i + 1}
                </span>

            `;

        }


        // ----------------------------------------------------
        // CURRENT UNLOCKED
        // ----------------------------------------------------

        else if (i === currentStage) {

            stage.classList
                .add("unlocked");


            stage.innerHTML = `

                <span class="stage-icon">
                    🔓
                </span>

                <span class="stage-number">
                    Stage ${i + 1}
                </span>

            `;


            stage.onclick = function () {

                openQuestion(i);

            };

        }


        // ----------------------------------------------------
        // LOCKED
        // ----------------------------------------------------

        else {

            stage.classList
                .add("locked");


            stage.innerHTML = `

                <span class="stage-icon">
                    🔒
                </span>

                <span class="stage-number">
                    Stage ${i + 1}
                </span>

            `;

        }


        stageMap.appendChild(stage);

    }

}



// ============================================================
// OPEN QUESTION
// ============================================================

function openQuestion(index) {

    // Don't allow skipping stages

    if (index !== currentStage) {

        return;

    }


    const question =
        questions[index];


    stageNumber.textContent =
        `Stage ${index + 1}`;


    progressText.textContent =
        `${index + 1} / ${questions.length}`;


    progressBar.style.width =
        `${((index + 1) / questions.length) * 100}%`;


    questionText.textContent =
        question.question;


    optionsContainer.innerHTML = "";


    message.textContent = "";

    message.className =
        "message";


    question.options.forEach(
        (option, optionIndex) => {

            const button =
                document.createElement("button");


            button.className =
                "option";


            button.textContent =
                option;


            button.onclick =
                function () {

                    checkAnswer(
                        optionIndex,
                        button
                    );

                };


            optionsContainer
                .appendChild(button);

        }
    );


    showScreen(questionScreen);

}



// ============================================================
// CHECK ANSWER
// ============================================================

function checkAnswer(
    selectedIndex,
    selectedButton
) {

    const correctIndex =
        questions[currentStage].answer;


    const allButtons =
        document.querySelectorAll(".option");


    // --------------------------------------------------------
    // CORRECT ANSWER
    // --------------------------------------------------------

    if (
        selectedIndex ===
        correctIndex
    ) {

        // Disable buttons

        allButtons.forEach(
            button =>
                button.disabled = true
        );


        selectedButton
            .classList
            .add("correct");


        message.textContent =
            "🎉 Correct! You unlocked the next stage! 🔓";


        message.className =
            "message success";


        setTimeout(
            () => {

                showSuccess();

            },
            900
        );

    }


    // --------------------------------------------------------
    // WRONG ANSWER
    // --------------------------------------------------------

    else {

        selectedButton
            .classList
            .add("wrong");


        message.textContent =
            "❌ Not quite! Try again. You can do it! ❤️";


        message.className =
            "message error";


        // Only disable the clicked button
        // temporarily

        selectedButton.disabled = true;


        setTimeout(
            () => {

                selectedButton
                    .classList
                    .remove("wrong");


                selectedButton.disabled =
                    false;


                message.textContent =
                    "";

            },
            1000
        );

    }

}



// ============================================================
// SUCCESS SCREEN
// ============================================================

function showSuccess() {

    if (
        currentStage ===
        questions.length - 1
    ) {

        document.getElementById(
            "successTitle"
        ).textContent =
            "🎊 ALL STAGES COMPLETE!";


        document.getElementById(
            "successMessage"
        ).textContent =
            "You completed all 15 stages! Your gift is ready! 🎁❤️";

    }

    else {

        document.getElementById(
            "successTitle"
        ).textContent =
            "🎉 Correct!";


        document.getElementById(
            "successMessage"
        ).textContent =
            `Stage ${currentStage + 2} has been unlocked! 🔓`;

    }


    showScreen(successScreen);

}



// ============================================================
// CONTINUE QUEST
// ============================================================

function continueQuest() {

    currentStage++;


    // --------------------------------------------------------
    // ALL 15 COMPLETED
    // --------------------------------------------------------

    if (
        currentStage >=
        questions.length
    ) {

        showGift();

        return;

    }


    // --------------------------------------------------------
    // NEXT STAGE
    // --------------------------------------------------------

    createStageMap();

    showScreen(mapScreen);

}



// ============================================================
// SHOW FINAL GIFT
// ============================================================

function showGift() {

    showScreen(giftScreen);

    launchConfetti();

}



// ============================================================
// CONFETTI
// ============================================================

function launchConfetti() {

    const emojis = [

        "🎉",
        "🎊",
        "✨",
        "❤️",
        "🌸",
        "🪢",
        "🎁"

    ];


    for (
        let i = 0;
        i < 55;
        i++
    ) {

        const confetti =
            document.createElement("div");


        confetti.textContent =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];


        confetti.style.position =
            "fixed";


        confetti.style.left =
            Math.random() *
            100 +
            "vw";


        confetti.style.top =
            "-30px";


        confetti.style.fontSize =
            (
                15 +
                Math.random() * 20
            ) +
            "px";


        confetti.style.zIndex =
            "9999";


        confetti.style.pointerEvents =
            "none";


        document.body
            .appendChild(confetti);


        const duration =
            2500 +
            Math.random() * 2500;


        confetti.animate(

            [

                {
                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 1

                },

                {
                    transform:
                        `translateY(110vh) rotate(${Math.random() * 720}deg)`,

                    opacity: 0.8

                }

            ],

            {

                duration:
                    duration,

                easing:
                    "ease-out"

            }

        );


        setTimeout(
            () => {

                confetti.remove();

            },
            duration
        );

    }

}
