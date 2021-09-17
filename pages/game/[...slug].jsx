import parse from 'html-react-parser';

export default function Game(props){

    return(
        <>{parse(props.description)}</>
    );
}


Game.getInitialProps = async (context)=>{
    const gameid = context.query.slug[0];
    const gameInfo = await fetch('https://api.rawg.io/api/games/'+gameid+'?key=b093499947d5436eb48457c970affdbf', {
      method:  "GET",
      headers: { "Content-Type": "application/json" }, 
    })
    .then(r => r.json());
  
    return{
      ...gameInfo
    }
  }