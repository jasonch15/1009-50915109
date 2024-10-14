const themes = [
    [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSByxaqs7wvnjE_eXck4OncqbtkiHvrvyKg8Q&s',
        'https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Meme_Man_on_transparent_background.webp/316px-Meme_Man_on_transparent_background.webp.png',
        'https://i.pinimg.com/originals/84/29/94/8429942830ee706352fa51d1af23d503.jpg',
        'https://blog.english4u.net/images/blog/20200707094926.jpg',
        'https://s.yimg.com/ny/api/res/1.2/0VITA9_ZAFDmcuesGGabTw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://s.yimg.com/os/creatr-uploaded-images/2024-05/0a114cf0-19ac-11ef-af6b-4646974f509f',
        'https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/22512212/shrek4_disneyscreencaps.com_675.jpg?quality=90&strip=all&crop=44.127604166667,30.392156862745,36.953125,57.96568627451',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfA5mugC13HoFCaYUXtn7s5z-IbY-KZZrwHw&s',
        'https://e7.pngegg.com/pngimages/524/472/png-clipart-memes-50-memes-that-will-make-you-laugh-every-time-memes-cartoons-jokes-funny-s-laugh-out-loud-lol-rofl-funny-books-drawing-internet-meme-meme-mammal-carnivoran.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVhRlq7ZB5GlBrt-HE6rMc9LtiSjucs_KNjQ&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKYTq-TuGTw-qKEWLBvttuLg_Uxhf3kdOGlQ&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNl6NOLIXe3zWpoAmJ6N-F402-ihDxuFDdwg&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt6NJw50KTTY1iFXjZ2HN21WcnHQ1FpwiCTQ&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV0oFFu-Z1BBBWfsGNzIrte5dvfAejRkuSdA&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAVZB77_U_iZeaTOg9FcVb22sU_FALKJqIJw&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXdpPajISxVPK1J6XzFnHL2US0xzajR0p_dg&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH65GZKVm1A3KTDVGk304X47a-7nsLfoY42A&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwIcD77bQy9sS48JGQR65Wq_sItoBaIAf69g&s',
        'https://media.tenor.com/notIH-IvqFQAAAAM/suspicious-not-sure-if-serious.gif'
    ],
    [
        'https://images.pexels.com/photos/15851686/pexels-photo-15851686.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/8789648/pexels-photo-8789648.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/10049354/pexels-photo-10049354.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7663157/pexels-photo-7663157.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7291901/pexels-photo-7291901.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7815223/pexels-photo-7815223.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7897455/pexels-photo-7897455.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/14400925/pexels-photo-14400925.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/5183388/pexels-photo-5183388.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4622889/pexels-photo-4622889.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7909034/pexels-photo-7909034.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4270236/pexels-photo-4270236.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2775837/pexels-photo-2775837.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1447987/pexels-photo-1447987.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/6396548/pexels-photo-6396548.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7663981/pexels-photo-7663981.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/139759/pexels-photo-139759.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/9020063/pexels-photo-9020063.png?auto=compress&cs=tinysrgb&w=800'
    ]
];


// 預先加載音效
const correctSound = new Audio('coin01.mp3');
const wrongSound = new Audio('blip01.mp3');

let currentThemeIndex = 0;
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedPairs = 0;
let startTime = null;
let numPairs = 0; // 存儲當前等級的配對數量

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createBoard() {
    const gameBoard = document.getElementById('game');
    gameBoard.innerHTML = ''; // 清空現有卡片
    const selectedImages = themes[currentThemeIndex];

    const level = parseInt(document.getElementById('gameLevel').value); // 取得選擇的等級
    numPairs = (level * level) / 2; // 計算圖片對數

    const imagesForGame = selectedImages.slice(0, numPairs); // 選擇對應數量的圖片
    const doubledImages = [...imagesForGame, ...imagesForGame]; // 創建配對
    shuffle(doubledImages); // 隨機排列

    // 設定 grid 模式
    gameBoard.style.gridTemplateColumns = `repeat(${level}, 1fr)`;

    doubledImages.forEach(image => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.image = image;

        const cardInner = document.createElement('div');
        cardInner.classList.add('card-inner');

        const cardFront = document.createElement('div');
        cardFront.classList.add('card-front');
        cardFront.textContent = ''; // 空白

        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');
        const img = document.createElement('img');
        img.src = image;
        img.alt = 'Memory Card';
        img.style.width = '100%';
        img.style.height = '100%';
        cardBack.appendChild(img);

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    });
}


function flipCard() {
    if (lockBoard) return;
    if (this === firstCard || this.classList.contains('flipped')) return;

    this.classList.add('flipped');

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
}


function checkForMatch() {
    if (firstCard.dataset.image === secondCard.dataset.image) {
        setTimeout(() => {
            // 播放正確配對音效
            correctSound.play();

            // 隱藏配對成功的卡片
            firstCard.style.visibility = 'hidden';
            secondCard.style.visibility = 'hidden';
            resetBoard();
            matchedPairs++;

            // 根據選擇的等級來判斷是否結束遊戲
            if (matchedPairs === numPairs) {
                showResult(); // 所有卡片配對完成，結束遊戲
            }
        }, 500); // 延遲0.5秒隱藏卡片
    } else {
        setTimeout(() => {
            // 播放錯誤配對音效
            wrongSound.play();

            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            resetBoard();
        }, 1000); // 延遲1秒覆蓋卡片
    }
}



function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

function showResult() {
    const endTime = new Date();
    const timeTaken = Math.floor((endTime - startTime) / 1000);
    document.getElementById('resultMessage').textContent = `遊戲完成！總時間：${timeTaken} 秒`;
    document.getElementById('overlay').style.display = 'flex';

    // 等待玩家按下再玩一次時回到主頁面
    document.getElementById('restartButton').addEventListener('click', () => {
        matchedPairs = 0;
        startTime = null;
        document.getElementById('overlay').style.display = 'none'; // 隱藏結束畫面

        // 回到主頁面
        document.getElementById('startButton').style.display = 'inline-block'; // 顯示開始按鈕
        document.getElementById('gameContainer').style.display = 'none'; // 隱藏遊戲容器
        document.getElementById('switchThemeButton').style.display = 'inline-block'; // 顯示切換主題按鈕
        document.getElementById('previewContainer').style.display = 'none'; // 隱藏主題預覽
    });
}



document.getElementById('restartButton').addEventListener('click', () => {
    matchedPairs = 0;
    startTime = new Date();
    document.getElementById('game').innerHTML = '';
    document.getElementById('overlay').style.display = 'none';
    createBoard();
    document.getElementById('switchThemeButton').style.display = 'inline-block'; // 再次顯示切換主題按鈕
});


document.getElementById('startButton').addEventListener('click', () => {
    const revealTime = parseInt(document.getElementById('revealTime').value); // 獲取選擇的顯示秒數
    startTime = new Date();
    document.getElementById('startButton').style.display = 'none'; // 隱藏開始按鈕
    document.getElementById('gameContainer').style.display = 'block'; // 顯示遊戲容器
    document.getElementById('switchThemeButton').style.display = 'none'; // 隱藏開始按鈕
    //document.getElementById('switchThemeButton').style.display = 'inline-block'; // 顯示切換主題按鈕
    document.getElementById('previewContainer').style.display = 'none'; // 隱藏預覽容器
    createBoard(); // 初始化遊戲

    // 顯示所有卡片正面
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        card.classList.add('flipped'); // 將所有卡片翻面
    });

    // 根據選擇的秒數來覆蓋卡片
    setTimeout(() => {
        allCards.forEach(card => {
            card.classList.remove('flipped'); // 將所有卡片覆蓋
        });
    }, revealTime); // 依據選擇的時間覆蓋卡片
});

document.getElementById('switchThemeButton').addEventListener('click', () => {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length; // 切換到下一個主題
    matchedPairs = 0;

    // 顯示預覽圖片
    const previewContainer = document.getElementById('previewContainer');
    previewContainer.innerHTML = ''; // 清空之前的預覽
    previewContainer.style.display = 'flex'; // 顯示預覽容器

    const selectedImages = themes[currentThemeIndex];
    selectedImages.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = 'Theme Preview';
        img.style.width = '100px';
        img.style.height = '100px';
        img.style.margin = '0 10px';
        previewContainer.appendChild(img); // 將每張圖片添加到預覽容器中
    });
});





