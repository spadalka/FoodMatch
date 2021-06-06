import React from "react";
import {
  IonRow,
  IonCol,
  IonCard,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";

const RecipeSlip: React.FC<{
  recipeName: string;
  recipeDuration: string;
  missingCount: number;
}> = (props) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard color="warning" class="ion-no-margin">
          <IonCardTitle class="ion-padding">{props.recipeName}</IonCardTitle>

          <IonCardContent>
            <h2>
              {props.recipeDuration}
              <br/>
              {props.missingCount} Ingredients Involved
            </h2>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default RecipeSlip;
