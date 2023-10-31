import Image from "next/image";

import { cn } from "@/lib/utils";

import { Profesores } from "@/data/profesores";
import { Profesores as ProfesoresType } from "@/data/profesores";

interface FotoProfesoresProps extends React.HTMLAttributes<HTMLDivElement> {
  profesor: ProfesoresType;
  setProfesorSeleccionado: (profesor: ProfesoresType) => void;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}

export function FotoProfesores({
  profesor,
  setProfesorSeleccionado,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: FotoProfesoresProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <div className="overflow-hidden rounded-md">
        <Image
          src={profesor.cover}
          alt={profesor.name}
          width={width}
          height={height}
          onClick={() => setProfesorSeleccionado(profesor)}
          className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
          )}
        />
      </div>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{profesor.name}</h3>
        <p className="text-xs text-muted-foreground">{profesor.categoria}</p>
      </div>
    </div>
  );
}
