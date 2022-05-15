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
    let url = encodeURIComponent('http://127.0.0.1:8887/index.html');
    let title = '테스트중이에용';
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`,'뽀야미 공유!', 'width=400, height=400');
}

//https://cards-dev.twitter.com/validator