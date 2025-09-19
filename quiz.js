var allQuestions = [
    { q: 'Which shortcut is used to copy text in MS Word?', options: ['Ctrl+C', 'Ctrl+V', 'Ctrl+X', 'Ctrl+Z'], answer: 0 },
    { q: 'What is the default file extension for MS Word 2016?', options: ['.doc', '.docx', '.txt', '.pdf'], answer: 1 },
    { q: 'Which menu contains the "Find and Replace" option?', options: ['Insert', 'Home', 'Review', 'Edit'], answer: 1 },
    { q: 'Which key is used to make text bold?', options: ['Ctrl+B', 'Ctrl+I', 'Ctrl+U', 'Ctrl+E'], answer: 0 },
    { q: 'What does the "Undo" shortcut do?', options: ['Deletes text', 'Reverses last action', 'Saves file', 'Prints file'], answer: 1 },
    { q: 'Which tab contains the "Page Layout" options?', options: ['Insert', 'Design', 'Layout', 'References'], answer: 2 },
    { q: 'How do you insert a page break?', options: ['Ctrl+Enter', 'Ctrl+Shift+N', 'Alt+P', 'Ctrl+P'], answer: 0 },
    { q: 'What is the function of "Mail Merge"?', options: ['Send emails', 'Combine documents', 'Create labels/letters', 'Encrypt file'], answer: 2 },
    { q: 'Which shortcut is used to save a document?', options: ['Ctrl+S', 'Ctrl+P', 'Ctrl+O', 'Ctrl+N'], answer: 0 },
    { q: 'Which feature checks spelling in MS Word?', options: ['Spell Check', 'Grammar Check', 'Thesaurus', 'Word Count'], answer: 0 },
    { q: 'What is the default font in MS Word 2016?', options: ['Calibri', 'Arial', 'Times New Roman', 'Verdana'], answer: 0 },
    { q: 'Which option is used to change line spacing?', options: ['Paragraph', 'Font', 'Insert', 'Review'], answer: 0 },
    { q: 'How do you select all text in a document?', options: ['Ctrl+A', 'Ctrl+E', 'Ctrl+L', 'Ctrl+T'], answer: 0 },
    { q: 'Which tab is used to insert a table?', options: ['Insert', 'Layout', 'References', 'View'], answer: 0 },
    { q: 'How do you print a document?', options: ['Ctrl+P', 'Ctrl+S', 'Ctrl+O', 'Ctrl+N'], answer: 0 },
    { q: 'Which shortcut is used to cut text?', options: ['Ctrl+X', 'Ctrl+C', 'Ctrl+V', 'Ctrl+Z'], answer: 0 },
    { q: 'What is the use of "Track Changes"?', options: ['Track edits', 'Track time', 'Track words', 'Track pages'], answer: 0 },
    { q: 'Which tab is used for references and citations?', options: ['References', 'Review', 'Insert', 'Home'], answer: 0 },
    { q: 'How do you insert a header?', options: ['Insert > Header', 'Layout > Header', 'View > Header', 'Home > Header'], answer: 0 },
    { q: 'Which shortcut is used for italics?', options: ['Ctrl+I', 'Ctrl+B', 'Ctrl+U', 'Ctrl+E'], answer: 0 },

    { q: 'Which symbol is used to start a formula in Excel?', options: ['=', '+', '-', '*'], answer: 0 },
    { q: 'What is the default file extension for Excel 2016?', options: ['.xls', '.xlsx', '.csv', '.docx'], answer: 1 },
    { q: 'Which function adds a range of cells?', options: ['SUM', 'AVERAGE', 'COUNT', 'MAX'], answer: 0 },
    { q: 'How do you make text bold in Excel?', options: ['Ctrl+B', 'Ctrl+I', 'Ctrl+U', 'Ctrl+P'], answer: 0 },
    { q: 'Which shortcut is used to save a workbook?', options: ['Ctrl+S', 'Ctrl+P', 'Ctrl+O', 'Ctrl+N'], answer: 0 },
    { q: 'Which function finds the average?', options: ['SUM', 'AVERAGE', 'COUNT', 'MIN'], answer: 1 },
    { q: 'How do you insert a new worksheet?', options: ['Shift+F11', 'Ctrl+N', 'Ctrl+T', 'Alt+N'], answer: 0 },
    { q: 'Which chart is best for showing trends over time?', options: ['Pie', 'Bar', 'Line', 'Column'], answer: 2 },
    { q: 'What does "Merge & Center" do?', options: ['Joins cells', 'Splits cells', 'Deletes cells', 'Sorts cells'], answer: 0 },
    { q: 'Which function counts numeric values?', options: ['COUNT', 'COUNTA', 'SUM', 'MAX'], answer: 0 },
    { q: 'How do you start a new line in a cell?', options: ['Alt+Enter', 'Ctrl+Enter', 'Shift+Enter', 'Ctrl+Shift+Enter'], answer: 0 },
    { q: 'Which tab is used to insert charts?', options: ['Insert', 'Data', 'Review', 'View'], answer: 0 },
    { q: 'How do you freeze panes?', options: ['View > Freeze Panes', 'Insert > Freeze', 'Data > Freeze', 'Home > Freeze'], answer: 0 },
    { q: 'Which function returns the largest value?', options: ['MAX', 'MIN', 'SUM', 'COUNT'], answer: 0 },
    { q: 'How do you sort data?', options: ['Data > Sort', 'Home > Sort', 'Insert > Sort', 'View > Sort'], answer: 0 },
    { q: 'Which shortcut is used to open a workbook?', options: ['Ctrl+O', 'Ctrl+N', 'Ctrl+S', 'Ctrl+P'], answer: 0 },
    { q: 'What is a cell reference?', options: ['A1', 'B2', 'C3', 'All of these'], answer: 3 },
    { q: 'Which function counts blank cells?', options: ['COUNTBLANK', 'COUNT', 'COUNTA', 'SUM'], answer: 0 },
    { q: 'How do you insert a comment?', options: ['Shift+F2', 'Ctrl+F2', 'Alt+F2', 'Ctrl+Shift+F2'], answer: 0 },
    { q: 'Which tab is used for formulas?', options: ['Formulas', 'Insert', 'Data', 'Review'], answer: 0 },

    { q: 'What is the default file extension for PowerPoint 2016?', options: ['.ppt', '.pptx', '.pps', '.pot'], answer: 1 },
    { q: 'Which shortcut starts a slideshow from the beginning?', options: ['F5', 'F2', 'F7', 'F12'], answer: 0 },
    { q: 'Which tab is used to insert a new slide?', options: ['Home', 'Insert', 'Design', 'Transitions'], answer: 0 },
    { q: 'How do you duplicate a slide?', options: ['Ctrl+D', 'Ctrl+C', 'Ctrl+N', 'Ctrl+M'], answer: 0 },
    { q: 'Which view shows all slides as thumbnails?', options: ['Slide Sorter', 'Normal', 'Reading', 'Outline'], answer: 0 },
    { q: 'Which shortcut is used to save a presentation?', options: ['Ctrl+S', 'Ctrl+P', 'Ctrl+O', 'Ctrl+N'], answer: 0 },
    { q: 'How do you insert a picture?', options: ['Insert > Pictures', 'Home > Pictures', 'Design > Pictures', 'View > Pictures'], answer: 0 },
    { q: 'Which tab is used for slide transitions?', options: ['Transitions', 'Animations', 'Design', 'Insert'], answer: 0 },
    { q: 'How do you end a slideshow?', options: ['Esc', 'F5', 'F1', 'F12'], answer: 0 },
    { q: 'Which shortcut is used for bold text?', options: ['Ctrl+B', 'Ctrl+I', 'Ctrl+U', 'Ctrl+E'], answer: 0 },
    { q: 'Which tab is used to add animations?', options: ['Animations', 'Transitions', 'Design', 'Insert'], answer: 0 },
    { q: 'How do you print slides?', options: ['Ctrl+P', 'Ctrl+S', 'Ctrl+O', 'Ctrl+N'], answer: 0 },
    { q: 'Which view is best for editing slide content?', options: ['Normal', 'Slide Sorter', 'Reading', 'Outline'], answer: 0 },
    { q: 'How do you insert a chart?', options: ['Insert > Chart', 'Home > Chart', 'Design > Chart', 'View > Chart'], answer: 0 },
    { q: 'Which shortcut creates a new presentation?', options: ['Ctrl+N', 'Ctrl+O', 'Ctrl+S', 'Ctrl+P'], answer: 0 },
    { q: 'Which tab is used to change slide design?', options: ['Design', 'Transitions', 'Animations', 'Insert'], answer: 0 },
    { q: 'How do you insert a hyperlink?', options: ['Insert > Link', 'Home > Link', 'Design > Link', 'View > Link'], answer: 0 },
    { q: 'Which shortcut is used to open a presentation?', options: ['Ctrl+O', 'Ctrl+N', 'Ctrl+S', 'Ctrl+P'], answer: 0 },
    { q: 'How do you add speaker notes?', options: ['View > Notes', 'Insert > Notes', 'Design > Notes', 'Home > Notes'], answer: 0 },
    { q: 'Which tab is used to add SmartArt?', options: ['Insert', 'Design', 'Transitions', 'Animations'], answer: 0 },

    { q: 'Which shortcut is used to redo an action?', options: ['Ctrl+Y', 'Ctrl+Z', 'Ctrl+X', 'Ctrl+R'], answer: 0 },
    { q: 'Which function finds the minimum value in Excel?', options: ['MIN', 'MAX', 'SUM', 'COUNT'], answer: 0 },
    { q: 'How do you insert a footer in Word?', options: ['Insert > Footer', 'Layout > Footer', 'View > Footer', 'Home > Footer'], answer: 0 },
    { q: 'Which tab is used to check spelling in PowerPoint?', options: ['Review', 'Insert', 'Design', 'View'], answer: 0 },
    { q: 'How do you insert a page number in Word?', options: ['Insert > Page Number', 'Layout > Page Number', 'View > Page Number', 'Home > Page Number'], answer: 0 },
    { q: 'Which function returns the current date in Excel?', options: ['TODAY()', 'NOW()', 'DATE()', 'TIME()'], answer: 0 },
    { q: 'How do you insert a comment in Word?', options: ['Review > New Comment', 'Insert > Comment', 'Layout > Comment', 'Home > Comment'], answer: 0 },
    { q: 'Which shortcut is used to open the print dialog?', options: ['Ctrl+P', 'Ctrl+S', 'Ctrl+O', 'Ctrl+N'], answer: 0 },
    { q: 'How do you insert a text box in PowerPoint?', options: ['Insert > Text Box', 'Home > Text Box', 'Design > Text Box', 'View > Text Box'], answer: 0 },
    { q: 'Which function returns the number of characters in Excel?', options: ['LEN', 'COUNT', 'SUM', 'MAX'], answer: 0 },
    { q: 'How do you insert a table in PowerPoint?', options: ['Insert > Table', 'Home > Table', 'Design > Table', 'View > Table'], answer: 0 },
    { q: 'Which shortcut is used to select all in Word?', options: ['Ctrl+A', 'Ctrl+S', 'Ctrl+O', 'Ctrl+P'], answer: 0 },
    { q: 'How do you insert a symbol in Word?', options: ['Insert > Symbol', 'Home > Symbol', 'Design > Symbol', 'View > Symbol'], answer: 0 },
    { q: 'Which function returns the current time in Excel?', options: ['NOW()', 'TODAY()', 'TIME()', 'DATE()'], answer: 0 },
    { q: 'How do you insert a slide number in PowerPoint?', options: ['Insert > Slide Number', 'Home > Slide Number', 'Design > Slide Number', 'View > Slide Number'], answer: 0 },
    { q: 'Which shortcut is used to cut in Word?', options: ['Ctrl+X', 'Ctrl+C', 'Ctrl+V', 'Ctrl+Z'], answer: 0 },
    { q: 'How do you insert a shape in PowerPoint?', options: ['Insert > Shapes', 'Home > Shapes', 'Design > Shapes', 'View > Shapes'], answer: 0 },
    { q: 'Which function returns the lowest value in Excel?', options: ['MIN', 'MAX', 'SUM', 'COUNT'], answer: 0 },
    { q: 'How do you insert a chart in Excel?', options: ['Insert > Chart', 'Home > Chart', 'Design > Chart', 'View > Chart'], answer: 0 },
    { q: 'Which shortcut is used to underline text in Word?', options: ['Ctrl+U', 'Ctrl+B', 'Ctrl+I', 'Ctrl+E'], answer: 0 }
];

function getRandomQuestions(arr, n) {
    var shuffled = arr.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

var loginPanel = document.getElementById('loginPanel');
var quizPanel = document.getElementById('quizPanel');
var loginBtn = document.getElementById('loginBtn');
var loginError = document.getElementById('loginError');
var nicInput = document.getElementById('nic');
var passInput = document.getElementById('password');

if (loginBtn) {
    loginBtn.addEventListener('click', function () {
        var nic = nicInput.value.trim();
        var pass = passInput.value.trim();
        if (nic === 'hassan' && pass === '2321') {
            loginPanel.style.display = 'none';
            quizPanel.style.display = 'block';
        } else {
            loginError.textContent = 'Invalid NIC or Password';
        }
    });
    [nicInput, passInput].forEach(input => {
        input.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') loginBtn.click();
        });
    });
}
let quiz = getRandomQuestions(allQuestions, 40);
let current = 0;
var total = quiz.length;
var answers = Array(total).fill(null);
let timerSeconds = 40 * 60;
let timerInterval = null;
var topTimer = document.getElementById('topTimer');
var qnum = document.getElementById('qnum');
var qtext = document.getElementById('qtext');
var optionsEl = document.getElementById('options');
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');
var progBar = document.getElementById('progBar');
var questionPanel = document.getElementById('questionPanel');
var resultPanel = document.getElementById('resultPanel');
var congrats = document.getElementById('congrats');
var scoreText = document.getElementById('scoreText');
var counts = document.getElementById('counts');
var restart = document.getElementById('restart');
function formatTime(s) {
    var m = Math.floor(s / 60).toString().padStart(2, '0');
    var sec = (s % 60).toString().padStart(2, '0');
    return m + ':' + sec;
}
function updateTimerDisplay() {
    if (topTimer) topTimer.textContent = formatTime(timerSeconds);
    var note = document.getElementById('timerNote');
    if (timerSeconds <= 300 && topTimer) {
        topTimer.style.color = 'crimson';
        if (note) note.style.color = 'crimson';
    } else if (topTimer) {
        topTimer.style.color = '';
        if (note) note.style.color = '';
    }
    var percent = ((40 * 60 - timerSeconds) / (40 * 60)) * 100;
    if (progBar) progBar.style.width = percent + '%';
}
function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timerSeconds <= 0) {
            clearInterval(timerInterval);
            finishQuiz();
            return;
        }
        timerSeconds--;
        updateTimerDisplay();
    }, 1000);
}
function renderQuestion(i) {
    var item = quiz[i];
    if (!item) return;
    if (qnum) qnum.textContent = `Question ${i + 1} of ${total}`;
    if (qtext) qtext.textContent = item.q;
    if (optionsEl) optionsEl.innerHTML = '';
    item.options.forEach((opt, idx) => {
        var id = `opt_${i}_${idx}`;
        var wrapper = document.createElement('div');
        wrapper.className = 'option' + (answers[i] === idx ? ' selected' : '');
        wrapper.innerHTML = `
          <input type="radio" name="answer" id="${id}" value="${idx}" ${answers[i] === idx ? 'checked' : ''}>
          <label for="${id}">${opt}</label>
        `;
        if (optionsEl) optionsEl.appendChild(wrapper);

        var input = wrapper.querySelector('input');
        wrapper.addEventListener('click', () => {
            input.checked = true;
            answers[i] = idx;
            nextBtn.disabled = false;
            Array.from(optionsEl.children).forEach(el => el.classList.remove('selected'));
            wrapper.classList.add('selected');
        });
        input.addEventListener('change', () => {
            answers[i] = idx;
            nextBtn.disabled = false;
            Array.from(optionsEl.children).forEach(el => el.classList.remove('selected'));
            wrapper.classList.add('selected');
        });
    });
    prevBtn.disabled = (i === 0);
    nextBtn.disabled = (answers[i] === null);
    var done = answers.filter(a => a !== null).length;
    if (progBar) progBar.style.width = (done / total * 100) + '%';
}
function finishQuiz() {
    let correct = 0;
    for (let i = 0; i < total; i++) {
        if (answers[i] === quiz[i].answer) correct++;
    }
    var wrong = total - correct;
    var percent = Math.round((correct / total) * 100);
    questionPanel.style.display = 'none';
    resultPanel.style.display = 'block';
    congrats.textContent = percent >= 60 ? 'Congratulations!' : 'Quiz Finished';
    scoreText.textContent = `You scored ${percent}%`;
    counts.textContent = `Correct: ${correct} | Wrong: ${wrong} | Total: ${total}`;
    if (timerInterval) clearInterval(timerInterval);
}
function enterFullScreen() {
    var elem = document.documentElement;
    if (elem.requestFullscreen) elem.requestFullscreen();
    else if (elem.mozRequestFullScreen) elem.mozRequestFullScreen();
    else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
    else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
}
function resetQuiz(noFullScreen = true) {
    quiz = getRandomQuestions(allQuestions, 40);
    current = 0; timerSeconds = 40 * 60; answers.fill(null);
    updateTimerDisplay();
    if (progBar) progBar.style.width = '0%';
    questionPanel.style.display = 'block';
    resultPanel.style.display = 'none';
    if (timerInterval) clearInterval(timerInterval);
    renderQuestion(current);
    if (!noFullScreen) {
        enterFullScreen();
    }
    startTimer();
}
if (quizPanel) {
    quizPanel.addEventListener('transitionend', function () {
    });
}
if (quizPanel) {
    var observer = new MutationObserver(() => {
        if (quizPanel.style.display !== 'none') {
            questionPanel.style.display = 'block';
            resultPanel.style.display = 'none';
            current = 0;
            timerSeconds = 40 * 60;
            answers.fill(null);
            updateTimerDisplay();
            renderQuestion(current);
            enterFullScreen();
            startTimer();
        }
    });
    observer.observe(quizPanel, { attributes: true, attributeFilter: ['style'] });
}
let quizCancelled = false;
window.addEventListener('blur', () => {
    if (questionPanel && questionPanel.style.display === 'block' && !quizCancelled) {
        quizCancelled = true;
        alert('Quiz cancelled because you switched tab or window.');
        resetQuiz(true);
        if (document.fullscreenElement) document.exitFullscreen();
        setTimeout(() => { quizCancelled = false; }, 1000);
    }
});
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement && questionPanel && questionPanel.style.display === 'block' && !quizCancelled) {
        quizCancelled = true;
        alert('Quiz cancelled because you exited fullscreen.');
        resetQuiz(true);
        setTimeout(() => { quizCancelled = false; }, 1000);
    }
});

if (nextBtn) nextBtn.addEventListener('click', () => {
    if (answers[current] === null) return;
    if (current < total - 1) {
        current++;
        renderQuestion(current);
    } else {
        finishQuiz();
    }
});

if (prevBtn) prevBtn.addEventListener('click', () => {
    if (current > 0) {
        current--;
        renderQuestion(current);
    }
});

if (restart) restart.addEventListener('click', () => {
});

document.addEventListener('keydown', (e) => {
    if (questionPanel && questionPanel.style.display === 'block') {
        if (['1', '2', '3', '4'].includes(e.key)) {
            var idx = Number(e.key) - 1;
            var input = document.querySelector(`input[name=answer][value='${idx}']`);
            if (input) { input.checked = true; answers[current] = idx; nextBtn.disabled = false; }
        }
        if (e.key === 'ArrowRight') nextBtn.click();
        if (e.key === 'ArrowLeft') prevBtn.click();
    }
});