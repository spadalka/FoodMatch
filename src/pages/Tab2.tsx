import { IonButton, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonLoading, IonModal, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import Data from '../backEndInfo/test.json';
import RecipeSlip from '../components/RecipeSlip';
import ModalSubscreen from '../components/ModalSubscreen';
import { useEffect, useState } from 'react';

export const Tab2: React.FC = () => {
  const[showModal, setShowModal] = useState(false);

  const[recInfo, setInfo] = useState<Array<any>>(["name", [], [], "0 hours"])

  const [data,setData] = useState(null) as any;

  const [currentMode, changeMode] = useState<number>(1);

  /*
  modalPage stores the setting in which will be used when opening a modal page
  the variable will tell the modal page whether to format itself as either:
    (when value = 1) a recipe info page
    (when value = 2) a filter setting page
  These values are changed by both the "openModalRecipePage" function and the "openModalFilterPage" function
  */
  const [modalPage, setModalPage] = useState<number>(1);

  function infoExtraction(src : any){
    let output = new Array();
    Data.IDs.map((index) => {
      output.push(getSpecificElement(src, index).Recipe);
    })
      //output.push(getSpecificElement(src, getSpecificElement(IDList, i)))
      //console.log(getSpecificElement(IDList, i))
      //i++;
    //console.log(output)
    // for(let indivID in Data.IDs){
    //   output.push(getSpecificElement(src, indivID).Recipe);
    // }
    setData(output);
  }

  function getSpecificElement(src : any, index : number) : any {
    return src[index];
  }

  const openModalRecipePage = (ID: string) => {
    setCurrentRecipe(ID);
    setModalPage(1);
    setShowModal(true);
  }

  const setCurrentRecipe = async (recName:string) => {
    data.forEach((element:any) => {
      if(element.Name == recName){
        let l_1 = [];
        let l_2 = [];
        let i = 0;
        while(i < (element.Ingredients.length)/2){
          l_1.push(element.Ingredients[i].Ingredient);
          i++;
        }
        while(i < element.Ingredients.length){
          l_2.push(element.Ingredients[i].Ingredient);
          i++;
        }
        setInfo([recName, l_1, l_2, "20 minutes"])
      }
    });
  }

  function getInfo(index : number): any{
    return recInfo[index];
  }

  const closeModal = () => {
    setShowModal(false);
  }

  const openModalFilterPage = () => {
    setModalPage(2);
    setShowModal(true);
  }

  useEffect(()=>{
    fetch('https://nerv3sine.github.io/RecipeDatabase.json')
      .then(res =>{
        console.log("data fetch success!");
        return res.json();
      })
      .then(data => {
        infoExtraction(data.Cookbook);
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="red1">
          <IonTitle color="dark" class="ion-padding">
            Recipe<br/>Library
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen id="main">

        <IonModal isOpen={showModal}>
          <ModalSubscreen popUpType={modalPage} closeFunction={closeModal} getInfo={getInfo}/>
        </IonModal>

        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-right">
              <IonButton color="beige" size="small" onClick={openModalFilterPage}>Filter</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        {
        data && data.map((Rec : any) => {
          return <RecipeSlip recipe={Rec} openModalFunction={openModalRecipePage}></RecipeSlip>
        })
        }
      </IonContent>
    </IonPage>
  );
};

export default Tab2;