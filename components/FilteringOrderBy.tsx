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
      defaultValue={"rank"}
      onChange={(e: any) => {
        console.log(e);
        setOrder(e.target.value);
      }}>
      <div
        className="flex items-center space-x-2"
        onChange={() => {
          console.log("rank");
          setOrder("rank");
        }}>
        <RadioGroupItem
          className="text-[#25A18E] border-white"
          value="rank"
          id="rank"
        />
        <Label htmlFor="rank" className="text-[#CED4DA] text-sm">
          Rank
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="text-[#25A18E] border-white"
          value="score"
          id="score"
        />
        <Label htmlFor="score" className="text-[#CED4DA]  text-sm">
          Score
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="text-[#25A18E] border-white"
          value="title"
          id="title"
        />
        <Label htmlFor="title" className="text-[#CED4DA]  text-sm">
          Title
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="text-[#25A18E] border-white"
          value="type"
          id="type"
        />
        <Label htmlFor="type" className="text-[#CED4DA]  text-sm">
          Type
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="text-[#25A18E] border-white"
          value="rating"
          id="rating"
        />
        <Label htmlFor="rating" className="text-[#CED4DA]  text-sm">
          Rating
        </Label>
      </div>
    </RadioGroup>
  );
};

export default FilteringOrderBy;
