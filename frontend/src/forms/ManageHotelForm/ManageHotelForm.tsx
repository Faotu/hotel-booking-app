import { FormProvider, useForm } from "react-hook-form";
import HotelDetails from "./HotelDetails";
import TypeSection from "./TypeSection";
import FacilitiesSection from "./FacilitiesSection";
import GuestSection from "./GuestSection";
import UploadImage from "./UploadImage";
import { HotelType } from "../../../../backend/src/shared/types";
import { useEffect } from "react";

export type HotelFormData = {
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
  pricePerNight: number;
  starRating: number;
  facilities: string[];
  imageFiles: FileList;
  imageUrls: string[];
  adultCount: number;
  childCount: number;
};

type Props = {
  hotel?: HotelType;
  onSave: (hotelFormData: FormData) => void;
  isLoading: boolean;
};

const ManageHotelForm = ({ onSave, isLoading, hotel }: Props) => {
  const formMethods = useForm<HotelFormData>();
  const { handleSubmit, reset } = formMethods;

  useEffect(() => {
    reset(hotel);
  }, [hotel, reset]);

  const onSubmit = handleSubmit((formDataDoc: HotelFormData) => {
    const formData = new FormData();
    if (hotel) {
      formData.append("hotelId", hotel._id);
    }
    formData.append("name", formDataDoc.name);
    formData.append("city", formDataDoc.city);
    formData.append("country", formDataDoc.country);
    formData.append("description", formDataDoc.description);
    formData.append("type", formDataDoc.type);
    formData.append("pricePerNight", formDataDoc.pricePerNight.toString());
    formData.append("starRating", formDataDoc.starRating.toString());
    formData.append("adultCount", formDataDoc.adultCount.toString());
    formData.append("childCount", formDataDoc.childCount.toString());
    formDataDoc.facilities.forEach((facility, index) => {
      formData.append(`facilities[${index}]`, facility);
    });

    if (formDataDoc.imageUrls) {
      formDataDoc.imageUrls.forEach((url, index) => {
        formData.append(`imageUrls[${index}]`, url);
      });
    }

    Array.from(formDataDoc.imageFiles).forEach((imageFile) => {
      formData.append(`imageFiles`, imageFile);
    });

    onSave(formData);
  });

  return (
    <FormProvider {...formMethods}>
      {" "}
      <form className="flex flex-col gap-10" onSubmit={onSubmit}>
        <HotelDetails />
        <TypeSection />
        <FacilitiesSection />
        <GuestSection />
        <UploadImage />

        <span className="flex justify-end">
          <button
            disabled={isLoading}
            type="submit"
            className="bg-green-600 text-white p-2 font-bold hover:bg-green-500 text-2xl disabled:bg-gray-500"
          >
            {isLoading ? "Saving Hotel..." : "Save"}
          </button>
        </span>
      </form>
    </FormProvider>
  );
};

export default ManageHotelForm;
