const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for Product Category
const productCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: null }
});

// Define schema for Discount
const discountSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  discounted_percent: { type: Number, required: true },
  active: { type: Boolean, required: true },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: null }
});

// Define schema for Product Inventory
const productInventorySchema = new mongoose.Schema({
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: null }
});

// schema for Product
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  SKU: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'ProductCategory', required: true },
  inventory: { type: Schema.Types.ObjectId, ref: 'ProductInventory', required: true },
  price: { type: Number, required: true },
  discount: { type: Schema.Types.ObjectId, ref: 'Discount', required: true },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: null }
});

// models
const ProductCategory = mongoose.model('ProductCategory', productCategorySchema);
const Discount = mongoose.model('Discount', discountSchema);
const ProductInventory = mongoose.model('ProductInventory', productInventorySchema);
const Product = mongoose.model('Product', productSchema);

// Export models
module.exports = { Product, ProductCategory, ProductInventory, Discount };
