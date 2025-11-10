
import { useContext } from "react";
import { useLoaderData} from "react-router";
import AuthContext from "../AuthProvider/AuthContext";

const CropDetails = () => {

  const data = useLoaderData();

  const { user } = useContext(AuthContext);


  console.log(data);
  const {
    _id,
    cropName,
    image,
    category,
    description,
    pricePerUnit,
    unit,
    quantityAvailable,
    // location,
    postedDate,
    // ownerId,
    ownerName,
    ownerEmail,
  } = data;

  return (
    <div className="mt-10">
      <div className="max-w-sm w-full mx-auto bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full transition-transform transform hover:scale-105 duration-300">
        <figure className="w-full h-64 overflow-hidden">
          <img
            src={image}
            alt={cropName}
            className="w-full h-full object-cover rounded-t-2xl"
          />
        </figure>

        <div className="p-6 flex flex-col justify-between flex-grow">
          <div className="mb-4">
            <h2 className="text-2xl font-extrabold text-gray-900">
              {cropName}
            </h2>
            <h3 className="text-gray-500 font-medium mt-1">
              Owner: {ownerName}
            </h3>
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {description}
          </p>

          <div className="grid grid-cols-2 gap-4 text-gray-700 font-medium mb-4">
            <div className="space-y-1">
              <p>
                Quantity:{" "}
                <span className="font-semibold">{quantityAvailable}</span>
              </p>
              <p>
                Price:{" "}
                <span className="font-semibold">
                  {pricePerUnit} / {unit}
                </span>
              </p>
            </div>
            <div className="space-y-1">
              <p>
                Category: <span className="font-semibold">{category}</span>
              </p>
              <p>
                Email: <span className="font-semibold">{ownerEmail}</span>
              </p>
              <p>
                Posted:{" "}
                <span className="font-semibold">
                  {new Date(postedDate).toLocaleDateString()}
                </span>
              </p>
            </div>
          </div>
        </div>

        {
          user?.email !==  ownerEmail?
          <div className="m-3">
          <h1 className="font-bold text-xl text-center bg-green-400">Interested to this crop!!! <br></br>Contact The Owner</h1>
          <form>

            <label className="label font-bold text-black">Name</label><br></br>
            <input type="text" className="input" name="name" placeholder="Name" /><br></br>

            <label className="label font-bold text-black">Quantity of the Crop</label><br></br>
            <input type="number" className="input" name="number" placeholder="Quantity" /><br></br>

            <label className="label font-bold text-black">Email</label><br></br>
            <input type="email" className="input" name="email" placeholder="Email" />

            <button className="bg-green-700 text-white rounded-md w-2/3 mt-3">Submit Your Interest</button>

          </form>
        </div> : ""
        }

      </div>
    </div>
  );
};

export default CropDetails;
