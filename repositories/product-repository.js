'use strict';

const Product = require('../models/product');

exports.get = async() => {
    const res = await Product.find({
        active: true
    }, 'title price');
    return {mag: 'Caralho'};
}

exports.getById = async(id) => {
    const res = await Product
        .findById(id);
    return res;
}

exports.create = async(data) => {
    var product = new Product(data);
    await product.save();
}

exports.update = async(id, data) => {
    await Product
        .findByIdAndUpdate(id, {
            $set: {
                id: data.id,
                name: data.name,
                description: data.description,
                price: data.price,
                active: data.active
            }
        });
}

exports.delete = async(id) => {
    await Product
        .findOneAndRemove(id);
}