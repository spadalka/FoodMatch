import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import redTag from './designElements/Red Tag.png';
import blueTag from './designElements/Blue Tag.png';
import pinkTag from './designElements/Pink Tag.png';
import heart from './designElements/Heart.png';
import hollowHeart from './designElements/hollowHeart.png';
import leftArrow from './designElements/left arrow.png';
import leftSwipe from './designElements/left swipe.png';
import rightArrow from './designElements/right arrow.png';
import rightSwipe from './designElements/right swipe.png';
import menuIcon from './designElements/MenuIcon.png';
import pasta from './designElements/pasta_PNG.png';
import spaghetti from './designElements/spaghetti.jpg';
import raccoon from './designElements/raccoon.png';
import card from './designElements/Card.png'
import React from 'react'; 

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonButton className = "filterButton">Filter</IonButton>
        <div className = "raccoonImg">
          <img src={raccoon}/>
        </div>
        {/* <!--recipe "stats" tabs--> */}
        <div className = "recipePanel">
          <div className = "tags">
              <div className = "tag1">
                  <img src={redTag}/>
                  <div className = "tabText">
                    30 <br/> min
                  </div>
              </div>
              <div className = "tag2">
                  <img src={blueTag}/>
                  <div className = "tabText">
                    1 missing <br/> ingredients
                  </div>
              </div>
              <div className = "tag3">
                  <img src={pinkTag}/>
                  <div className = "tabText">
                    Main
                  </div>
              </div>
          </div>
          <div className="placeholderCard">
            <img src={card}/>
          </div>
        </div>

        <div className="arrows">
            <div className="arrowL">
                <img className = "showcaseImg" src={leftSwipe} />
            </div>
            <div className="arrowR">
                <img className = "showcaseImg" src={rightSwipe} />
            </div>
        </div>


        <div className = "BotNav">
            <div className = "selection">
                {/* <a href="Saved_Recipes.html">Saved <br> Recipes</a> */}
            </div>
            <div className = "spacer"> </div>
            <div className = "selection">
                {/* <a href="Flash_Cards.html" className="active">Flash <br> Cards</a> */}
            </div>
            <div className = "spacer"> </div>
            <div className = "selection">
                {/* <a href="My_Ingredients.html">My <br> Ingredients</a> */}
            </div>
        </div>
        

        {/* <!--showcase main card--> */}
        <div className = "showcaseShadow2"></div>

        <div className = "showcaseShadow"></div>
            
        <div className = "showcase">
          
            
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
