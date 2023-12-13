import React from 'react';
import { UI } from 'components';
import { priceData } from 'mocks/price';
import PriceItem from 'models/prices';

export interface TableNavigationProps {
  filter: string;
  onClick: (filter: string) => void;
}

const TableNavigation = ({ filter, onClick }: TableNavigationProps) => {
  return (
    <div className="flex mt-8 w-full">
      {priceData.map((button: PriceItem, index: number) => {
        return (
          <UI.Button
            key={index}
            variant={button.title === filter ? 'contained' : 'outline'}
            size="sm"
            className={`font-bold py-4 ${button.className} ${
              index + 1 < priceData.length && 'border-r-0'
            }`}
            onClick={() => onClick(button.title)}
          >
            {button.title}
          </UI.Button>
        );
      })}
    </div>
  );
};

export default TableNavigation;