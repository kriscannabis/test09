import Layout from '../components/Layout'
import Card from '../components/Card'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default function Home(props) {
//   xs, extra-small: 0px
// sm, small: 600px
// md, medium: 960px
// lg, large: 1280px
// xl, extra-large: 1920px

const games = props.games.results;
  return (
    
      <Layout>
        {/* <Card/>
        <Card/>
        <Card/>
        <Card/> */}
      
      <Grid item xs={12}>
        <Grid container justifyContent="flex-start" spacing={2} >
          {games.map((game, key ) => (
            <Grid key={key} item 
            xs={12}
            sm={6}
            md={4}
            lg={4}            
            >
              <Card {...game}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
      </Layout>
   
  )
}

Home.getInitialProps = async (context)=>{

  const games = await fetch('https://api.rawg.io/api/games?key=b093499947d5436eb48457c970affdbf', {
    method:  "GET",
    headers: { "Content-Type": "application/json" }, 
  })
  .then(r => r.json());

  return{
    games: games
  }
}