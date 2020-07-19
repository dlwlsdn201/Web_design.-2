let player;

// 오디오 파일 리스트
const audioFiles = [
  './bgm/castle.mp3',
  './bgm/beautiful.mp3',
  './bgm/giveheart.mp3'
];
// 방문할 때마다 순서 다르게
function shuffle(audiolist) {
  let j;
  let x;
  let i;
  for (i = audiolist.length; i; i -= 1) {
    j = Math.floor(Math.random() * i);
    x = audiolist[i - 1];
    audiolist[i - 1] = audiolist[j];
    audiolist[j] = x;
  }
}

// 현재 재생 곡 정보 manually 불러오기
let playinginfo;
const lists = [
  '임영웅 - 마법의 성♬',
  '유리상자 - 아름다운 세상♬',
  '아이유 - 마음을 드려요♬'
];

function preloadAudio(file_url) {
  const audio = new Audio();
  audio.addEventListener('canplaythrough', loadedAudio, false); //canplaythrough : 전체 미디어가 중단없이 전체 재생을 보장하는 목적.
  audio.src = file_url;
}

let loaded = 0;
function loadedAudio() {
  loaded += 1;
  if (loaded === audioFiles.length) {
    // 전부 로드됐으면 플레이
    init();
  }
}

function play(index) {
  player.src = audioFiles[index];
//   console.log('audioFiles[index]:',audioFiles[index])
//   console.log('player.src:',player.src)
  getSRC();
  setTimeout(function() {
      player.play();
  }, 0);
}

let i = 0;
function init() {
  play(i);

  player.onpause = function () {
    // 커스텀 플레이 버튼 조작 (toPlay Icon)
  };
  player.onended = function () {
    next();
  };
  
  player.onplay = function () {
    if (!player.seeking) {
    // 커스텀 플레이 버튼 조작 (toPause Icon)
    }
  };
}

function next() {
  i += 1;
  if (i >= audioFiles.length) {
    i = 0;
  }
  play(i);
}

function getSRC() {
    console.log(player.src);
  switch (player.src) {
    case 'file:///J:/User/OneDrive/Programming/Self_Project/Web_design.-2/bgm/castle.mp3': //ex) 마법의성 노래 파일이 선택된 경우  
      playinginfo = lists[0]; // 제목1 - 아티스트1'
      document.getElementById('playinfo').innerHTML = playinginfo;
      // .innerHTML : HTML 의 내용에 접근할 수 있는 변수
      break;
    case 'file:///J:/User/OneDrive/Programming/Self_Project/Web_design.-2/bgm/beautiful.mp3':
      playinginfo = lists[1];
      document.getElementById('playinfo').innerHTML = playinginfo;
      break;
    case 'file:///J:/User/OneDrive/Programming/Self_Project/Web_design.-2/bgm/giveheart.mp3':
      playinginfo = lists[2];
      document.getElementById('playinfo').innerHTML = playinginfo;
      break;
    
    default:
      playinginfo = '알 수 없음';
      document.getElementById('playinfo').innerHTML = playinginfo;
      break;
  }
}

// 아래 부분은 onload 부분에 추가
// 오디오 목록 셔플
//body 가 로딩이 완료되면(onload) 실행되는 loop()
function loop() {
  shuffle(audioFiles);
  // player 오디오 ex) <audio id="player" controls="" autoplay="">크롬 사용을 권장합니다.</audio>
  player = document.getElementById('player');
  for (let i in audioFiles) {
    preloadAudio(audioFiles[i]);
  }
}
// onload 끝