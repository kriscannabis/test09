import parse from 'html-react-parser';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Layout from '../../components/Layout'
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Image from 'next/image';

const  PageWr = styled.div`
  padding: 30px;
`

const TitleWr = styled.div`
  margin-left: 30px;
`;

export default function Game(props){
    return(
      <Layout>      
        <Grid item xs={12}>
          <TitleWr>
            <h1>{props.name}</h1>
          </TitleWr>
          <Carousel>
            <div>
                <img src={props.background_image} />
                {/* <p className="legend">Legend 1</p> */}
            </div>
            {
            props.screenshots.results.map((screenshot, key)=>
              <div key={key}>
                  <img src={screenshot.image} />
                  {/* <p className="legend">Legend 2</p> */}
              </div>
            )
            }
            
          </Carousel>
          <PageWr>
            <div>
              website: <a href={props.website}>{props.website}</a>
            </div>
            <div>
              Description: {parse(props.description)}
            </div>
          </PageWr>
        </Grid>
      </Layout>
    );
}


Game.getInitialProps = async (context)=>{
  const api_key = 'b093499947d5436eb48457c970affdbf';
  const gameid = context.query.slug[0];
  const gameInfo = await fetch('https://api.rawg.io/api/games/'+gameid+'?key='+api_key, {
    method:  "GET",
    headers: { "Content-Type": "application/json" }, 
  })
  .then(r => r.json());

  const screenshots = await fetch('https://api.rawg.io/api/games/'+gameid+'/screenshots?key='+api_key, {
    method:  "GET",
    headers: { "Content-Type": "application/json" }, 
  })
  .then(r => r.json());

    return{
      ...gameInfo,
      screenshots: screenshots
    }
  }