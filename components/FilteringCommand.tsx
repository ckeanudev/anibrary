"use client";
import * as React from "react";
import { ComboboxDemo } from "./CollectionComboboxDemo";
import { MdClose } from "react-icons/md";
import FilteringOrderBy from "./FilteringOrderBy";
import FilteringRating from "./FilteringRating";
import FilteringStatus from "./FilteringStatus";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilteringCommandProps {
  genres: any;
  setGenres: any;
  genresData: any;
  orderBy: any;
  setOrderBy: any;
  rating: any;
  setRating: any;
  status: any;
  setStatus: any;
}

const FilteringCommand: React.FC<FilteringCommandProps> = ({
  genres,
  setGenres,
  genresData,
  orderBy,
  setOrderBy,
  rating,
  setRating,
  status,
  setStatus,
}) => {
  return (
    <div className="py-3 px-3.5 bg-[#101314] rounded-md w-full">
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

        <Select
          defaultValue={orderBy}
          onValueChange={(e: any) => {
            console.log(e);
            setOrderBy(e);
          }}>
          <SelectTrigger className="w-full text-white">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rank">Rank</SelectItem>
            <SelectItem value="score">Score</SelectItem>
            <SelectItem value="title">Title</SelectItem>
            <SelectItem value="type">Type</SelectItem>
            <SelectItem value="rating">Ratng</SelectItem>
          </SelectContent>
        </Select>

        {/* <FilteringOrderBy order={orderBy} setOrder={setOrderBy} /> */}
      </div>

      {/* -------------- Status -------------- */}
      <div className="mb-1 border-b-[1px] border-[#343A40] pb-3">
        <h2 className="text-white text-lg font-semibold mb-1">Status</h2>

        <Select
          defaultValue={status}
          onValueChange={(e: any) => {
            console.log(e);
            setStatus(e);
          }}>
          <SelectTrigger className="w-full text-white">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="airing">Airing</SelectItem>
            <SelectItem value="complete">Complete</SelectItem>
            <SelectItem value="upcoming">Upcoming</SelectItem>
          </SelectContent>
        </Select>

        {/* <FilteringStatus status={status} setStatus={setStatus} /> */}
      </div>

      {/* -------------- Rating -------------- */}
      <div className="mb-1 border-b-[1px] border-[#343A40] pb-3">
        <h2 className="text-white text-lg font-semibold mb-1">Rating</h2>

        <Select
          defaultValue={rating}
          onValueChange={(e: any) => {
            console.log(e);
            setRating(e);
          }}>
          <SelectTrigger className="w-full text-white">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="g">G - All Ages</SelectItem>
            <SelectItem value="pg">PG - Children</SelectItem>
            <SelectItem value="pg13">PG-13 - Teens 13 or older</SelectItem>
            <SelectItem value="r17">R - 17+ (violence & profanity)</SelectItem>
            <SelectItem value="r">R+ - Mild Nudity</SelectItem>
            <SelectItem value="rx">Rx - Hentai</SelectItem>
          </SelectContent>
        </Select>

        {/* <FilteringRating rating={rating} setRating={setRating} /> */}
      </div>

      <button className="w-full text-white bg-[#25A18E] p-2 mt-3 rounded">
        Search
      </button>
    </div>
  );
};

export default FilteringCommand;
