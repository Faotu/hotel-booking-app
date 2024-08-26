import { FormProvider, useForm } from "react-hook-form";
import HotelDetails from "./HotelDetails";

export type HotelFormData = {
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
  pricePerNight: number;
  starRating: number;
  facilities: string[];
  imageFile: FileList;
  adultCount: number;
  childCount: number;
};
const ManageHotelForm = () => {
  const formMethods = useForm<HotelFormData>();

  return (
    <FormProvider {...formMethods}>
      {" "}
      <form>
        <HotelDetails />
      </form>
    </FormProvider>
  );
};

export default ManageHotelForm;
