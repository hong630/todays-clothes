import '../styles/App.css';
import React from 'react';
import {useState} from "react";

function Header(props) {
    return (
        <header>
            <a href="" onClick={
                function(event) {
                    event.preventDefault();
                    props.onChangeMode();
                }
            }>{props.title}</a>
        </header>
    )
}
function Nav(props){
    const lis = []
    for(let i=0; i<props.topics.length; i++){
        let title = props.topics[i].title;
        let id = props.topics[i].id;
        let li = <li key={props.topics.id}><a id={id} href="/{id}" onClick={(event)=>{
            event.preventDefault();
            props.onChangeMode(Number(event.target.id));
        }
        }>{title}</a></li>
        lis.push(li);
    }
    return (<nav>
        <ul>
            {lis}
        </ul>
    </nav>)
}
function Article(props){
    return(
        <article>
            <h2>
                {props.title}
            </h2>
            {props.body}
        </article>
    )
}
function App() {
    const [mode, setMode] = useState('WELCOME');
    const [id, setId] = useState(null);
    const topics = [
        {id:1, title:"html", body:"html is..."},
        {id:2, title:"css", body:"css is..."},
        {id:3, title:"js", body:"js is..."},
    ]
    let content = null;
    if(mode === "WELCOME") {
        content = <Article title="하이" body="하이요"></Article>
    }else if(mode === 'READ'){
        let title, body = null;
        for(let i=0; i<topics.length;i++){
            if(topics[i].id === id){
                title = topics[i].title;
                body = topics[i].body;
            }
        }
        content =<Article title={title} body={body}></Article>
    }else if(mode === 'CREATE'){
        content = <div>어쩌고</div>
    }

  return (
      <div className="App">
          <Header title="뽀야미" onChangeMode = {function(){
              setMode('WELCOME')}}></Header>
          <Nav topics={topics} onChangeMode={(_id)=>{setMode('READ'); setId(_id)}}></Nav>
          {content}
          <a href="/create" onClick={(event)=>{
              event.preventDefault();
              setMode('CREATE');
          }}>Create</a>
      </div>
  )
}

export default App;
