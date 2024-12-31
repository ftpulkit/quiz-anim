const allQuestions = [
    { question: "What is the primary characteristic of a queue data structure?", options: ["Last In First Out", "First In First Out", "Random Access", "Hierarchical Order"], correct: "First In First Out", concept: "Queue Basics" },
    { question: "Which of these operations is unique to queues?", options: ["Push", "Pop", "Enqueue", "Peek"], correct: "Enqueue", concept: "Queue Operations" },
    { question: "What does the dequeue operation do?", options: ["Removes an element from the rear", "Adds an element to the rear", "Removes an element from the front", "Adds an element to the front"], correct: "Removes an element from the front", concept: "Queue Operations" },
    { question: "Which is not a type of queue?", options: ["Circular Queue", "Priority Queue", "Double-ended Queue", "Sequential Queue"], correct: "Sequential Queue", concept: "Queue Types" },
    { question: "What is a circular queue?", options: ["A queue that uses a linked list", "A queue implemented in a circular array", "A queue with priority elements", "A queue for circular references"], correct: "A queue implemented in a circular array", concept: "Queue Types" },
    { question: "Which data structure is best for implementing breadth-first search?", options: ["Stack", "Queue", "Graph", "Tree"], correct: "Queue", concept: "Applications" },
    { question: "What happens during an overflow in a queue?", options: ["The queue becomes empty", "The queue exceeds its capacity", "New elements replace old ones", "Memory corruption occurs"], correct: "The queue exceeds its capacity", concept: "Error Handling" },
    { question: "Which of the following is an example of a priority queue?", options: ["Task scheduling", "Recursion", "Stack reversal", "Tree traversal"], correct: "Task scheduling", concept: "Queue Applications" },
    { question: "What is the time complexity of the enqueue operation in a normal queue?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], correct: "O(1)", concept: "Time Complexity" },
    { question: "What type of memory allocation is commonly used for implementing a queue?", options: ["Static", "Dynamic", "Heap", "Stack"], correct: "Dynamic", concept: "Implementation" },
    { question: "Which operation checks the next element in the queue without removing it?", options: ["Dequeue", "Enqueue", "Front", "Peek"], correct: "Peek", concept: "Queue Operations" },
    { question: "Which real-world scenario best represents a queue?", options: ["Undo operations", "Browser history", "People standing in line", "Tower of Hanoi"], correct: "People standing in line", concept: "Real-World Analogy" },
    { question: "What is a double-ended queue?", options: ["A queue where elements can only be removed from one end", "A queue with two ends for adding and removing", "A circular queue", "A queue for recursive operations"], correct: "A queue with two ends for adding and removing", concept: "Queue Types" },
    { question: "Which property makes priority queues unique?", options: ["FIFO", "LIFO", "Priority-based ordering", "Dynamic resizing"], correct: "Priority-based ordering", concept: "Queue Types" },
    { question: "What does the isEmpty function of a queue check?", options: ["If the queue is full", "If there is space for new elements", "If the queue has no elements", "The size of the queue"], correct: "If the queue has no elements", concept: "Queue Operations" },
    { question: "What is the complexity of accessing a specific element in a queue implemented with an array?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], correct: "O(n)", concept: "Time Complexity" },
    { question: "Which data structure is used in operating systems for managing processes?", options: ["Queue", "Stack", "Tree", "Heap"], correct: "Queue", concept: "Applications" },
    { question: "What happens during an underflow in a queue?", options: ["Elements are pushed back", "The queue is emptied", "Trying to dequeue from an empty queue", "The memory is reallocated"], correct: "Trying to dequeue from an empty queue", concept: "Error Handling" },
    { question: "What does the rear pointer in a queue represent?", options: ["The first element", "The last element", "The middle element", "The size of the queue"], correct: "The last element", concept: "Queue Basics" },
    { question: "Which is the best data structure for task scheduling?", options: ["Priority queue", "Stack", "Heap", "Tree"], correct: "Priority queue", concept: "Applications" },
    { question: "What is a linear queue?", options: ["A queue implemented in a single array", "A queue with dynamic resizing", "A queue with two ends", "A type of stack"], correct: "A queue implemented in a single array", concept: "Queue Basics" },
    { question: "What is the main limitation of linear queues?", options: ["Overflow occurs even when there is empty space", "Cannot handle priority elements", "Complex implementation", "Slow performance"], correct: "Overflow occurs even when there is empty space", concept: "Queue Limitations" },
    { question: "What modification is done in circular queues to overcome limitations of linear queues?", options: ["Dynamically allocated memory", "Continuous wrapping of front and rear", "Use of linked lists", "Hierarchical ordering"], correct: "Continuous wrapping of front and rear", concept: "Queue Types" },
    { question: "In a circular queue, what condition indicates that the queue is full?", options: ["rear = front", "rear = front - 1", "rear = size - 1", "rear = 0"], correct: "rear = front - 1", concept: "Queue Basics" },
    { question: "What is the main advantage of a circular queue?", options: ["Handles overflow better", "More space efficiency", "Simpler implementation", "Prioritization"], correct: "More space efficiency", concept: "Queue Applications" },
    { question: "What is the time complexity for checking if a queue is empty?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], correct: "O(1)", concept: "Time Complexity" },
    { question: "What is the deque operation in a double-ended queue?", options: ["Adding elements to the rear", "Adding elements to the front", "Removing elements from either end", "Checking size of the queue"], correct: "Removing elements from either end", concept: "Queue Types" },
    { question: "In which type of queue can elements be added or removed only based on priority?", options: ["Priority Queue", "Linear Queue", "Circular Queue", "Double-Ended Queue"], correct: "Priority Queue", concept: "Queue Types" },
    { question: "Which algorithm relies on queues for its execution?", options: ["Depth-first search", "Binary search", "Breadth-first search", "Merge sort"], correct: "Breadth-first search", concept: "Applications" },
    { question: "Which operation determines the next element to be dequeued without modifying the queue?", options: ["Enqueue", "Peek", "Dequeue", "Rear"], correct: "Peek", concept: "Queue Operations" },
    { question: "What is the major difference between a stack and a queue?", options: ["Stacks allow only random access", "Queues do not have dynamic sizes", "Order of adding/removing elements", "Stacks require linked lists"], correct: "Order of adding/removing elements", concept: "Comparison" },
    { question: "What is the queue overflow condition in a circular queue implemented with an array?", options: ["rear + 1 = front", "rear = front", "rear + 1 = size", "front = 0"], correct: "rear + 1 = front", concept: "Queue Basics" },
    { question: "How is queue implemented using linked lists?", options: ["Using head and rear pointers", "Using circular references", "Using doubly linked lists", "Using heaps"], correct: "Using head and rear pointers", concept: "Implementation" },
    { question: "Which queue type is suited for job scheduling in operating systems?", options: ["Linear queue", "Circular queue", "Priority queue", "Double-ended queue"], correct: "Priority queue", concept: "Applications" },
    { question: "What does enqueue operation do in a queue implemented with arrays?", options: ["Adds an element to the front", "Removes an element from the rear", "Adds an element to the rear", "Removes an element from the front"], correct: "Adds an element to the rear", concept: "Queue Operations" },
    { question: "What happens when a priority queue implements a min-heap?", options: ["Larger values get dequeued first", "Smaller values get dequeued first", "Elements are sorted during insertion", "Queue becomes dynamic"], correct: "Smaller values get dequeued first", concept: "Implementation" },
    { question: "In circular queues, which pointer is adjusted first during enqueue?", options: ["Front", "Rear", "Middle", "Both Front and Rear"], correct: "Rear", concept: "Queue Basics" },
    { question: "How is a linear queue different from a stack?", options: ["Different memory allocation", "Opposite order of processing", "Dynamic sizes in queue", "Hierarchical elements"], correct: "Opposite order of processing", concept: "Comparison" },
    { question: "In a double-ended queue, which operation can insert from both ends?", options: ["AddRear", "AddFront", "AddBoth", "Add"], correct: "AddBoth", concept: "Queue Types" },
    { question: "What are the main pointers used in linear queue implementation?", options: ["Top", "Front and Rear", "Rear and Bottom", "All of the above"], correct: "Front and Rear", concept: "Implementation" },
    { question: "What advantage does a circular queue have over a linear queue?", options: ["FIFO property", "Efficient space utilization", "Easier implementation", "Faster enqueue/dequeue operations"], correct: "Efficient space utilization", concept: "Queue Types" },
]

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
