
import './App.css';
import Props from './Props';
import Data from './Data';
import Profile from './Profile';

function App() {
 return (
<>
 <section>
    {
        Data.map((eachObj)=>{
            const {id,title,url,thumbnailUrl}=eachObj;
           return < Profile id={id} title={title} url={url} thumbnailUrl={thumbnailUrl} />
        })
    }
 </section>
 {/* <Propos name="venkatesh" age="22" qualification="B.Tech" city="Dachepalli"/> */}
{/* <Profile/> */}
{/* <Propos name="venkatesh" age="22" qualification="B.Tech" city="Dachepalli"/> */}
</>
 ) 
}


export default App;
