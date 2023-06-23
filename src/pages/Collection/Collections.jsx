import { DirectionOrder } from "../../componentes/DirectionOrder";
import { ContainerFilter } from "./ContainerFilter";

export const Collections = () => {
  return (
    <>
      <div className="pt-28 px-20">
        <DirectionOrder text="Collections" />
        <div className="flex">
          <ContainerFilter />
        </div>
      </div>
    </>
  );
};
