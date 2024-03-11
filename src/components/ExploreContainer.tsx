import './ExploreContainer.css';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Arsy Arts</IonCardTitle>
        <IonCardSubtitle>Charcoal Portrait</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>This Is My First Ionic Application</IonCardContent>
    </IonCard>
  );
};

export default ExploreContainer;
