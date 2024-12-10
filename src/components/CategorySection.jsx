import React from "react";

const category = [
  {
    title: "Men",
    imageUrl:
      "https://d2ki7eiqd260sq.cloudfront.net/MSLS00005GREENFIGS_2c9ab0616-5513-4e8d-8a78-6e294c31173a.webp",
  },
  {
    title: "Women",
    imageUrl:
      "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/category-images/60ab26835e322.png",
  },
  {
    title: "Kids",
    imageUrl:
      "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/category-images/60b88eb7c6211.png",
  },
];

const CategorySection = () => {
  return (
    <div className=" container mx-auto flex justify-center items-center">
      <div className=" grid grid-cols-1 sm:grid-cols-3 gap-6 md:space-x-14 ">
        {category.map((elem, index) => (
          <div
            key={index}
            className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <img
              src={elem.imageUrl}
              alt=""
              className="h-full object-cover rounded-lg shadow-md"
            />

            <div className="absolute top-20 left-2">
              <p className="text-md font-bold">{elem.title}</p>
              <p className="text-gray-600">View All</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
