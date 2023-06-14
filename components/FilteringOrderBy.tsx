"use client";
import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FC } from "react";

interface FilteringOrderByProps {
  order: any;
  setOrder: any;
}

const FilteringOrderBy: FC<FilteringOrderByProps> = ({ order, setOrder }) => {
  return (
    <RadioGroup
      defaultValue={order}
      onChange={(e: any) => {
        setOrder(e.target.value);
      }}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="text-[#25A18E] border-white"
          value="rank"
          id="rank"
        />
        <Label htmlFor="rank" className="text-white text-sm">
          Rank
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="text-[#25A18E] border-white"
          value="score"
          id="score"
        />
        <Label htmlFor="score" className="text-white text-sm">
          Score
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="text-[#25A18E] border-white"
          value="title"
          id="title"
        />
        <Label htmlFor="title" className="text-white text-sm">
          Title
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="text-[#25A18E] border-white"
          value="type"
          id="type"
        />
        <Label htmlFor="type" className="text-white text-sm">
          Type
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="text-[#25A18E] border-white"
          value="rating"
          id="rating"
        />
        <Label htmlFor="rating" className="text-white text-sm">
          Rating
        </Label>
      </div>
    </RadioGroup>
  );
};

export default FilteringOrderBy;
