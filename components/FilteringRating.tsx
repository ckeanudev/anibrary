"use client";

import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FC } from "react";

interface FilteringRatingProps {
  rating: any;
  setRating: any;
}

const FilteringRating: FC<FilteringRatingProps> = ({ rating, setRating }) => {
  return (
    <RadioGroup
      defaultValue={rating}
      onChange={(e: any) => {
        setRating(e.target.value);
      }}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="text-[#25A18E] border-white"
          value="g"
          id="g"
        />
        <Label htmlFor="g" className="text-white text-sm">
          G - All Ages
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="text-[#25A18E] border-white"
          value="pg"
          id="pg"
        />
        <Label htmlFor="pg" className="text-white text-sm">
          PG - Children
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="text-[#25A18E] border-white"
          value="pg13"
          id="pg13"
        />
        <Label htmlFor="pg13" className="text-white text-sm">
          PG-13 - Teens 13 or older
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="text-[#25A18E] border-white"
          value="r17"
          id="r17"
        />
        <Label htmlFor="r17" className="text-white text-sm">
          R - 17+ (violence & profanity)
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="text-[#25A18E] border-white"
          value="r"
          id="r"
        />
        <Label htmlFor="r" className="text-white text-sm">
          R+ - Mild Nudity
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="text-[#25A18E] border-white"
          value="rx"
          id="rx"
        />
        <Label htmlFor="rx" className="text-white text-sm">
          Rx - Hentai
        </Label>
      </div>
    </RadioGroup>
  );
};

export default FilteringRating;
