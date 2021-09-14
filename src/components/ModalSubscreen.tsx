import React, { useEffect, useState } from "react";
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
    IonLabel, 
    IonText,
    IonSegment,
    IonSegmentButton
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

    const[currentPage, changePage] = useState<string>("text");

    const pageChange = (ID : string | undefined) => {
        if(ID == undefined){
            changePage("text");
        }else{
            changePage(ID);
        }
    }

    return(
        <IonPage>
            
            {props.popUpType == 1 && (
                <IonHeader>
                    
                        <IonToolbar color="red1">
                        <IonTitle color="dark" class="ion-padding">
                            {props.getInfo(0)} Recipe
                        </IonTitle>
                        <IonIcon slot="end" icon={closeOutline} color="dark" size="large" onClick={()=> props.closeFunction()} class="ion-padding"></IonIcon>
                        </IonToolbar>
                    
                    
                </IonHeader>

            )}
            
            {props.popUpType == 1 && (
            <IonContent>
            
                <IonImg src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="food wallpaper" />

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
                
                <IonItem/>

                <IonItem color="warning" class="ion-no-margin">
                    <IonSegment color="dark" value={currentPage} onIonChange={val => pageChange(val.detail.value)}>
                        <IonSegmentButton value="text">
                            <IonLabel>Written<br/>Instruction</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="video">
                            <IonLabel>Video<br/>Instruction</IonLabel>
                        </IonSegmentButton>
                    </IonSegment>
                </IonItem>

                <IonItem color="warning"></IonItem>

                <IonItem color="warning">
                    {currentPage != "video" && (
                        <IonText>
                            Insert text instructions here
                        </IonText>
                    )}
                    {currentPage == "video" && (
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/MjVgIXccYXA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    )}
                </IonItem>

                {/*code below is for formatting purposes*/}

                <IonItem color="warning"></IonItem>
                
            </IonContent>
            )}

            {props.popUpType != 1 && (
                <IonHeader>
                    
                <IonToolbar color="red1">
                    <IonTitle color="dark" class="ion-padding">
                        Filter
                    </IonTitle>
                    <IonIcon slot="end" icon={closeOutline} color="dark" size="large" onClick={()=> props.closeFunction()} class="ion-padding"></IonIcon>
                </IonToolbar>
            
            
                </IonHeader>
            )}

            {props.popUpType != 1 && (
                <IonContent color="beige">
                    <IonItem color="beige"/>
                    <IonItem color="beige">
                        Display preference
                    </IonItem>

                </IonContent>
            )}

        </IonPage>
    )
}

export default ModalSubscreen;