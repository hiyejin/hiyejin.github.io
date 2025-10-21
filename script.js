// 카운터 기능
let counter = 0;

function incrementCounter() {
    counter++;
    updateCounterDisplay();
}

function decrementCounter() {
    counter--;
    updateCounterDisplay();
}

function resetCounter() {
    counter = 0;
    updateCounterDisplay();
}

function updateCounterDisplay() {
    document.getElementById('counter').textContent = counter;
}

// 배경색 변경 기능
function changeColor(color) {
    document.body.style.background = color;
}

// 할 일 목록 기능
function addTodo() {
    const input = document.getElementById('todoInput');
    const todoText = input.value.trim();

    if (todoText === '') {
        alert('할 일을 입력해주세요!');
        return;
    }

    const todoList = document.getElementById('todoList');
    const li = document.createElement('li');
    li.className = 'todo-item';

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = todoText;
    span.onclick = function() {
        li.classList.toggle('completed');
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '삭제';
    deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    input.value = '';
    input.focus();
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
}

// 페이지 로드 시 환영 메시지
window.onload = function() {
    console.log('웹페이지가 로드되었습니다!');
};
