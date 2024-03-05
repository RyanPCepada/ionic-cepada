import './ExploreContainer.css';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Arsy Arts</IonCardTitle>
        <IonCardSubtitle>Charcoal portrait</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Thois is my first ionic Application</IonCardContent>
    </IonCard>
  );
};

export default ExploreContainer;
