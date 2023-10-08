'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const products = await queryInterface.bulkInsert('products', [
      {
        title: "iphone11",
        sku: "elektornik",
        quantity: 10,
        price: 6999000,
        createdat: newdate(),
        updatedat: newdate()
      },
      {
        title: "iphone11ProMax",
        sku: "elektornik",
        quantity: 10,
        price: 10100000,
        createdat: newdate(),
        updatedat: newdate()
      },
      {
        title: "iphone12",
        sku: "elektornik",
        quantity: 10,
        price: 10000000,
        createdat: newdate(),
        updatedat: newdate()
      },
      {
        title: "iphone12Pro",
        sku: "elektornik",
        quantity: 10,
        price: 18500000,
        createdat: newdate(),
        updatedat: newdate()
      },
      {
        title: "iphone12ProMax",
        sku: "elektornik",
        quantity: 10,
        price: 19999000,
        createdat: newdate(),
        updatedat: newdate()
      },
      {
        title: "iphone13",
        sku: "elektornik",
        quantity: 10,
        price: 16629000,
        createdat: newdate(),
        updatedat: newdate()
      },
      {
        title: "iphone13ProMax",
        sku: "elektornik",
        quantity: 10,
        price: 18609000,
        createdat: newdate(),
        updatedat: newdate()
      },
    ],{returning: true})
   
    const categories = await queryInterface.bulkInsert("categories", [
    {
      title: "elektronik",
      createdat: new date(),
      updatedat: new date()
    }
  ], {returning: true})

const elektronikcategory = categories[0]

const iphone11 = products[0]
const iphone11ProMax = products[1]

const iphone12 = products[2]
const iphone12Pro = products[3]
const iphone12ProMax = products[4]
const iphone13 = products[5]
const iphone13ProMax = products[6]

await queryInterface.bulkInsert("productcategories", [
  {
    product_id: iphone11.id,
    category_id: elektronikcategory.id,
    cretaedat: new date(),
    updatedat: new date()
  },
  {
    product_id: iphone11ProMax.id,
    category_id: elektronikcategory.id,
    cretaedat: new date(),
    updatedat: new date()
  },
  {
    product_id: iphone12.id,
    category_id: elektronikcategory.id,
    cretaedat: new date(),
    updatedat: new date()
  },
  {
    product_id: iphone12Pro.id,
    category_id: elektronikcategory.id,
    cretaedat: new date(),
    updatedat: new date()
  },
  {
    product_id: iphone12ProMax.id,
    category_id: elektronikcategory.id,
    cretaedat: new date(),
    updatedat: new date()
  },
  {
    product_id: iphone13.id,
    category_id: elektronikcategory.id,
    cretaedat: new date(),
    updatedat: new date()
  },
  {
    product_id: iphone13ProMax.id,
    category_id: elektronikcategory.id,
    cretaedat: new date(),
    updatedat: new date()
  },
])

},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
    await queryInterface.bulkDelete("categories", null, {});
    await queryInterface.bulkDelete("productcategories", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
