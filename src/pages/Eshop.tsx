import { SettingsRemoteSharp } from "@mui/icons-material";
import { Grid, Slider } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import ItemCard from "../components/ItemCard";
import Spinner from "../components/Spinner";
import { getItems, reset } from "../features/items/itemSlice";

const Eshop: React.FC = () => {
  const { items, isLoading, isSuccess } = useAppSelector(
    (state) => state.items
  );
  const [priceValue, setPriceValue] = useState<number[]>([10, 400]);

  const items2 = [
    { imgName: "cap_dr3", name: "the cap", price: 45 },
    { imgName: "cap_ln4", name: "the cap2", price: 55 },
    { imgName: "hoodie_miami", name: "hoodie miami", price: 150 },
    { imgName: "lady_hoodie_dr3", name: "lady hoodie", price: 170 },
    { imgName: "lady_tshirt_dr3", name: "lady t-shirt", price: 300 },

    { imgName: "mans_jacket", name: "mens jacket", price: 350 },
  ];

  const dispatch = useAppDispatch();

  const [filteredList, setUpdatedList] = useState(items2);

  const applyFilters = () => {
    let filteredItems = items2;

    // slider filter
    const minPrice = priceValue[0];
    const maxPrice = priceValue[1];
console.log(`lowest: ${minPrice}, highest: ${maxPrice}`)
filteredItems=filteredItems.filter(item=>item.price>=minPrice&& item.price<=maxPrice)
    setUpdatedList(filteredItems);
  };

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  const handleChange = (e: any) => {
    setPriceValue(e.target!.value!);
    console.log(priceValue);
    applyFilters();
  };

  return (
    <>
      <div className="respCont eshop-items">
        <h1>E-shop</h1>
        <p>Filters</p>
        <div>
          <Slider
            value={priceValue}
            onChange={handleChange}
            min={10}
            max={400}
            valueLabelDisplay="auto"
          />
        </div>
        <Grid container spacing={4}>
          {filteredList.map((item: any, i) => (
            <Grid item xs={12} sm={4} md={3}>
              <ItemCard
                imgName={item.imgName}
                name={item.name}
                price={item.price}
                key={i}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};
export default Eshop;
