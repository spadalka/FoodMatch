import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab3.css";

const Tab3: React.FC = () => {
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
          <IonRow class="ion-text-center">
            <IonCol>
              <IonButton color="cyan">Tomato</IonButton>
            </IonCol>
            <IonCol>
              <IonButton color="cyan">Potato</IonButton>
            </IonCol>
          </IonRow>
          <IonRow class="ion-text-center">
            <IonCol>
              <IonButton color="cyan">Lettuce</IonButton>
            </IonCol>
            <IonCol>
              <IonButton color="cyan">Broccoli</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow class="ion-text-center">
            <IonCol>
              <IonButton color="danger" expand="block">
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
