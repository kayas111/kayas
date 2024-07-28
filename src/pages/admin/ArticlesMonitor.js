
import React, {useEffect,useState} from 'react'
import ControlsNav from './Controls'
export function ArticlesMonitor(){
    const[monitoredArticleOpinions,setMonitoredArticleOpinions]=useState('')
    let data=""
  useEffect(()=>{
     
  
    fetch('/collection_multidocs_monitoredArticleOpinions').then(res=>res.json()).then(res=>{
   
      res.reverse()
      res.forEach(articleMonitorDoc=>{
          data+=`<div><div style='color:green;'>${articleMonitorDoc.headline1}</div><span ><a style='color:black;' href='/pages/pubarticles/article/${articleMonitorDoc.articleId}'><span class='hovereffect'>Article ${articleMonitorDoc.articleId},</span></a></span> written by ${articleMonitorDoc.author} <span ><a style='color:black;' href='https://api.whatsapp.com/send?phone=${articleMonitorDoc.authorContact}&text=Hello%20${articleMonitorDoc.author},%20*this%20is%20Kayas*.%0A%0A A comment has been made on your article:%0A *%22${articleMonitorDoc.headline1}%22* %0A%0ATap this link below to see the comment that has been posted:%0Ahttps://kayas-mak.herokuapp.com/pages/pubarticles/article/${articleMonitorDoc.articleId}'><span class='hovereffect'>${articleMonitorDoc.authorContact}</span></a></span></div><div>Commenter: ${articleMonitorDoc.name} <span ><a style='color:black;' href='https://api.whatsapp.com/send?phone=${articleMonitorDoc.contact}&text=Hello%20${articleMonitorDoc.name},%20*this%20is%20Kayas*.'><span class='hovereffect'>${articleMonitorDoc.contact}</span></a></div><div style='font-family:charm;'>${articleMonitorDoc.msg}</div><hr></hr>`
      
      })
  
      setMonitoredArticleOpinions(data);
        })
    
    },[])
  
  
  
    return(<div>
      <div style={{color:"red",fontSize:"25px",textAlign:"center"}}>Articles monitor</div>
      <ControlsNav/>
      <div style={{padding:"5px"}} dangerouslySetInnerHTML={{__html:monitoredArticleOpinions}}/>
     
     </div>)
  }
  export default ArticlesMonitor