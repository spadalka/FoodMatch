import {
  IonBadge,
  IonButton,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { closeCircle } from "ionicons/icons";
import { useState } from "react";
import "./Tab3.css";
import IngredientIndicator from "../components/IngredientIndicator";

const ingDatabase = {
  "inventory":[
    {
      "item1" : "Tomato",
      "item2" : "Potato"
    },
    {
      "item1" : "Lettuce",
      "item2" : "Broccoli"
    },
    {
      "item1" : "Cabbage",
      "item2" : "Spinach"
    },
    {
      "item1" : "eggs",
      "item2" : "tofu"
    },
    {
      "item1" : "salad",
      "item2" : ""
    }
  ]
}

const Tab3: React.FC = () => {
  
  const[editMode, setEditMode] = useState(false);
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle color="dark" class="ion-padding">
            My<br></br>Ingredients
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonGrid>
          {ingDatabase.inventory.map((Rec) => {
            return <IngredientIndicator ingredient_1 = {Rec.item1} ingredient_2 = {Rec.item2} editMode={editMode}/>
          })}
        </IonGrid>

        <IonGrid>
          <IonRow class="ion-text-center">
            <IonCol>
              <IonButton color="danger" expand="block" onClick={()=>setEditMode(!editMode)}>
                <IonLabel color="dark">
                  Edit
                  </IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
