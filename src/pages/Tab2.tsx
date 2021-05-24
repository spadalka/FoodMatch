import { IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle color="dark" class="ion-padding">
            Recipe<br></br>Library
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard color="warning" class="ion-no-margin">
                <IonCardTitle class="ion-padding">
                  Food Name
                </IonCardTitle>

                <IonCardContent>
                  <h2>
                    Time<br></br>Missing Ingredients
                  </h2>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
