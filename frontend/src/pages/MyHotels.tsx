import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as apiClient from "../api-client";

const MyHotels = () => {
  const { data: hotelData } = useQuery(
    "fetchMyHotels",
    apiClient.fetchMyHotels,
    {
      onError: () => {},
    }
  );
  if (!hotelData) {
    return <span>No Hotels found</span>;
  }
  return (
    <div className="space-y-5">
      <span className="flex justify-between">
        <h1 className="text-3xl font-bold">My Hotels</h1>
        <Link
          to="/add-hotel"
          className="flex bg-green-600 text-white font-bold text-xl p-2 hover:bg-green-500"
        >
          Add Hotel
        </Link>
      </span>
      <div className="grid grid-cols-1 gap-8">
        {hotelData.map((hotel) => (
          <div className="flex flex-col justify-between border border-slate-400 rounded-lg p-8 gap-5">
            <h2>{}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyHotels;
