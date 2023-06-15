"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "./ui/scroll-area";

interface ComboboxDemoProps {
  genres: any;
  setGenres: any;
  data: any;
}

export const ComboboxDemo: React.FC<ComboboxDemoProps> = ({
  genres,
  setGenres,
  data,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between text-white">
          {"Select Genre"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command className="w-full ">
          <CommandInput placeholder="Search genre..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <ScrollArea className="w-full h-[500px]">
            <CommandGroup className="w-full">
              {
                (data = data
                  .filter(function (cv: any) {
                    return !genres.find(function (e: any) {
                      return e.mal_id == cv.mal_id;
                    });
                  })
                  .map((data: any) => (
                    <CommandItem
                      key={data.mal_id}
                      onSelect={(currentValue) => {
                        setGenres((oldArray: any) => [...oldArray, data]);
                        setOpen(false);
                      }}>
                      {data.name}
                    </CommandItem>
                  )))
              }
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
