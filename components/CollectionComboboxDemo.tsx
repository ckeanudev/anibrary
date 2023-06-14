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

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

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

  const filterGenre = () => {
    data = data.filter(function (cv: any) {
      return !genres.find(function (e: any) {
        return e.mal_id == cv.mal_id;
      });
    });

    console.log(data);
  };

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
      <PopoverContent className="w-[220px  p-0">
        <Command>
          <CommandInput placeholder="Search genre..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <ScrollArea className="h-[500px]">
            <CommandGroup>
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
