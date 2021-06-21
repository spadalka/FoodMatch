import React, { useEffect } from "react";
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
import {closeOutline, information} from 'ionicons/icons';

const ModalSubscreen: React.FC<{ closeFunction : () => void ; getInfo : (index : number) => any}> = (props) => {

    let list1 : Array<string> = ["empty", "test"];
    let list2 : Array<string> = ["empty", "test"];

    /*
    used to execute methods on render
    useEffect(() => {
        
    })
    */

    return(
        <IonPage>
            {}
            <IonHeader>
                <IonToolbar color="danger">
                <IonTitle color="dark" class="ion-padding">
                    {props.getInfo(0)} Recipe
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