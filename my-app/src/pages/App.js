import '../styles/App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import useSWR from 'swr'
import fetcher from "../tools/fetcher"



// let weatherUrl ='http://apis.data.go.kr/1360000/WthrChartInfoService'
//
// weatherUrl = weatherUrl.toString().trim();


function App() {
    // let proxy = "http://111.111.111.111/Xr";
    // let urlHeader = "https://cors-anywhere.herokuapp.com/http://apis.data.go.kr/1360000/WthrChartInfoService";
    // let queryString = "&serviceKey=TYHtAFxcs6xwlAnl1Ah3Ihb%2FDspt0a8QfvEvIxNGODo4H2ZTbVvayzuzQNTtW6AwaI2Q7i6nSJEcdiuuckEgCQ%3D%3D&pageNo=1&numOfRows=10&dataType=JSON&code=24&time=20220602";
    // queryString = encodeURI(queryString);
    // // let url = proxy + "?reqPrx|" + urlHeader + "|" + queryString;
    // let url =  urlHeader + queryString;
    // // const xhr = new XMLHttpRequest();
    // // xhr.open("GET", url);
    //     const { data, error } = useSWR(url, fetcher)
    //     console.log(data);
  // 데이터 렌더링
  return (
      <div className="App">
      </div>
  )
}

export default App;
