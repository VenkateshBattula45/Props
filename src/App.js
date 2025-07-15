
import './App.css';
import Propos from './Props';
import Data from './Data';

function App() {
 return (
 <>
 <section>
    {
        Data.map((eachObj)=>{
            const {id,title,body}=eachObj;
           return < Profile id={id} title={title} body={body} />
        })
    }
 </section>
 {/* <Propos name="venkatesh" age="22" qualification="B.Tech" city="Dachepalli"/> */}
{/* <Profile/> */}
{/* <Propos name="venkatesh" age="22" qualification="B.Tech" city="Dachepalli"/> */}
 </>
 ) 
}

const Profile =(props)=>{
    const {id,title,body}=props;
    return 
    <article className='Student'>
        <h1>{id}</h1>
        <h2>{title}</h2>
        <p>{body}</p>
    </article>

}
export default App;
