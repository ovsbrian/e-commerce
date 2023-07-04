import { useState, useCallback } from 'react';
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { Radio, List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types';

import Icon from "./Icon";

export const ContainerFilter = ({ onFilterChange }) => {
  const categories = [
    {
      name: "Género",
      content: ["MEN", "WOMEN", "KIDS"],
    },
    {
      name: "Talles",
      content: ["-35", "35-38", "38-42", "42+"],
    },
    {
      name: "Tipo",
      content: ["RUNNING", "CASUAL", "FORMAL", "FOOTBALL"],
    },
  ];

  const [isActive, setIsActive] = useState(
    new Array(categories.length).fill(false)
  );
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedSizeRange, setSelectedSizeRange] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleIsActive = useCallback((index) => {
    const newIsActive = [...isActive];
    newIsActive[index] = !newIsActive[index];
    setIsActive(newIsActive);
  }, [isActive]);

  const handleSelectedFilter = useCallback((filterName, value) => {
    switch (filterName) {
      case 'Género':
        setSelectedGender(value);
        onFilterChange({ selectedGender: value, selectedSizeRange, selectedCategory });
        break;
      case 'Talles':
        setSelectedSizeRange(value);
        onFilterChange({ selectedGender, selectedSizeRange: value, selectedCategory });
        break;
      case 'Tipo':
        setSelectedCategory(value);
        onFilterChange({ selectedGender, selectedSizeRange, selectedCategory: value });
        break;
      default:
        break;
    }
  }, [onFilterChange, selectedCategory, selectedGender, selectedSizeRange]);

  return (
    <>
      <div className="p-4 w-56 rounded flex flex-col gap-4">
        {categories.map((category, index) => (
          <div key={index}>
            <Accordion
              open={isActive[index]}
              icon={<Icon open={isActive[index]} />}
            >
              <AccordionHeader onClick={() => handleIsActive(index)}>
                {category.name}
              </AccordionHeader>
              {isActive[index] && (
                <AccordionBody>
                  {category.content.map((option) => (
                    <div className="text-base" key={option}>
                      <List>
                        <ListItem className="p-0" key={option}>
                          <label
                            className="flex items-center w-full cursor-pointer"
                            onClick={() => handleSelectedFilter(category.name, option)}
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
                                checked={
                                  category.name === "Género"
                                    ? selectedGender === option
                                    : category.name === "Talles"
                                    ? selectedSizeRange === option
                                    : category.name === "Tipo"
                                    ? selectedCategory === option
                                    : false
                                }
                                onChange={() => {}}
                              />
                            </ListItemPrefix>
                            <Typography variant="body2">{option}</Typography>
                          </label>
                        </ListItem>
                      </List>
                    </div>
                  ))}
                </AccordionBody>
              )}
            </Accordion>
          </div>
        ))}
      </div>
    </>
  );
};

ContainerFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
