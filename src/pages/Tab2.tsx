import { IonButton, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonLoading, IonModal, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import RecipeSlip from '../components/RecipeSlip';
import ModalSubscreen from '../components/ModalSubscreen';
import { useState } from 'react';

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

  const[recInfo, setInfo] = useState<Array<any>>(["name", [], [], "0 hours"])

  const openModalPage = (ID: string) => {
    setCurrentRecipe(ID);
    setShowModal(true);
  }

  const setCurrentRecipe = async (recName:string) => {
    databaseInfo.Cookbook.forEach(element => {
      let x = element.Recipe;
      if(x.Name == recName){
        let l_1 = [];
        let l_2 = [];
        let i = 0;
        while(i < (x.Ingredients.length)/2){
          l_1.push(x.Ingredients[i].Ingredient);
          i++;
        }
        while(i < x.Ingredients.length){
          l_2.push(x.Ingredients[i].Ingredient);
          i++;
        }
        setInfo([recName, l_1, l_2, x.Duration])
      }

    });
  }

  function getInfo(index : number): any{
    return recInfo[index];
  }

  const closeModal = () => {
    setShowModal(false);
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
          <ModalSubscreen closeFunction={closeModal} getInfo={getInfo}/>
        </IonModal>

        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-right">
              {/* onClick={()=>openModalPage("Filter_Recipes")} */}
              <IonButton color="warning" size="small">Filter</IonButton>
            </IonCol>
          </IonRow>
          {databaseInfo.Cookbook.map((Rec) => {
            return <RecipeSlip recipeName={Rec.Recipe.Name} recipeDuration={Rec.Recipe.Duration} missingCount={Rec.Recipe.Ingredients.length} openModalFunction={openModalPage}/>
          })}
        </IonGrid>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
