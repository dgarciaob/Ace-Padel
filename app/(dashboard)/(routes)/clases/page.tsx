"use client";

import React, { useState } from "react";
import Profesores from "@/components/Profesores";
import MobileSidebar from "@/components/mobile-sidebar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { UserButton } from "@clerk/nextjs";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import OverviewProfesores from "@/components/OverviewProfesores";
import { Profesores as ProfesoresType } from "@/data/profesores";

export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2023, 0, 20),
    to: addDays(new Date(2023, 0, 20), 20),
  });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Selecciona una fecha</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 mr-8" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

function Clases() {
  const [profesorSeleccionado, setProfesorSeleccionado] =
    useState<ProfesoresType | null>(null);
  return (
    <div>
      <div className="pt-8 px-8 flex justify-between items-center align-middle">
        <h2 className="text-2xl md:text-4xl font-bold hidden md:block text-[#0D0760]">
          Profesores
        </h2>
        <div className="flex items-center p-4 md:hidden">
          <MobileSidebar />
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="pt-0 px-8 flex justify-end">
            <DatePickerWithRange />
          </div>
          <div>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
      <div className="mt-[40px] px-8">
        <Profesores setProfesorSeleccionado={setProfesorSeleccionado} />
      </div>
      <div className="mt-[40px] px-8">
        {profesorSeleccionado && (
          <OverviewProfesores profesor={profesorSeleccionado} />
        )}
      </div>
    </div>
  );
}

export default Clases;
