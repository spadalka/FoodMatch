import React from "react";
import {
  IonRow,
  IonCol,
  IonCard,
  IonButton,
  IonIcon,
  IonLabel,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import { closeCircle } from "ionicons/icons";
import '../pages/Tab2.css';

const IngredientIndicator: React.FC<{
  ingredient_1: string;
  ingredient_2: string;
  editMode: boolean;
}> = (props) => {
  return (
    <IonRow class="ion-text-center">
      <IonCol>
        <IonButton color="cyan" class="ion-no-padding ion-padding-start">
          <IonLabel class="ion-padding-end">{props.ingredient_1}</IonLabel>
          {props.editMode && (<IonIcon class="ion-no-padding ion-padding-end" icon={closeCircle}/>)}
        </IonButton>
      </IonCol>
      <IonCol>
        {props.ingredient_2 != "" &&<IonButton color="cyan" class="ion-no-padding ion-padding-start">
          <IonLabel class="ion-padding-end">{props.ingredient_2}</IonLabel>
          {props.editMode && (<IonIcon class="ion-no-padding ion-padding-end" icon={closeCircle}/>)}
        </IonButton>}
      </IonCol>
    </IonRow>
  );
};

export default IngredientIndicator;
