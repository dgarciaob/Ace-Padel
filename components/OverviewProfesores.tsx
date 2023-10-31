"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Gráfico } from "./Gráfico";
import { Profesores as ProfesoresType } from "@/data/profesores";

interface OverviewProfesoresProps {
  profesor: ProfesoresType;
}

const OverviewProfesores: React.FC<OverviewProfesoresProps> = ({
  profesor,
}) => {
  return (
    <div>
      <div className="flex space-x-4 mt-4">
        <Card className="flex-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clases</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="gray"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-dollar-sign"
            >
              <line x1="12" x2="12" y1="2" y2="22" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{profesor.data[0].clases}</div>
            <p className="text-xs text-muted-foreground">{`+${
              profesor.data[0].progresoClases * 100
            }% vs mes pasado`}</p>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alumnos</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="gray"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-clock"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{profesor.data[0].clases}</div>
            <p className="text-xs text-muted-foreground">{`+${
              profesor.data[0].progresoAlumnos * 100
            }% vs mes pasado`}</p>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ingreso Total</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="gray"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-users-2"
            >
              <path d="M14 19a6 6 0 0 0-12 0" />
              <circle cx="8" cy="9" r="4" />
              <path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{profesor.data[0].clases}</div>
            <p className="text-xs text-muted-foreground">{`+${
              profesor.data[0].progresoIngresos * 100
            }% vs mes pasado`}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OverviewProfesores;
