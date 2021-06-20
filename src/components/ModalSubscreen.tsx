import React from "react";
import { 
    IonPage, 
    IonToolbar, 
    IonHeader, 
    IonTitle, 
    IonIcon, 
    IonContent, 
    IonImg, 
    IonItem, 
    IonGrid, 
    IonRow, 
    IonCol, 
    IonList, 
    IonLabel 
} from "@ionic/react";
import {closeOutline} from 'ionicons/icons';

const ModalSubscreen: React.FC<{ closeFunction : () => void}> = (props) => {

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar color="danger">
                <IonTitle color="dark" class="ion-padding">
                    Recipe
                </IonTitle>
                <IonIcon slot="end" icon={closeOutline} color="dark" size="large" onClick={()=> props.closeFunction()} class="ion-padding"></IonIcon>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonImg src="https://wallpaperaccess.com/full/4393443.jpg" alt="food wallpaper"/>

                <IonItem>
                    Owned Ingredients
                </IonItem>

                <IonGrid>
                    <IonRow>

                        <IonCol id="test">
                        <IonList>
                            <IonItem color="warning">
                            <IonLabel>
                                test
                            </IonLabel>
                            </IonItem>
                            <IonItem color="warning">
                            <IonLabel>
                                test
                            </IonLabel>
                            </IonItem>
                        </IonList>
                        </IonCol>
                        
                        <IonCol offset="1" id="test">
                        <IonList>
                            <IonItem color="warning">
                            <IonLabel>
                                test
                            </IonLabel>
                            </IonItem>
                            <IonItem color="warning">
                            <IonLabel>
                                test
                            </IonLabel>
                            </IonItem>
                        </IonList>
                        </IonCol>
                    </IonRow>
                    </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default ModalSubscreen;