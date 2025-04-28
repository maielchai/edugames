const message = document.querySelector('.message');
const button = document.querySelector('button');
const wflag = document.querySelector('.wflag');
const bflag = document.querySelector('.bflag');
const btnflag = document.querySelector('.btnflag');
const results = document.querySelector('.results');
const directions = document.querySelector('.directions');
let inPlay = false;
let valflag = -1;
let timestart = 0;
let playArea = {};
let count = 0;
btnflag.style.display = 'none';

btnflag.addEventListener('contextmenu', e => {
  e.preventDefault();
});
this.addEventListener('contextmenu', e => {
  e.preventDefault();
});

function showMessage(notification){
    message.innerHTML = `<h3>${notification}</h3>`;
}

function showBox(){
    playArea.timer = setTimeout(myBox, random(4000));
}

function myBox(){
	valflag = (Math.random() < 0.5) ? 0 : 2;
	timestart = new Date().getTime();
	if (valflag == 0) {
		wflag.src = 'white_up.png';
		bflag.src = 'blue_down.png';
	} else {
		wflag.src = 'white_down.png';
		bflag.src = 'blue_up.png';
	}
	inPlay = true;
}

function renderCount(count){
    return count;
}

function random(number){
    let tempVal = Math.floor(Math.random()*number);
    return tempVal;
}

function resetGame(){
    clearTimeout(playArea.timer);
    button.style.display = 'block';
    btnflag.style.display = 'none';
}

var whichButton = function (e) {
    if (!inPlay) return;
	inPlay = false;
    var e = e || window.event;
    var btnCode = -1;

	bflag.src = 'blue_down.png';
	wflag.src = 'white_down.png';
	
    if ('object' === typeof e) btnCode = e.button;

    let timeend = new Date().getTime();
    let duration = (timeend-timestart)/1000;
    let maxDuration = 1;
    
    clearTimeout(playArea.timer);
    showMessage('클릭하는데 ' + duration + ' 초가 걸렸습니다.');
    if (duration > maxDuration){
        results.innerHTML = `너무 느립니다! <span id="loser">게임에 지셨습니다!</span> 점수는 ${count} 점 입니다.<br> 다시 연습하시려면 시작을 클릭하세요!`;
        resetGame();
    } else {
		if (btnCode != valflag){
			results.innerHTML = `다른 깃발을 올렸습니다! <span id="loser">게임에 지셨습니다!</span> 점수는 ${count} 점 입니다.<br> 다시 연습하시려면 시작을 클릭하세요!`;
			resetGame();
		} else {
			playArea.timer = setTimeout(myBox, random(4000));
			count++;
			if (count === 10){
				results.innerHTML = `${renderCount(count)}에 도달했습니다! <span id="winner">게임을 이기셨습니다!</span> <br> 다시 연습하시려면 시작을 클릭하세요.`;
				resetGame();
			} else {
				results.innerHTML = `점수: 10점중 ${renderCount(count)} `;
			}
		}
    }
	
}

showMessage('시작을 클릭하세요!');

button.addEventListener('click', function(){
	button.style.display = 'none';
	directions.style.display = 'none';
	btnflag.style.display = 'block';
	results.innerHTML = `점수: 10점중 0 `;
	count = 0;
	showMessage('시작합니다...');
    showBox();
})

