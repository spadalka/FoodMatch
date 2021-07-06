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
import {closeOutline} from 'ionicons/icons';
import IngredientItem from '../components/RecipeIngredients';

const ModalSubscreen: React.FC<{ closeFunction : () => void ; getInfo : (index : number) => any}> = (props) => {

    /*
    used to execute methods on render
    useEffect(() => {
        
    })
    */


    return(
        <IonPage>
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
                                {props.getInfo(1).map((item : any) => {
                                    return <IngredientItem itemName={item} key={item}/>
                                })}
                            </IonList>
                        </IonCol>
                        
                        <IonCol offset="1" id="test">
                            <IonList>
                                {props.getInfo(2).map((item : any) => {
                                    return <IngredientItem itemName={item} key={item}/>
                                })}
                            </IonList>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                <IonItem>
                    Missing Ingredients
                </IonItem>

                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IngredientItem itemName={"Test"}/>
                        </IonCol>

                        <IonCol offset="1" id="test">
                            <IngredientItem itemName={"Test"}/>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default ModalSubscreen;