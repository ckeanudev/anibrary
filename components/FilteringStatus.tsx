"use client";
import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FC } from "react";

interface FilteringStatusProps {
  status: any;
  setStatus: any;
}

const FilteringStatus: FC<FilteringStatusProps> = ({ status, setStatus }) => {
  return (
    <RadioGroup
      defaultValue={status}
      onChange={(e: any) => {
        setStatus(e.target.value);
      }}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="text-[#25A18E] border-white"
          value="airing"
          id="airing"
        />
        <Label htmlFor="airing" className="text-white text-sm">
          Airing
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="text-[#25A18E] border-white"
          value="complete"
          id="complete"
        />
        <Label htmlFor="complete" className="text-white text-sm">
          Complete
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="text-[#25A18E] border-white"
          value="upcoming"
          id="upcoming"
        />
        <Label htmlFor="upcoming" className="text-white text-sm">
          Upcoming
        </Label>
      </div>
    </RadioGroup>
  );
};

export default FilteringStatus;
