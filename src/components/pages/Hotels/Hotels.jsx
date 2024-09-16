import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotelsRequest } from "../../../sagas/reducers/hotelsReducer";
import styles from "./styles.module.css";

const Hotels = ({ city }) => {
  const hotels = useSelector((state) => state.hotels.hotelsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHotelsRequest());
  }, [dispatch]);

  const filteredHotels = city
    ? hotels.filter((hotel) => hotel.city === city)
    : hotels;

  return (
    <div className={styles.cartContainer}>
      {filteredHotels && filteredHotels.length > 0 ? (
        filteredHotels.map((hotel) => (
          <Card key={hotel.name} className={styles.cartItem}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={hotel.image || "https://via.placeholder.com/150"}
                alt={hotel.name}
              />
              <CardContent className={styles.cartMain}>
                <Typography gutterBottom variant="h6" component="h6">
                  {hotel.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Stack spacing={1} sx={{ mb: 2 }}>
                    <Rating
                      name="half-rating-read"
                      defaultValue={hotel.hotel_rating}
                      precision={0.5}
                      readOnly
                    />
                  </Stack>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Address: {hotel.address}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  City: {hotel.city}, {hotel.code}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Phone:{" "}
                  {hotel.phone_number ? hotel.phone_number : "not specified"}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))
      ) : (
        <Typography variant="h6" component="div">
          There are no hotels in this city
        </Typography>
      )}
    </div>
  );
};

export default Hotels;
