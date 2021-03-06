import { IonItem, IonLabel } from "@ionic/react";
import React, { useEffect } from "react";

const RecipeIngredients: React.FC<{itemName : string}> = (props) => {
    
    return(
        <IonItem color="beige">
            <IonLabel>
                {props.itemName}
            </IonLabel>
        </IonItem>
    )
}

export default RecipeIngredients;