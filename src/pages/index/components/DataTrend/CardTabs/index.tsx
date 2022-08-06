import React, { Component } from "react";
import "./style.scss";
import { CardItemType } from "./types";
import CardItem from "./CardItem";
interface IProps {
  cardData: CardItemType[];
  onChange?: (selectedId: string) => void;
}

interface IStates {}

class CardTabs extends Component<IProps, IStates> {
  state = {};
  handleChange = (selectedId: string) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(selectedId);
    }
  };

  render() {
    const { cardData } = this.props;
    return (
      <div className="cardtabs-component-box">
        {cardData.map((cardItem: CardItemType, index: number) => (
          <CardItem
            name={cardItem.name}
            value={cardItem.value}
            persent={cardItem.persent}
            icon={cardItem.icon}
            id={cardItem.id}
            isSelected={cardItem.isSelected}
            onClick={(selectedId: string) => {
              this.handleChange(selectedId);
            }}
            key={`cardItem${index.toString()}`}
          />
        ))}
      </div>
    );
  }
}
export default CardTabs;
