import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import CarCard from "../components/CarCard";
import Spinner from "../components/Spinner";
import { getCars, reset } from "../features/cars/carSlice";

const MyCars = () => {
  const { cars, isLoading, isSuccess } = useAppSelector((state) => state.cars);

  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  console.log(cars);

  return (
    <>
      <div className="respCont my-cars">
        <h1>My Cars</h1>
          <Grid container spacing={4}>
            {cars.map((car: any) => (
              <Grid item xs={12} sm={4} md={3}>
                <CarCard
                  model={car.model}
                  paint={car.paint}
                  inService={car.inService}
                />
              </Grid>
            ))}
          </Grid>
      </div>
    </>
  );
};

export default MyCars;
