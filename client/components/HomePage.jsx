import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


const homePaperStyle = {
  height: '100vh',
  width: '100%',
};

const homeCardStyle = {
  margin:0,
  padding:'7px',
  textAlign: 'center',
  marginLeft:'250px',
  backgroundColor:'#EDEBE9',
  background:'url("./images/walk.png")',
};

const homePageStyle = {
  backgroundColor:'#EDEBE9',
  backgroundSize:'contain',
  display: 'inline',
  textAlign: 'center',
  verticleAlign:'middle',
  height:'auto',
  width: '100%',
  margin:0,
 
};

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const styles2 = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};


const tilesData = [
  {
    img: 'images/boy1.png',
    title: 'Thomas Kearney',
  },
  {
    img: 'images/boy2.png',
    title: 'Elliott Chalmers',
  },
  {
    img: 'images/boy3.png',
    title: 'Alex Lovell',
  },
  {
    img: 'images/girl.png',
    title: 'Terri Byers',
  },
  
];

const tilesData2 = [
  {
    img: 'images/dogWalk.png',
    title: 'DOG WALKING',
    author: 'You choose the amount of time your dog is walked.'
  },
  {
    img: 'images/inHome.png',
    title: 'IN HOME CARE',
    author:'Potty Breaks, feedings, playtime.'
  },
  {
    img: 'images/errands.png',
    title: 'PET ERRANDS',
    author:'Driving your pet to the vet, pet supplies dropped off at your home, pet taken to grooming appointments'
  },
  
  
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */


const HomePage = () => (
  <Paper style={homePaperStyle} zDepth={1}>
  
  <Card style={homeCardStyle} className="container" >

    <div className="card-image">
    <img src="./images/FidoLogo.png" width="65%" height="auto"/>
    <CardTitle  title="Fido and Tiger Pet Sitting" subtitle='"My Favorite Pet App!"' />    
      <div style={homePageStyle} className="col-sm-12">
        <h3>About Us</h3>
        <h4>Fido and Tiger is a personalized pet care service provider.  From walks, to feeding to pet delivery services, we are here to help you and your pet.</h4>
        <p>Customize your service!  If you want playtimes, walks (long or short), medicine dispensed, or your pets fed, we are here for you.  Our professional staff is reliable, friendly, and trustworthy.  We know your pet means the world to you and we want to assist you in giving them the best care possible. Just let us know what you need and times that you desire and we will set up a package for you! </p>
      </div>
    </div>
  </Card>

  <Card style={homeCardStyle} className="container">

{/*    <div style={homePageStyle}>
      <h2>MEET OUR TEAM</h2>
        <div className="col-sm-3">
          <div className="thumbnail">
            <img src="./images/boy.png" alt="Thomas" width="25%" height="auto"/>
            <p><strong>Thomas Kearney</strong></p>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="thumbnail">
            <img src="./images/boy.png" alt="Elliott" width="25%" height="auto"/>
            <p><strong>Elliott Chalmers </strong></p>
          </div>
        </div>
        <div className="col-sm-3">
         <div className="thumbnail">
           <img src="./images/boy.png" alt="Alex " width="25%" height="auto"/>
           <p><strong>Alex Lovell</strong></p>
         </div>
        </div>
        <div className="col-sm-3">
          <div className="thumbnail">
            <img src="./images/girl.png" alt="Terri " width="25%" height="auto"/>
            <p><strong>Terri Byers</strong></p>
          </div>
        </div> 
    </div>
  </Card>*/}

     <div style={homePageStyle}>
       <h2>MEET OUR TEAM</h2>
          <div style={styles.root}>
              <GridList
                cellHeight={180}
                style={styles.gridList}
                 >
                   {tilesData.map((tile) => (
                      <GridTile
                        key={tile.img}
                        title={tile.title}
                        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                      >
                     <img src={tile.img} />
                    </GridTile>
                 ))}
                </GridList>
          </div>
        </div>

      <div style={homePageStyle}>
       <h2>OUR SERVICES</h2>
          <div style={styles.root}>
              <GridList
                cellHeight={180}
                style={styles2.gridList}
                 >
                   {tilesData2.map((tile) => (
                      <GridTile
                        key={tile.img}
                        title={tile.title}

                        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                      >
                     <img src={tile.img} />
                    </GridTile>
                 ))}
                </GridList>
          </div>
        </div>
   </Card>

  </Paper>
);

export default HomePage;