import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  Radio,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import "./ContainerFilter.css";

function Icon({ open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        open === true ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export const ContainerFilter = () => {
  // Arreglo de objetos con el nombre y el contenido de cada categoría
  const categories = [
    {
      name: "Género",
      content: ["Hombre", "Mujer"],
    },
    {
      name: "Talles",
      content: ["-35", "35-40", "40-45"],
    },
    {
      name: "Tipo",
      content: ["Deportivo", "Casual", "Elegante", "Football"],
    },
  ];

  // Arreglo de estados para controlar la visibilidad de cada categoría
  const [isActive, setIsActive] = useState(
    new Array(categories.length).fill(false)
  );

  // Función para cambiar el estado de una categoría
  const handleIsActive = (index) => {
    console.log("handleIsActive called with index:", index);
    const newIsActive = [...isActive];
    newIsActive[index] = !newIsActive[index];
    setIsActive(newIsActive);
  };

  return (
    <>
      <div className=" p-4 w-56 rounded flex flex-col gap-4">
        {/* Usar el método map para renderizar cada filtro y su contenido */}
        {categories.map((category, index) => (
          <div key={index}>
            <Accordion
              open={isActive[index]}
              icon={<Icon open={isActive[index]} />}
            >
              <AccordionHeader onClick={() => handleIsActive(index)}>
                {category.name}
              </AccordionHeader>
              <AccordionBody>
                {category.content.map((option) => (
                  <div className="text-base " key={option}>
                    <List>
                      <ListItem className="p-0" key={option}>
                        <label
                          htmlFor={`vertical-list-${option}`}
                          className=" flex items-center w-full cursor-pointer"
                        >
                          <ListItemPrefix className="mr-3">
                            <Radio
                              name={`vertical-list-${category.name}`}
                              id={`vertical-list-${category.name}-${option}`}
                              ripple={false}
                              className="hover:before:opacity-0"
                              containerProps={{
                                className: "p-0",
                              }}
                            />
                          </ListItemPrefix>
                          <Typography color="blue-gray" className="font-medium">
                            {option}
                          </Typography>
                        </label>
                      </ListItem>
                    </List>
                  </div>
                ))}
              </AccordionBody>
            </Accordion>
          </div>
        ))}
      </div>
    </>
  );
};
