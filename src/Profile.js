import react from "react";

const Profile =(props)=>{
    const {id,title,url,thumbnailUrl}=props;
    return <>
    <article className='Student'>
        <h1>{id}</h1>
        <h2>{title}</h2>
        <a href= {url}></a>
        <img src={thumbnailUrl} alt="image" />
    </article>
   </>
}

export default Profile