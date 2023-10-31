export interface Profesores {
  name: string;
  categoria: string;
  cover: string;
  data: {
    clases: number;
    progresoClases: number;
    alumnos: number;
    progresoAlumnos: number;
    ingresos: number;
    progresoIngresos: number;
  }[];
}

export const listaProfesores: Profesores[] = [
  {
    name: "Diego García",
    categoria: "Segunda Categoría",
    cover: "/profesores/profesor2.jpg",
    data: [
      {
        clases: 15,
        progresoClases: 0.05,
        alumnos: 8,
        progresoAlumnos: 0.1,
        ingresos: 300,
        progresoIngresos: 0.15,
      },
    ],
  },
  {
    name: "Franco Rossi",
    categoria: "Quinta Categoría",
    cover: "/profesores/profesor1.jpg",
    data: [
      {
        clases: 12,
        progresoClases: 0.05,
        alumnos: 10,
        progresoAlumnos: 0.05,
        ingresos: 800,
        progresoIngresos: 0.05,
      },
    ],
  },
  {
    name: "Alexis Zerga",
    categoria: "Tercera Categoría",
    cover: "/profesores/profesor3.jpg",
    data: [
      {
        clases: 23,
        progresoClases: 0.2,
        alumnos: 8,
        progresoAlumnos: 0.08,
        ingresos: 1000,
        progresoIngresos: 0.3,
      },
    ],
  },
  {
    name: "Luis Zapata",
    categoria: "Tercera Categoría",
    cover: "/profesores/profesor4.jpg",
    data: [
      {
        clases: 8,
        progresoClases: 0.09,
        alumnos: 14,
        progresoAlumnos: 0.01,
        ingresos: 1500,
        progresoIngresos: 0.2,
      },
    ],
  },
  {
    name: "Diego García",
    categoria: "Segunda Categoría",
    cover: "/profesores/profesor2.jpg",
    data: [
      {
        clases: 15,
        progresoClases: 0.5,
        alumnos: 0,
        progresoAlumnos: 0.01,
        ingresos: 500,
        progresoIngresos: 0.4,
      },
    ],
  },
  {
    name: "Franco Rossi",
    categoria: "Quinta Categoría",
    cover: "/profesores/profesor1.jpg",
    data: [
      {
        clases: 15,
        progresoClases: 0.5,
        alumnos: 0,
        progresoAlumnos: 0.01,
        ingresos: 500,
        progresoIngresos: 0.4,
      },
    ],
  },
  {
    name: "Diego García",
    categoria: "Segunda Categoría",
    cover: "/profesores/profesor2.jpg",
    data: [
      {
        clases: 15,
        progresoClases: 0.5,
        alumnos: 0,
        progresoAlumnos: 0.01,
        ingresos: 500,
        progresoIngresos: 0.4,
      },
    ],
  },
  {
    name: "Franco Rossi",
    categoria: "Quinta Categoría",
    cover: "/profesores/profesor1.jpg",
    data: [
      {
        clases: 15,
        progresoClases: 0.5,
        alumnos: 0,
        progresoAlumnos: 0.01,
        ingresos: 500,
        progresoIngresos: 0.4,
      },
    ],
  },
  {
    name: "Alexis Zerga",
    categoria: "Tercera Categoría",
    cover: "/profesores/profesor3.jpg",
    data: [
      {
        clases: 15,
        progresoClases: 0.5,
        alumnos: 0,
        progresoAlumnos: 0.01,
        ingresos: 500,
        progresoIngresos: 0.4,
      },
    ],
  },
  {
    name: "Luis Zapata",
    categoria: "Tercera Categoría",
    cover: "/profesores/profesor4.jpg",
    data: [
      {
        clases: 15,
        progresoClases: 0.5,
        alumnos: 0,
        progresoAlumnos: 0.01,
        ingresos: 500,
        progresoIngresos: 0.4,
      },
    ],
  },
];
