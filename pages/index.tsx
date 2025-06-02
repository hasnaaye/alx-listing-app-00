import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('public/assets/c811f30edfff8de9c9b079139dd9782018c7e7c0.jpg')`
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <div className="relative z-10 text-center max-w-2xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find your favorite place here!
        </h1>
        <p className="text-lg md:text-xl">
          The best prices for over 2 million properties worldwide.
        </p>
      </div>
    </section>
  );
};
const FilterSection: React.FC = () => {
  const [filters, setFilters] = useState({
    price: "",
    rating: "",
    type: [] as string[],
    country: ""
  });

  const handleCheckboxChange = (type: string) => {
    setFilters((prev) => ({
      ...prev,
      type: prev.type.includes(type)
        ? prev.type.filter((t) => t !== type)
        : [...prev.type, type]
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="bg-gray-100 p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4">Filter Properties</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        {/* Price Range */}
        <div>
          <label className="block mb-1 font-medium">Price Range</label>
          <select
            name="price"
            value={filters.price}
            onChange={handleSelectChange}
            className="w-full p-2 border rounded"
          >
            <option value="">All</option>
            <option value="low">Under $100</option>
            <option value="mid">$100 - $300</option>
            <option value="high">Over $300</option>
          </select>
        </div>

        {/* Rating */}
        <div>
          <label className="block mb-1 font-medium">Rating</label>
          <select
            name="rating"
            value={filters.rating}
            onChange={handleSelectChange}
            className="w-full p-2 border rounded"
          >
            <option value="">All</option>
            <option value="4">4 stars & up</option>
            <option value="3">3 stars & up</option>
            <option value="2">2 stars & up</option>
          </select>
        </div>

        {/* Type */}
        <div>
          <label className="block mb-1 font-medium">Type</label>
          <div className="flex flex-col gap-1">
            {["Room", "Mansion", "Countryside", "Villa"].map((type) => (
              <label key={type} className="inline-flex items-center">
                <input
                  type="checkbox"
                  value={type}
                  checked={filters.type.includes(type)}
                  onChange={() => handleCheckboxChange(type)}
                  className="mr-2"
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        {/* Country */}
        <div>
          <label className="block mb-1 font-medium">Country</label>
          <select
            name="country"
            value={filters.country}
            onChange={handleSelectChange}
            className="w-full p-2 border rounded"
          >
            <option value="">All</option>
            <option value="usa">USA</option>
            <option value="france">France</option>
            <option value="japan">Japan</option>
            <option value="kenya">Kenya</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;

export default Hero;
