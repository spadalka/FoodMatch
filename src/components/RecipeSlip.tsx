import React from "react";
import {
  IonRow,
  IonCol,
  IonCard,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import '../pages/Tab2.css';

const RecipeSlip: React.FC<{
  recipe : any
  openModalFunction: (input : string) => void;
}> = (props) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard color="beige" class="ion-no-margin" button={true} onClick={()=>props.openModalFunction(props.recipe.Name)}>
          <IonCardTitle class="ion-padding">{props.recipe.Name}</IonCardTitle>

          <IonCardContent>
            <h2>
              {/*props.recipe[0].Recipe.Duration*/"20 minutes"}
              <br/>
              {/*props.recipe[0].Recipe.Length*/"7"} Ingredients Involved
            </h2>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default RecipeSlip;
