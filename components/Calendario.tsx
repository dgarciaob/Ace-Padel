import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

function Calendario() {
  const diasSemana = [
    {
      dia: "L",
      diaNum: 1,
    },
    {
      dia: "M",
      diaNum: 2,
    },
    {
      dia: "Mi",
      diaNum: 3,
    },
    {
      dia: "J",
      diaNum: 4,
    },
    {
      dia: "V",
      diaNum: 5,
    },
    {
      dia: "S",
      diaNum: 6,
    },
    {
      dia: "D",
      diaNum: 7,
    },
  ];

  const hours = [
    {
      hour: "06:00",
      espacio: <Button>Button</Button>,
      id: "1",
    },
    {
      hour: "07:00",
      espacio: <Button>Button</Button>,
      id: "2",
    },
    {
      hour: "08:00",
      espacio: <Button>Button</Button>,
      id: "3",
    },
    {
      hour: "09:00",
      espacio: <Button>Button</Button>,
      id: "4",
    },
    {
      hour: "10:00",
      espacio: <Button>Button</Button>,
      id: "5",
    },
    {
      hour: "11:00",
      espacio: <Button>Button</Button>,
      id: "6",
    },
    {
      hour: "12:00",
      espacio: <Button>Button</Button>,
      id: "7",
    },
    {
      hour: "01:00",
      espacio: <Button>Button</Button>,
      id: "8",
    },
    {
      hour: "02:00",
      espacio: <Button>Button</Button>,
      id: "9",
    },
    {
      hour: "03:00",
      espacio: <Button>Button</Button>,
      id: "10",
    },
    {
      hour: "04:00",
      espacio: <Button>Button</Button>,
      id: "11",
    },
    {
      hour: "05:00",
      espacio: <Button>Button</Button>,
      id: "12",
    },
    {
      hour: "06:00",
      espacio: <Button>Button</Button>,
      id: "13",
    },
    {
      hour: "07:00",
      espacio: <Button>Button</Button>,
      id: "14",
    },
    {
      hour: "08:00",
      espacio: <Button>Button</Button>,
      id: "15",
    },
    {
      hour: "09:00",
      espacio: <Button>Button</Button>,
      id: "16",
    },
    {
      hour: "10:00",
      espacio: <Button>Button</Button>,
      id: "17",
    },
    {
      hour: "11:00",
      espacio: <Button>Button</Button>,
      id: "18",
    },
    {
      hour: "12:00",
      espacio: <Button>Button</Button>,
      id: "19",
    },
  ];

  return (
    <div>
      <div>
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-row justify-around">
              <div className="flex flex-col items-center justify-center py-2 px-[36px] border"></div>
              {diasSemana.map((dia) => (
                <div
                  key={dia.diaNum}
                  className="flex flex-col items-center justify-center py-2 px-[40px] flex-1 space-y-2 border"
                >
                  <div className="text-muted-foreground">{dia.dia}</div>
                  <div>{dia.diaNum}</div>
                </div>
              ))}
            </div>

            {hours.map((hourObj) => (
              <div key={hourObj.id} className="flex flex-row justify-around">
                <div className="flex flex-col items-center justify-center py-2 px-[10px] flex-1 border">
                  {hourObj.hour}
                </div>
                {diasSemana.map((dia) => (
                  <div
                    key={dia.diaNum}
                    className="flex flex-col flex-auto border"
                  >
                    <Button className="px-[40px] h-5 bg-white hover:bg-gray-100"></Button>
                    <Button className="px-[40px] h-5 bg-white hover:bg-gray-100"></Button>
                  </div>
                ))}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Calendario;
