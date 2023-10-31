"use client";

import * as React from "react";
import { UserButton } from "@clerk/nextjs";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import MobileSidebar from "@/components/mobile-sidebar";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Overview from "@/components/Overview";
import OverviewReservas from "@/components/OverviewReservas";
import OverviewFinanzas from "@/components/OverviewFinanzas";

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

export default function DashboardPage() {
  return (
    <div>
      <div className="pt-8 px-8 flex justify-between items-center align-middle">
        <h2 className="text-2xl md:text-4xl font-bold hidden md:block text-[#0D0760]">
          Reportería
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
      <div className="pt-[40px] px-8 flex">
        <div>
          <Tabs defaultValue="account" className="w-[1000px]">
            <TabsList>
              <TabsTrigger value="resumen">Resumen</TabsTrigger>
              <TabsTrigger value="reservas">Reservas</TabsTrigger>
              <TabsTrigger value="finanzas">Finanzas</TabsTrigger>
              <TabsTrigger value="jugadores">Jugadores</TabsTrigger>
            </TabsList>
            <TabsContent value="resumen">
              <Overview />
            </TabsContent>
            <TabsContent value="reservas">
              <OverviewReservas />
            </TabsContent>
            <TabsContent value="finanzas">
              <OverviewFinanzas />
            </TabsContent>
            <TabsContent value="jugadores">
              Tus jugadores van escritos aqui.
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
