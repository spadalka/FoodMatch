import { IonButton, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonModal, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import RecipeSlip from '../components/RecipeSlip';
import { useState } from 'react';
import {closeOutline} from 'ionicons/icons';

const databaseInfo = {
  "Cookbook": [
    {
      "Recipe": {
        "Name": "Chocolate Cookie",
        "Duration": "3 hours",
        "Ingredients": [
          { "Ingredient": "Flour" },
          { "Ingredient": "Butter" },
          { "Ingredient": "Chocolate Chips" }
        ],
        "Method": [
          {
            "Step": "Combine the bread crumbs, sugar, cinnamon, and nutmeg. Cut in the butter. Slowly add the water and mix."
          },
          { "Step": "Bake in a 350 degree F oven for 30 minutes." }
        ],
        "Yield": 12,
        "Saved": true
      }
    },
    {
      "Recipe": {
        "Name": "Soup",
        "Duration": "1.5 hours",
        "Ingredients": [{ "Ingredient": "Broth" }, { "Ingredient": "Noodles" }],
        "Method": [{ "Step": "Boil the ingredients for a bit." }],
        "Yield": 6,
        "Saved": true
      }
    },
    {
      "Recipe": {
        "Name": "Apple Brown Betty",
        "Duration": "4 hours",
        "Ingredients": [
          { "Ingredient": "bread crumbs" },
          { "Ingredient": "butter" },
          { "Ingredient": "apple" },
          { "Ingredient": "sugar" },
          { "Ingredient": "cinnamon" },
          { "Ingredient": "nutmeg" },
          { "Ingredient": "water" }
        ],
        "Method": [
          {
            "Step": "Combine the bread crumbs, sugar, cinnamon, and nutmeg. Cut in the butter. Slowly add the water and mix."
          },
          { "Step": "Bake in a 350 degree F oven for 30 minutes." }
        ],
        "Yield": 6,
        "Saved": true
      }
    }
  ]
}

export const Tab2: React.FC = () => {
  const[showModal, setShowModal] = useState(false);

  let openRecipe = true;
  let currentID = "null";

  const openRecipePage = (ID: string) => {
    currentID = ID;
    setShowModal(true);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle color="dark" class="ion-padding">
            Recipe<br/>Library
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        
        <IonModal isOpen={showModal}>
          
          <IonHeader>
            <IonToolbar color="danger">
              <IonTitle color="dark" class="ion-padding">
                Recipe
              </IonTitle>
              <IonIcon slot="end" icon={closeOutline} color="dark" size="large" onClick={()=> setShowModal(false)} class="ion-padding"></IonIcon>
            </IonToolbar>
          </IonHeader>

          <IonContent>
            <IonImg src="https://wallpaperaccess.com/full/4393443.jpg" alt="food wallpaper"/>
            
            <IonItem>
              Owned Ingredients
            </IonItem>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonCard color="warning" class="ion-padding">
                    <IonLabel>
                      test
                    </IonLabel>
                  </IonCard>
                </IonCol>
                <IonCol>
                  <IonCard color="warning" class="ion-padding">
                    <IonLabel>
                      test
                    </IonLabel>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
          
        </IonModal>

        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-right">
              <IonButton color="warning" size="small" onClick={()=>openRecipePage("Filter_Recipes")}>Filter</IonButton>
            </IonCol>
          </IonRow>
          {databaseInfo.Cookbook.map((Rec) => {
            return <RecipeSlip recipeName={Rec.Recipe.Name} recipeDuration={Rec.Recipe.Duration} missingCount={Rec.Recipe.Ingredients.length}/>
          })}
        </IonGrid>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
