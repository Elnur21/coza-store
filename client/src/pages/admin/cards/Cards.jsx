import React, { useContext, useEffect, useState } from "react";
import { CardContext } from "../../../context/CardContext";
import CardContent from "./CardContent";

const Cards = () => {
    const { basicData, deleteCard } = useContext(CardContext);
    const [cardsData, setCardsData] = useState([]);
    useEffect(() => {
        setCardsData(basicData);
    }, [basicData])


    return (
        <div className="d-flex justify-content-center py-5">
            <div className="w-75">
                <h2>All Cards</h2>
                <div className="row my-5">
                    {
                        cardsData.map(card => (
                            <CardContent
                                key={card._id}
                                cardImage={card.image}
                                cardTitle={card.name}
                                cardPrice={card.price}
                                deleteCard={deleteCard}
                                id={card._id}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Cards;
