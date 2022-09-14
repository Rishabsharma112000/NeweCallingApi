import axios from "axios";
import { useEffect, useState } from "react"
import '../src/index.css'

export const InputData = ()=>{
    const url = "https://newsapi.org/v2/everything?q=tesla&from=2022-08-14&sortBy=publishedAt&apiKey=f02b78840aed416ca3a48966cb8bb749";
    const [news,setNews] = useState([]);


const doAjaxcall = async(url)=>{
    await axios.get(url).then(resp=>{
        setNews(resp.data.articles);
    }).catch(err=>{
        console.log("Error",err);
    })
}


useEffect(()=>{
    doAjaxcall(url);
},[])

    return(<>
  <div className="grid">
  {news.map((data)=>{
    const {author,content,description
,publishedAt,title,url} = data;
return(<> <div className="card" >
    <h2>{title}</h2>
    <br/>
    <p>{description}</p>
    <br/>
    <p>{content}</p>
    <br/>
    <span>{author}</span>

    <span>{publishedAt}</span>
    <a href={url}>{url}</a>
   </div>
   </>)
   })}
  
  </div>
   

  
    </>)
}