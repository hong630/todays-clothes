console.log('hello')

fetch("index.json")
    .then(response => {
        return response.json();
    })
    .then(jsondata => test(jsondata));

function test(data){
    console.log(data)
}


function shareTwitter() {
    const metas = document.querySelectorAll('meta');
    metas[6].content = "바뀐건가? 제발 바뀌었길 제발 "
    var sendText = "테스트"; // 전달할 텍스트
    var sendUrl = "https://glittering-truffle-5a92d6.netlify.app/"; // 전달할 URL
    window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
}

//https://cards-dev.twitter.com/validator