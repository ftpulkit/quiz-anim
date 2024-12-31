const allQuestions = [
    { question: "What is the primary purpose of a stack data structure?", options: ["Sorting", "Searching", "Storing data temporarily", "Data retrieval"], correct: "Storing data temporarily", concept: "Stack Basics" },
    { question: "Which operation is not possible in a stack?", options: ["Push", "Pop", "Peek", "Insert at random"], correct: "Insert at random", concept: "Stack Basics" },
    { question: "What is the LIFO property of a stack?", options: ["First In First Out", "Last In First Out", "Last In First Out", "First In Last Out"], correct: "Last In First Out", concept: "Stack Basics" },
    { question: "Which of the following is a valid operation on a stack?", options: ["Push", "Insert", "Delete", "Search"], correct: "Push", concept: "Stack Operations" },
    { question: "What does the peek operation do in a stack?", options: ["Removes the top element", "Returns the top element without removing it", "Checks if the stack is empty", "Adds an element to the stack"], correct: "Returns the top element without removing it", concept: "Stack Operations" },
    { question: "What happens when you try to pop from an empty stack?", options: ["Stack overflow", "Null pointer exception", "Stack underflow", "No error"], correct: "Stack underflow", concept: "Error Handling" },
    { question: "Which of the following is true about stack size?", options: ["Fixed size", "Dynamic size", "Unlimited size", "Depends on the hardware"], correct: "Fixed size", concept: "Stack Size" },
    { question: "Which of these is an application of stack?", options: ["Expression evaluation", "Database indexing", "File systems", "Memory management"], correct: "Expression evaluation", concept: "Applications" },
    { question: "What is the time complexity of the push operation in a stack?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], correct: "O(1)", concept: "Time Complexity" },
    { question: "In which of the following scenarios would you use a stack?", options: ["Undo operation in software", "Database indexing", "Search operations", "Sorting data"], correct: "Undo operation in software", concept: "Applications" },
    { question: "Which of the following best describes the stack data structure?", options: ["A linear data structure", "A hierarchical data structure", "A non-linear data structure", "A tree-like structure"], correct: "A linear data structure", concept: "Stack Characteristics" },
    { question: "What is the result of performing the pop operation on an empty stack?", options: ["Null", "Zero", "Exception", "Nothing"], correct: "Exception", concept: "Error Handling" },
    { question: "How is memory management handled in a stack?", options: ["Using dynamic memory allocation", "Using static memory allocation", "Using garbage collection", "None of the above"], correct: "Using static memory allocation", concept: "Memory Management" },
    { question: "What is the stack frame?", options: ["A part of the CPU", "The memory used by the stack", "A function call's local variables and return address", "None of the above"], correct: "A function call's local variables and return address", concept: "Memory Management" },
    { question: "Which of the following operations on a stack is a constant-time operation?", options: ["Push", "Pop", "Peek", "All of the above"], correct: "All of the above", concept: "Stack Operations" },
    { question: "Which data structure is used to implement function calls in programming?", options: ["Stack", "Queue", "Array", "Tree"], correct: "Stack", concept: "Applications" },
    { question: "What is the result of pushing 10 and 20 to an empty stack and then popping once?", options: ["10", "20", "Both 10 and 20", "Stack underflow"], correct: "20", concept: "Stack Basics" },
    { question: "What is the space complexity of a stack?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], correct: "O(n)", concept: "Time Complexity" },
    { question: "Which of these is an example of a stack operation?", options: ["Push", "Pop", "Peek", "All of the above"], correct: "All of the above", concept: "Stack Operations" },
    { question: "Which statement is true about stacks?", options: ["Elements are accessed randomly", "Elements are accessed in a linear fashion", "Elements are accessed in the reverse order of insertion", "None of the above"], correct: "Elements are accessed in the reverse order of insertion", concept: "Stack Basics" },
    { question: "What is an overflow in a stack?", options: ["Trying to access an element that doesn't exist", "Trying to push when the stack is full", "Popping from an empty stack", "None of the above"], correct: "Trying to push when the stack is full", concept: "Error Handling" },
    { question: "Which of these operations is not supported by stacks?", options: ["Insert", "Push", "Pop", "Peek"], correct: "Insert", concept: "Stack Operations" },
    { question: "How do you check if a stack is empty?", options: ["Pop", "Push", "Peek", "Check size"], correct: "Check size", concept: "Stack Operations" },
    { question: "What is the main disadvantage of a fixed-size stack?", options: ["It cannot store data", "It may overflow if the limit is exceeded", "It takes too much memory", "It has no advantage"], correct: "It may overflow if the limit is exceeded", concept: "Stack Size" },
    { question: "Which of these is true for a dynamic stack?", options: ["It has a fixed size", "It can grow or shrink in size", "It only supports push and pop", "It is always faster"], correct: "It can grow or shrink in size", concept: "Stack Size" },
    { question: "Which operation can be performed in constant time on a stack?", options: ["Push", "Pop", "Peek", "All of the above"], correct: "All of the above", concept: "Stack Operations" },
    { question: "What is a common application of stacks in recursion?", options: ["Undo operation", "Function call stack", "Expression evaluation", "Sorting data"], correct: "Function call stack", concept: "Applications" },
    { question: "What would happen if you pop from a stack that is already empty?", options: ["Stack overflow", "Stack underflow", "Null pointer exception", "No error"], correct: "Stack underflow", concept: "Error Handling" },
    { question: "What is a stack-based memory allocation?", options: ["Memory is allocated dynamically", "Memory is allocated statically", "Memory is allocated using the heap", "Memory is allocated as a stack frame"], correct: "Memory is allocated as a stack frame", concept: "Memory Management" },
    { question: "In a stack, the last element pushed is the first one to be popped. What is this property called?", options: ["FIFO", "LIFO", "FILO", "None of the above"], correct: "LIFO", concept: "Stack Basics" },
    { question: "How is a stack implemented in most programming languages?", options: ["Using arrays", "Using linked lists", "Using trees", "Using queues"], correct: "Using arrays", concept: "Implementation" },
    { question: "What is the result of popping from a stack after pushing multiple elements?", options: ["The topmost element is removed", "The second element is removed", "All elements are removed", "Nothing happens"], correct: "The topmost element is removed", concept: "Stack Basics" },
    { question: "Which operation does not affect the size of a stack?", options: ["Push", "Pop", "Peek", "None of the above"], correct: "Peek", concept: "Stack Operations" },
    { question: "What is the main advantage of using stacks in certain algorithms?", options: ["Faster search", "Efficient memory management", "Order preservation", "Reverse order processing"], correct: "Reverse order processing", concept: "Applications" },
    { question: "What is the condition for stack overflow?", options: ["Stack is empty", "Stack exceeds the maximum limit", "Stack is full", "None of the above"], correct: "Stack exceeds the maximum limit", concept: "Error Handling" },
    { question: "Which of these is a valid reason to use a stack?", options: ["To implement breadth-first search", "To implement depth-first search", "For sorting data", "For database indexing"], correct: "To implement depth-first search", concept: "Applications" },
    { question: "What happens when you push onto a full stack?", options: ["Stack overflow", "Null pointer exception", "Stack underflow", "Memory leak"], correct: "Stack overflow", concept: "Error Handling" },
    { question: "Which operation would be used to remove an element from a stack?", options: ["Push", "Pop", "Peek", "Insert"], correct: "Pop", concept: "Stack Operations" },
    { question: "Which type of stack operation is required to implement undo functionality in text editors?", options: ["Push", "Pop", "Peek", "All of the above"], correct: "Pop", concept: "Applications" },
    { question: "What happens when a stack grows beyond its limit?", options: ["It resets", "It results in overflow", "It throws an exception", "Nothing happens"], correct: "It results in overflow", concept: "Error Handling" },
    { question: "Which of the following is not a direct application of stack?", options: ["Expression evaluation", "Undo operations", "Backtracking algorithms", "Sorting algorithms"], correct: "Sorting algorithms", concept: "Applications" },
    { question: "What type of data structure is used for implementing undo/redo functionality?", options: ["Stack", "Queue", "List", "Tree"], correct: "Stack", concept: "Applications" },
    { question: "Which algorithm heavily relies on a stack?", options: ["Depth-first search", "Breadth-first search", "Merge sort", "Quick sort"], correct: "Depth-first search", concept: "Applications" },
    { question: "How does a stack help in expression evaluation?", options: ["It stores operands", "It stores operators", "It helps in operator precedence", "None of the above"], correct: "It helps in operator precedence", concept: "Applications" },
    { question: "What is the advantage of a stack over a queue?", options: ["It can access data randomly", "It stores elements in reverse order", "It works on FIFO principle", "It supports both push and pop operations"], correct: "It stores elements in reverse order", concept: "Stack Characteristics" },
    { question: "What is the time complexity of pop operation in a stack?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], correct: "O(1)", concept: "Time Complexity" },
    { question: "Which of the following is used to implement recursive calls?", options: ["Stack", "Queue", "List", "Array"], correct: "Stack", concept: "Applications" },
    { question: "What is the main purpose of peek operation in a stack?", options: ["Add elements", "Check if stack is empty", "View the top element without removing it", "Remove elements"], correct: "View the top element without removing it", concept: "Stack Operations" },
    { question: "Which of these operations can be performed without modifying the stack?", options: ["Pop", "Push", "Peek", "None"], correct: "Peek", concept: "Stack Operations" },
    { question: "Which concept is directly related to stack overflow?", options: ["Limited capacity", "Empty stack", "Full queue", "Recursive calls"], correct: "Limited capacity", concept: "Error Handling" },
    { question: "Which of these is the main feature of a stack?", options: ["LIFO", "FIFO", "Random access", "Sequential access"], correct: "LIFO", concept: "Stack Characteristics" },
    { question: "What is the ideal use case of a stack in computer systems?", options: ["Recursive function calls", "Database queries", "Searching in large datasets", "Handling user input"], correct: "Recursive function calls", concept: "Applications" },
    { question: "Which type of structure is a stack?", options: ["Tree", "Array", "Linked list", "Graph"], correct: "Array", concept: "Implementation" },
    { question: "What is the result of performing the peek operation on an empty stack?", options: ["Stack overflow", "Null pointer exception", "No error", "Stack underflow"], correct: "Stack underflow", concept: "Error Handling" },
    { question: "What is the best application of stacks?", options: ["Managing memory allocation", "Handling function calls", "Backtracking algorithms", "All of the above"], correct: "All of the above", concept: "Applications" }
];
let selectedQuestions = [];
let score = 0;
let answers = [];

function startQuiz() {
    const questionCount = parseInt(document.getElementById('question-count').value);
    selectedQuestions = getRandomQuestions(questionCount);

    if (selectedQuestions.length === 0) {
        alert("Please select a valid number of questions.");
        return;
    }

    document.getElementById('quiz-selection').style.display = 'none';
    document.getElementById('quiz-questions').style.display = 'block';

    displayQuestions();
}

function getRandomQuestions(count) {
    let questions = [];
    let randomIndexes = new Set();
    
    while (randomIndexes.size < count) {
        let randomIndex = Math.floor(Math.random() * allQuestions.length);
        randomIndexes.add(randomIndex);
    }

    randomIndexes.forEach(index => {
        questions.push(allQuestions[index]);
    });
    
    return questions;
}

function displayQuestions() {
    const container = document.getElementById('question-container');
    container.innerHTML = '';
    selectedQuestions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `  
            <p>${q.question}</p>
            ${q.options.map((option, i) => `
                <input type="radio" name="question${index}" value="${option}" id="q${index}opt${i}">
                <label for="q${index}opt${i}">${option}</label><br>
            `).join('')}
        `;
        container.appendChild(questionElement);
    });
}

function submitQuiz() {
    score = 0;
    answers = [];
    
    selectedQuestions.forEach((q, index) => {
        // Corrected selector with proper template literal usage
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            answers.push(selectedOption.value); // Store the selected answer
            if (selectedOption.value === q.correct) { // Check if it's the correct answer
                score++;
            }
        } else {
            answers.push(null); // If no option is selected
        }
    });

    showResults();
}


function showResults() {
    document.getElementById('quiz-questions').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'block';

    document.getElementById('score').innerText = `You scored ${score} out of ${selectedQuestions.length}`;

    const conceptReport = selectedQuestions.reduce((report, q, index) => {
        if (!report[q.concept]) {
            report[q.concept] = { correct: 0, incorrect: 0 };
        }
        if (answers[index] == q.correct) {
            report[q.concept].correct++;
        } else {
            report[q.concept].incorrect++;
        }
        return report;
    }, {});

    let conceptHTML = '';
    for (let concept in conceptReport) {
        conceptHTML += `<div>${concept}: ${conceptReport[concept].correct} correct, ${conceptReport[concept].incorrect} incorrect</div>`;
    }

    document.getElementById('concept-report').innerHTML = conceptHTML;
}

function resetQuiz() {
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('quiz-selection').style.display = 'block';
    score = 0;
    answers = [];
}
