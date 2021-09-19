import Layout from '../components/Layout';
import PageTurn from '../components/PageTurn';
import Card from '../components/Card';
import Grid from '@material-ui/core/Grid';
import LazyLoad from 'react-lazyload';
import React, { useState, useEffect } from 'react';

class Home extends React.Component{

  state = {
    games:[],
    page:1
  }

  componentDidMount(){
    this.setState(
      {games:this.props.games.results}
    )
  }

  cb = async(page)=>{
    console.log ('page turn xz', page)

      const games = await fetch('https://api.rawg.io/api/games?key='
      +'b093499947d5436eb48457c970affdbf'
      +'&page_size=40'
      +'&page='+page
      ,{
        method:  "GET",
        headers: { "Content-Type": "application/json" }, 
      })
      .then(r => r.json())
      // .then(r => console.log(gameList))
      .then((r)=>{
        this.setState({
          ...this.state,
          games: [...this.state.games.concat(r.results)],
          page: page
          
        })
      });
  }



  render(){

    const games = this.state.games || this.props.games.results;
    
    return(
      <Layout>      
      
      <Grid item xs={12}>
        <Grid container justifyContent="flex-start" spacing={2} >
          {games.map((game, key ) => (
            
              <Grid key={key} item 
              xs={12}
              sm={6}
              md={4}
              lg={4}            
              >
                
                <LazyLoad key={key} height={200} once offset={100}>
                  <PageTurn pageItem={key} cb={this.cb}/>
                  <Card {...game} />
                </LazyLoad>
              </Grid>
            
          ))}
        </Grid>
      </Grid>
      </Layout>
    )
  }
}


Home.getInitialProps = async (context)=>{
  const api_key = 'b093499947d5436eb48457c970affdbf';
  const games = await fetch('https://api.rawg.io/api/games?key='
  +api_key
  +'&page_size=40'
  +'&page=1'
  ,{
    method:  "GET",
    headers: { "Content-Type": "application/json" }, 
  })
  .then(r => r.json());

  return{
    games: games
  }
}

export default Home;
