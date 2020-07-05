import React, { useState, useEffect } from "react";
import { IonList, IonItem, IonIcon, IonTitle, IonToggle } from "@ionic/react";
import { moon, sunny } from "ionicons/icons";
import { darkTheme } from "../../utils/utils";

const ToggleTheme = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        darkTheme(dark);
    }, [dark]);

    return (
        <IonList>
            <IonItem lines="none">
                <IonIcon src={!dark ? moon : sunny} />
                <IonTitle color="tertiary">Toggle Theme</IonTitle>
                <IonToggle
                    className="ion-toggle"
                    mode="ios"
                    slot="end"
                    onIonChange={() => setDark(!dark)}
                />
            </IonItem>
        </IonList>
    );
};

export default ToggleTheme;
