export const getCategoryColor = (category) => {
  const colors = {
    technology: "bg-blue-100 text-blue-800",
    development: "bg-purple-100 text-purple-800",
    design: "bg-pink-100 text-pink-800",
    business: "bg-green-100 text-green-800",
  };
  return colors[category] || "bg-gray-100 text-gray-800";
};

export const getStatusColor = (status) => {
  return status === "published"
    ? "bg-green-100 text-green-800"
    : "bg-yellow-100 text-yellow-800";
};

export const formatDate = (dateString) =>
  new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
