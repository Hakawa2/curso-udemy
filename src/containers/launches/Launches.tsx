import React, { useState, useCallback, useEffect } from "react";
import { useLaunchesPastQuery, Launch } from "../../generated/graphql";
import LaunchesItem from "../../components/cards/LaunchesItem";
import { IonButton, IonGrid, IonCol, IonRow, IonLoading } from "@ionic/react";
import Error from "../../components/error/Error";

const Launches: React.FC = () => {
    const { data, loading, fetchMore, error } = useLaunchesPastQuery({
        variables: { limit: 12, offset: 0 },
    });

    const [offset, setOffset] = useState(0);
    const [limit] = useState(12);
    const [finished, setFinished] = useState(false);

    const handleLoadMore = useCallback(() => {
        setOffset(limit + offset);
    }, [limit, offset]);

    useEffect(() => {
        if (offset > 0) {
            fetchMore<"offset">({
                variables: {
                    offset,
                },
                updateQuery(previous, { fetchMoreResult }) {
                    if (!fetchMoreResult) {
                        return previous;
                    }

                    if (fetchMoreResult.launchesPast.length < limit) {
                        setFinished(true);
                    }

                    return {
                        ...previous,
                        launchesPast: [
                            ...previous!.launchesPast,
                            ...fetchMoreResult.launchesPast,
                        ],
                    };
                },
            });
        }
    }, [fetchMore, offset, limit]);

    if (loading) {
        return <IonLoading isOpen={loading} message="Loading ..." />;
    }

    if (error) {
        return <Error error={error} />;
    }

    return (
        <IonGrid fixed className="ion-no-padding">
            <IonRow>
                {data &&
                    data.launchesPast.map((launch) => (
                        <IonCol
                            key={launch.id}
                            size="12"
                            sizeSm="6"
                            sizeLg="4"
                            className="ion-no-padding"
                        >
                            <LaunchesItem launch={launch as Launch} />
                        </IonCol>
                    ))}
            </IonRow>
            {!loading && !finished && (
                <IonRow>
                    <IonCol>
                        <IonButton expand="block" onClick={handleLoadMore}>
                            Load more...
                        </IonButton>
                    </IonCol>
                </IonRow>
            )}
        </IonGrid>
    );
};

export default Launches;
