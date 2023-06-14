"use client";
import * as React from "react";
import { ComboboxDemo } from "./CollectionComboboxDemo";
import { MdClose } from "react-icons/md";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import FilteringOrderBy from "./FilteringOrderBy";
import FilteringRating from "./FilteringRating";
import FilteringStatus from "./FilteringStatus";

interface FilteringCommandProps {
  genres: any;
  setGenres: any;
  genresData: any;
}

const genreData = [
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

const FilteringCommand: React.FC<FilteringCommandProps> = ({
  genres,
  setGenres,
  genresData,
}) => {
  //   console.log(genresData?.data.data);
  const [orderBy, setOrderBy] = React.useState("rank");
  const [rating, setRating] = React.useState("g");
  const [status, setStatus] = React.useState("airing");

  return (
    <div className="sticky top-[60px] py-2 px-3.5 bg-[#101314] rounded-md w-full">
      {/* -------------- Genres -------------- */}
      <div className="mb-1 border-b-[1px] border-[#343A40] pb-3">
        <h2 className="text-white text-lg font-semibold mb-1">Genres</h2>
        <ComboboxDemo
          genres={genres}
          setGenres={setGenres}
          data={genresData?.data.data}
        />

        <div className="flex flex-wrap gap-1 mt-3">
          {genres.map((data: any, i: number) => {
            return (
              <p
                key={i}
                className="text-white text-sm bg-[#495057] py-1 px-1.5 rounded flex gap-1 items-center">
                {data.name}{" "}
                <MdClose
                  onClick={() => {
                    setGenres(
                      genres.filter((item: any) => item.mal_id != data.mal_id)
                    );
                  }}
                  size={18}
                  className="text-[#DEE2E6] hover:text-white cursor-pointer"
                />
              </p>
            );
          })}
        </div>
      </div>

      {/* -------------- Order -------------- */}
      <div className="mb-1 border-b-[1px] border-[#343A40] pb-3">
        <h2 className="text-white text-lg font-semibold mb-1">Order By</h2>

        <FilteringOrderBy order={orderBy} setOrder={setOrderBy} />
      </div>

      {/* -------------- Status -------------- */}
      <div className="mb-1 border-b-[1px] border-[#343A40] pb-3">
        <h2 className="text-white text-lg font-semibold mb-1">Status</h2>

        <FilteringStatus status={status} setStatus={setStatus} />
      </div>

      {/* -------------- Rating -------------- */}
      <div className="mb-1 border-b-[1px] border-[#343A40] pb-3">
        <h2 className="text-white text-lg font-semibold mb-1">Rating</h2>

        <FilteringRating rating={rating} setRating={setRating} />
      </div>
    </div>
  );
};

export default FilteringCommand;
