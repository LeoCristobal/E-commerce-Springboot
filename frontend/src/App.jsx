import { useEffect, useState } from "react";
import NavBar from "./components/Navbar.jsx";

const HomeLayout = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from localhost API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/products");
        if (!response.ok) {
          throw new Error(`Error ${response.status}: Failed to fetch products`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">All Products</h1>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
            <p className="font-medium">Failed to load products</p>
            <p className="text-sm">{error}</p>
          </div>
        )}

        {/* Product Grid */}
        {!loading && !error && (
          <>
            {products.length === 0 ? (
              <p className="text-gray-500">No products found.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                  <div
                    key={product.id || index}
                    className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition duration-200 flex flex-col"
                  >
                    {/* Image Container */}
                    <div className="h-48 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
                      <img
                        src={
                          product.imageUrl ||
                          "https://via.placeholder.com/300?text=No+Image"
                        }
                        alt={product.name || product.title || "Product"}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          // Fallback if the image URL fails to load
                          e.target.onerror = null;
                          e.target.src =
                            "https://via.placeholder.com/300?text=Image+Error";
                        }}
                      />
                    </div>

                    {/* Product Details */}
                    <div className="p-4 flex flex-col flex-grow">
                      <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-1">
                        {product.category || "General"}
                      </span>
                      <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                        {product.name || product.title || "Unnamed Product"}
                      </h2>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2 flex-grow">
                        {product.description || "No description available."}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xl font-bold text-gray-900">
                          $
                          {product.price
                            ? Number(product.price).toFixed(2)
                            : "0.00"}
                        </span>
                        <button className="bg-indigo-600 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-150">
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default HomeLayout;
