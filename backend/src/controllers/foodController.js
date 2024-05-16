const Category = require("../models/CategorySchema");
const Item = require("../models/itemsSchema");

// Function to create a menu
exports.createMenu = async (req, res) => {
  const { title, category, price, menuItems } = req.body;
  
  const items = await Promise.all(menuItems.map(async (value) => {
    const item = new Item({ title: value });
    await item.save();
    return item._id;
  }));

  const categorylist = new Category({
    title: title,
    category: category,
    price: price,
    menuItems: items,
  });

  await categorylist.save();

  res.status(201).json({
    status: "success",
    message: "Items added Successfully",
    data: categorylist,
  });
};

// Function to get all items
exports.getItems = async (req, res) => {
  const categories = await Category.find().populate("menuItems");
  res.status(200).json({
    status: "success",
    message: "Items got Successfully",
    data: categories,
  });
};
