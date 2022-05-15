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
    let url = encodeURIComponent('https://glittering-truffle-5a92d6.netlify.app');
    let title = '됐으면 좋겠다 ^^.';
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`,'뽀야미 공유!', 'width=400, height=400');
}

//https://cards-dev.twitter.com/validator