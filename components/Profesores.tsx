import React, { useState } from "react";
import { Tabs, TabsContent } from "./ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import { FotoProfesores } from "./FotoProfesores";
import {
  listaProfesores,
  Profesores as ProfesoresType,
} from "@/data/profesores";
import OverviewProfesores from "./OverviewProfesores";

interface ProfesoresProps {
  setProfesorSeleccionado: React.Dispatch<
    React.SetStateAction<ProfesoresType | null>
  >;
}

function Profesores({ setProfesorSeleccionado }: ProfesoresProps) {
  return (
    <div>
      <div className="mt-6 space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight text-[#0D0760]">
          Entrenadores
        </h2>
        <p className="text-sm text-muted-foreground">
          Revisa las estadísticas de cada entrenador.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {listaProfesores.map((profesor) => (
              <FotoProfesores
                key={profesor.name}
                profesor={profesor}
                setProfesorSeleccionado={setProfesorSeleccionado}
                className="w-[150px] cursor-pointer"
                aspectRatio="square"
                width={150}
                height={150}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}

export default Profesores;
