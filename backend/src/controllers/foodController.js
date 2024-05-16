const MenuCategory = require("../models/CategorySchema");
const MenuItem = require("../models/itemsSchema");

const AddItems = async (req, res) => {
  const { Name, category, price, menuItems } = req.body;
  const items = await Promise.all(menuItems.map(async (itemName) => {
    const item = new MenuItem({ name: itemName });
    await item.save();
    return item._id;
}));

  const categorylist = new MenuCategory({
    name: Name,
    category: category,
    price: price,
    menuItems: items,
  });

  await categorylist.save();

  res.status(201).json({
    status: "success",
    message: "items added Successfully",
    data: categorylist,
  });
};

const getItems = async (req, res) => {
  const categories = await MenuCategory.find().populate("menuItems");
  res.status(200).json({
    status: "success",
    message: "Items got Successfully",
    data: categories,
  });
};

module.exports = {
  AddItems,
  getItems,
};
