import fetch from "unfetch"
// const config = {
//     method: 'GET',
//     data : {
//         credentials: 'include',
//         serviceKey : myServiceKey,
//         numOfRows : '10',
//         pageNo : '1',
//         dataType : 'JSON',
//         code : '24',
//         time : '20220602'
//     },
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }
const config = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}
const fetcher = url => fetch(url,config).then(r => r.json())
// const fetcher = url => fetch(url)

export default fetcher