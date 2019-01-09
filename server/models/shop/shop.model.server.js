const mongoose = require('mongoose');
const ShopSchema = require('./shop.schema.server');
const ShopModel = mongoose.model('ShopModel', ShopSchema);

ShopModel.createItem = createItem;
ShopModel.updateItem = updateItem;
ShopModel.deleteItem = deleteItem;

function createItem(item) {
    return ShopModel.create(item);
}

function updateItem(iid, item) {
    return ShopModel.updateOne({ _id: iid }, item);
}

function deleteItem(iid) {
    return ShopModel.remove({ _id: iid });
}

module.exports = ShopModel;
