"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Gráfico } from "./Gráfico";
import Dropdown from "./Dropdown";

function OverviewFinanzas() {
  const [seleccion, setSeleccion] = useState<"ingresos" | "gastos">("ingresos");
  return (
    <div>
      <div className="mt-4">
        <Dropdown
          placeholder="Ingresos"
          options={[
            { label: "Ingresos", value: "ingresos" },
            { label: "Gastos", value: "gastos" },
          ]}
          onChange={(option) => {
            setSeleccion(option.value);
          }}
        />
      </div>

      {seleccion === "ingresos" && (
        <div>
          <div className="flex space-x-4 mt-4">
            <Card className="flex-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Ingresos Totales
                </CardTitle>
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
                <div className="text-2xl font-bold">S/45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  +14.1% vs mes pasado
                </p>
              </CardContent>
            </Card>

            <Card className="flex-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Por productos de Tienda
                </CardTitle>
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
                <div className="text-2xl font-bold">S/15,902.1</div>
                <p className="text-xs text-muted-foreground">
                  +10.1% vs mes pasado
                </p>
              </CardContent>
            </Card>

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
                  className="lucide lucide-users-2"
                >
                  <path d="M14 19a6 6 0 0 0-12 0" />
                  <circle cx="8" cy="9" r="4" />
                  <path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">S/540</div>
                <p className="text-xs text-muted-foreground">
                  +19% vs mes pasado
                </p>
              </CardContent>
            </Card>

            <Card className="flex-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Reserva de Canchas
                </CardTitle>
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
                  className="lucide lucide-user-2"
                >
                  <circle cx="12" cy="8" r="5" />
                  <path d="M20 21a8 8 0 1 0-16 0" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">S/5,750</div>
                <p className="text-xs text-muted-foreground">
                  +24% vs mes pasado
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {seleccion === "gastos" && (
        <div>
          <div className="flex space-x-4 mt-4">
            <Card className="flex-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Gastos Totales
                </CardTitle>
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
                <div className="text-2xl font-bold">S/15,231.89</div>
                <p className="text-xs text-muted-foreground">
                  +1.1% vs mes pasado
                </p>
              </CardContent>
            </Card>

            <Card className="flex-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Servicios</CardTitle>
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
                <div className="text-2xl font-bold">S/10,902.1</div>
                <p className="text-xs text-muted-foreground">
                  -2.1% vs mes pasado
                </p>
              </CardContent>
            </Card>

            <Card className="flex-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Implementos
                </CardTitle>
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
                <div className="text-2xl font-bold">S/920</div>
                <p className="text-xs text-muted-foreground">
                  +1% vs mes pasado
                </p>
              </CardContent>
            </Card>

            <Card className="flex-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Mantenimiento Canchas
                </CardTitle>
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
                  className="lucide lucide-user-2"
                >
                  <circle cx="12" cy="8" r="5" />
                  <path d="M20 21a8 8 0 1 0-16 0" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">S/5,000</div>
                <p className="text-xs text-muted-foreground">
                  +2% vs mes pasado
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      <div className="mt-4">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Resumen</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Gráfico />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default OverviewFinanzas;
