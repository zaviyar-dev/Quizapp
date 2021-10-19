let questionDb = [
    `<ul>
        <h4>HTML is for</h4>
        <li class="QnA">
            <input type="radio" name="ans" id="Q1" value="correct" class="opt">
            <label for="Q1">Creating Website Structure</label>
        </li>
        <li class="QnA">
            <input type="radio" name="ans" id="Q2" value="wrong" class="opt">
            <label for="Q1">Creating Website Designing</label>
        </li>
        <li class="QnA">
            <input type="radio" name="ans" id="Q3" value="wrong" class="opt">
            <label for="Q1">Website Behaviour</label>
        </li>
        <li class="QnA">
            <input type="radio" name="ans" id="Q4" value="wrong" class="opt">
            <label for="Q1">All of these</label>
        </li>
    </ul>`,
    `<ul>
        <h4>React is a</h4>
        <li class="QnA">
            <input type="radio" name="ans" id="Q1" value="wrong" class="opt">
            <label for="Q1">JavaScript Framework</label>
        </li>
        <li class="QnA">
            <input type="radio" name="ans" id="Q2" value="wrong" class="opt">
            <label for="Q1">JavaScript Library for website developement</label>
        </li>
        <li class="QnA">
            <input type="radio" name="ans" id="Q3" value="correct" class="opt">
            <label for="Q1">JavaScript Library for website designing</label>
        </li>
        <li class="QnA">
            <input type="radio" name="ans" id="Q4" value="wrong" class="opt">
            <label for="Q1">Both b and c</label>
        </li>
    </ul>`,
    `<ul>
        <h4>Which statement is correct</h4>
        <li class="QnA">
            <input type="radio" name="ans" id="Q1" value="wrong" class="opt">
            <label for="Q1">Bootstrap is framework of HTML CSS</label>
        </li>
        <li class="QnA">
            <input type="radio" name="ans" id="Q2" value="wrong" class="opt">
            <label for="Q1">JavaScript only use in website developement</label>
        </li>
        <li class="QnA">
            <input type="radio" name="ans" id="Q3" value="correct" class="opt">
            <label for="Q1">Node.js support non-blocking I/O model</label>
        </li>
        <li class="QnA">
            <input type="radio" name="ans" id="Q4" value="wrong" class="opt">
            <label for="Q1">All statements are correct</label>
        </li>
    </ul>`,
]

let answer = 'correct';
let score = 0;
let temp = 0
const submit = () => {
    let options = document.getElementsByClassName('opt')
    Array.from(options).forEach((entry) => {
        if (entry.checked) {
            if (answer === entry.value) {
                score += 1;
                // console.log('correct');
            } else {
                score = score;
                // console.log('wrong');
            }
        } else {
            console.log('nothing');
        }
    })
    temp += 1
    updateQuestion(temp)
    console.log(score);
}
const updateQuestion = (count)=>{
    if (count <= questionDb.length - 1) {
        document.getElementsByClassName('container')[0].innerHTML = questionDb[count];
    } else {
        alert(`Thanks For Your Time, Your Score is ${score}`)   
    }
}
updateQuestion(temp)