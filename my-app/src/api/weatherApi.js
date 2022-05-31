import useSWR from 'swr'

function Profile() {
    const { data, error } = useSWR('/api/user', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return <div>hello {data.name}!</div>
}


const myServiceKey = 'TYHtAFxcs6xwlAnl1Ah3Ihb%2FDspt0a8QfvEvIxNGODo4H2ZTbVvayzuzQNTtW6AwaI2Q7i6nSJEcdiuuckEgCQ%3D%3D'
const weatherUrl ='http://apis.data.go.kr/1360000/WthrChartInfoService/getSurfaceChart?serviceKey='+myServiceKey+'&numOfRows=10&pageNo=1&code=3&time=20191129'

async function test(){
    const response = await fetch(weatherUrl, {
        method: 'GET',
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: "same-origin"
    });
    const data = await response.json();
    console.log(data)
}



