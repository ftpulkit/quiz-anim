const allQuestions = [
    { question: "What is a multiway tree?", options: ["A tree with nodes having multiple children", "A tree with exactly two children per node", "A tree that balances after each insertion", "A tree with weighted edges"], correct: "A tree with nodes having multiple children", concept: "General Tree Structures" },
    { question: "What is a ternary tree?", options: ["A tree with nodes having at most three children", "A tree with nodes having at least three children", "A tree used for heap operations", "A balanced tree with weighted edges"], correct: "A tree with nodes having at most three children", concept: "Tree Variants" },
    { question: "What traversal algorithm is suitable for finding connected components in a graph represented as a tree?", options: ["Inorder traversal", "Preorder traversal", "DFS", "BFS"], correct: "DFS", concept: "Applications" },
    { question: "What is a splay tree?", options: ["A self-adjusting binary search tree", "A binary tree optimized for searching frequently accessed elements", "A tree that balances using rotations", "A tree optimized for disk storage"], correct: "A self-adjusting binary search tree", concept: "Special Trees" },
    { question: "What is the use of a segment tree?", options: ["For range queries over an array", "For graph traversal", "For sorting data", "For balancing binary search trees"], correct: "For range queries over an array", concept: "Applications" },
    { question: "What is the property of a max-heap?", options: ["Parent node is greater than its child nodes", "Parent node is smaller than its child nodes", "All nodes are balanced", "All leaf nodes are at the same level"], correct: "Parent node is greater than its child nodes", concept: "Heap Properties" },
    { question: "What is a trie?", options: ["A tree-like data structure used for storing strings", "A self-balancing binary search tree", "A weighted graph used in pathfinding", "A balanced tree for integer storage"], correct: "A tree-like data structure used for storing strings", concept: "Applications" },
    { question: "Which tree data structure is often used in map implementations?", options: ["Binary Search Tree", "Red-Black Tree", "AVL Tree", "Splay Tree"], correct: "Red-Black Tree", concept: "Applications" },
    { question: "What is the characteristic of a 2-3 tree?", options: ["It can have either 2 or 3 children per node", "Every node can contain either one or two keys", "The height is variable based on the number of elements", "It is strictly used for graph representation"], correct: "Every node can contain either one or two keys", concept: "Tree Structures" },
    { question: "What is the main purpose of a spanning tree in graphs?", options: ["Minimizing the total weight of the graph", "Maximizing graph connectivity", "Finding cycles in the graph", "Identifying the root node"], correct: "Minimizing the total weight of the graph", concept: "Graph Applications" },

    { question: "What is a binary tree?", options: ["A tree where each node has at most two children", "A tree where each node has three children", "A tree where each node has exactly one child", "A tree without any child nodes"], correct: "A tree where each node has at most two children", concept: "Tree Basics" },
    { question: "What is the height of a tree?", options: ["The total number of nodes in the tree", "The length of the longest path from root to a leaf", "The total number of edges in the tree", "The depth of the shallowest node"], correct: "The length of the longest path from root to a leaf", concept: "Tree Properties" },
    { question: "What is the degree of a node in a tree?", options: ["The number of child nodes", "The number of edges from the node", "The total number of descendants", "The level of the node in the tree"], correct: "The number of child nodes", concept: "Tree Basics" },
    { question: "What is an AVL tree?", options: ["A self-balancing binary search tree", "A complete binary tree", "A tree where nodes have values in ascending order", "A tree with no balancing mechanism"], correct: "A self-balancing binary search tree", concept: "Balanced Trees" },
    { question: "What is the time complexity of searching in a binary search tree (BST)?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], correct: "O(log n)", concept: "Time Complexity" },
    { question: "What is a full binary tree?", options: ["A tree where all levels are completely filled", "A tree where all nodes except leaves have two children", "A tree where all nodes have a single child", "A tree that has only leaf nodes"], correct: "A tree where all nodes except leaves have two children", concept: "Tree Properties" },
    { question: "What is an inorder traversal of a tree?", options: ["Visit root, left, right", "Visit left, root, right", "Visit left, right, root", "Visit right, root, left"], correct: "Visit left, root, right", concept: "Tree Traversal" },
    { question: "What is a perfect binary tree?", options: ["A binary tree in which all nodes have two children", "A binary tree in which all leaf nodes are at the same level", "A binary tree where every non-leaf node has two children", "A binary tree with only one child per node"], correct: "A binary tree in which all leaf nodes are at the same level", concept: "Tree Properties" },
    { question: "What is a leaf node in a tree?", options: ["A node with no children", "A node with only one child", "The root node of the tree", "A node that is not part of the tree"], correct: "A node with no children", concept: "Tree Basics" },
    { question: "What is a binary search tree (BST)?", options: ["A tree where each node has at most two children", "A binary tree where each node's left subtree contains smaller values and the right subtree larger values", "A tree where each node has values less than its parent", "A complete binary tree"], correct: "A binary tree where each node's left subtree contains smaller values and the right subtree larger values", concept: "Binary Search Trees" },

    { question: "What is a threaded binary tree?", options: ["A tree where pointers to empty children point to the in-order predecessor or successor", "A tree without leaves", "A tree with only one subtree at any level", "A tree without pointers"], correct: "A tree where pointers to empty children point to the in-order predecessor or successor", concept: "Implementation" },
    { question: "What is the use of a height-balanced tree?", options: ["Ensures that tree height is minimized for efficient operations", "Guarantees all nodes have equal number of children", "Ensures no null pointers", "Increases tree height for space efficiency"], correct: "Ensures that tree height is minimized for efficient operations", concept: "Balanced Trees" },
    { question: "What is a minimum spanning tree?", options: ["A tree that covers all vertices with minimal cost", "A tree with the minimum number of nodes", "A spanning tree with zero weight", "A tree containing only the smallest edges"], correct: "A tree that covers all vertices with minimal cost", concept: "Applications" },
    { question: "What is the purpose of a binary heap tree?", options: ["Used for priority queues", "Sorting numbers", "Balancing B-Trees", "Tree rotations"], correct: "Used for priority queues", concept: "Applications" },
    { question: "What is a preorder traversal of a tree?", options: ["Visit root, left, right", "Visit left, right, root", "Visit right, root, left", "Visit root, right, left"], correct: "Visit root, left, right", concept: "Tree Traversal" },
    { question: "What is a postorder traversal of a tree?", options: ["Visit root, left, right", "Visit left, right, root", "Visit right, root, left", "Visit root, right, left"], correct: "Visit left, right, root", concept: "Tree Traversal" },
    { question: "What property does a complete binary tree enforce?", options: ["Fills levels from top to bottom, left to right", "Balances tree to the left", "Prevents nodes without children", "Only left-skewed"], correct: "Fills levels from top to bottom, left to right", concept: "Tree Properties" },
    { question: "What defines a degenerate (pathological) tree?", options: ["All nodes form a single straight path", "Tree is full but unbalanced", "All leaf nodes are unevenly balanced", "Height is greater than balance factor"], correct: "All nodes form a single straight path", concept: "Tree Properties" },
    { question: "What is the application of Huffman coding tree?", options: ["Data compression", "Graph coloring", "Database indexing", "Pathfinding"], correct: "Data compression", concept: "Applications" },
    { question: "What is the maximum degree in a binary tree?", options: ["2", "3", "Unlimited", "Depends on the tree's structure"], correct: "2", concept: "Tree Basics" },
    { question: "Which traversal methods ensure a unique tree reconstruction from their outputs?", options: ["Inorder and Preorder", "Preorder and Postorder", "Inorder only", "Level-order and Inorder"], correct: "Inorder and Preorder", concept: "Tree Traversal" },
    { question: "What distinguishes a multi-way tree (B-Tree) from binary trees?", options: ["Nodes have multiple children", "Contains extra metadata", "Used in parallel programming", "Has restricted height"], correct: "Nodes have multiple children", concept: "Tree Basics" },
    { question: "What kind of tree does a heap structure follow?", options: ["Complete binary tree", "Balanced binary tree", "Degenerate binary tree", "AVL tree"], correct: "Complete binary tree", concept: "Applications" },
    { question: "What does 'weight balance' mean in tree terminology?", options: ["Nodes store weights that define balancing criteria", "No rotation needed for additions", "Links carry edges sorted by height", "Always balanced based on data-value distribution"], correct: "Nodes store weights that define balancing criteria", concept: "Tree Properties" },
    { question: "In data classification, what type of structure represents a decision tree?", options: ["Hierarchical decision nodes", "Machine-dependent trees", "Fixed-node K-trees", "Binary prioritization matrix"], correct: "Hierarchical decision nodes", concept: "Applications" },
    { question: "What constraint defines a 2-3-4 tree?", options: ["Nodes can have 2, 3, or 4 children only", "Operations become limited to two ways only", "Nested height caps performance", "Arbitrarily restricts minimum outgoing comparison loads"], correct: "Nodes can have 2, 3, or 4 children only", concept: "Advanced Paradigms" }
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
