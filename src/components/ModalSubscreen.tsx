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

const ModalSubscreen: React.FC<{ popUpType : number ; closeFunction : () => void ; getInfo : (index : number) => any}> = (props) => {

    /*
    used to execute methods on render
    useEffect(() => {
        
    })
    */


    /*
    popUpType -> Used to display different menus on a modal
    1: shows the recipe provided externally
    2: shows a filter page that changes how the previous menu was filtered
    */

    return(
        <IonPage>
            
            {props.popUpType == 1 && (
                <IonHeader>
                    
                        <IonToolbar color="danger">
                        <IonTitle color="dark" class="ion-padding">
                            {props.getInfo(0)} Recipe
                        </IonTitle>
                        <IonIcon slot="end" icon={closeOutline} color="dark" size="large" onClick={()=> props.closeFunction()} class="ion-padding"></IonIcon>
                        </IonToolbar>
                    
                    
                </IonHeader>

            )}
            
            {props.popUpType == 1 && (
            <IonContent>
            
                <IonImg src="https://wallpaperaccess.com/full/4393443.jpg" alt="food wallpaper" />

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
            )}

            {props.popUpType != 1 && (
                <IonHeader>
                    
                <IonToolbar color="beige">
                <IonIcon slot="end" icon={closeOutline} color="dark" size="large" onClick={()=> props.closeFunction()} class="ion-padding"></IonIcon>
                </IonToolbar>
            
            
                </IonHeader>
            )}

            {props.popUpType != 1 && (
                <IonContent color="beige">

                </IonContent>
            )}

        </IonPage>
    )
}

export default ModalSubscreen;