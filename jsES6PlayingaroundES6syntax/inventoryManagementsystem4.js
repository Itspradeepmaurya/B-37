// Develop an inventory management system for a retail company, leveraging JavaScript's advanced functionalities like map, filter, sort, and reduce. This web-based application will streamline inventory management, analysis, and reporting tasks. Users will access a product inventory displaying details such as name, category, price, quantity, and availability status. Filtering options will enable users to view products based on specific criteria like category, price range, quantity, or availability status. Sorting functionalities will allow comparison based on parameters like price, quantity, or category. Additionally, users can access detailed information about each product, including features, photos, and contact details. The system will generate reports summarizing metrics such as total inventory value, average price per product, or category distribution. Utilize map to transform data, filter to narrow down listings, sort for comparison, and reduce for data aggregation, demonstrating proficiency in advanced JavaScript functionalities for efficient inventory management and analysis.

// Input:


// const products = [
//     { name: "Laptop", category: "Electronics", price: 1200, quantity: 10, available: true },
//     { name: "Chair", category: "Furniture", price: 100, quantity: 20, available: true },
//     { name: "Shirt", category: "Clothing", price: 30, quantity: 50, available: false },
//     { name: "Book", category: "Books", price: 20, quantity: 100, available: true }
// ];

// Expected Output:


// // Filtered Products:
// // [
// //     { name: 'Laptop', category: 'Electronics', price: 1200, quantity: 10, available: true },
// // ]

// // Sorted Products by Price:
// // [
// //     { name: 'Book', category: 'Books', price: 20, quantity: 100, available: true },
// //     { name: 'Shirt', category: 'Clothing', price: 30, quantity: 50, available: false },
// //     { name: 'Chair', category: 'Furniture', price: 100, quantity: 20, available: true },
// //     { name: 'Laptop', category: 'Electronics', price: 1200, quantity: 10, available: true }
// // ]

// // Products with Total Value:
// // [
// //     { name: 'Laptop', category: 'Electronics', price: 1200, quantity: 10, available: true, totalValue: 12000 },
// //     { name: 'Chair', category: 'Furniture', price: 100, quantity: 20, available: true, totalValue: 2000 },
// //     { name: 'Shirt', category: 'Clothing', price: 30, quantity: 50, available: false, totalValue: 1500 },
// //     { name: 'Book', category: 'Books', price: 20, quantity: 100, available: true, totalValue: 2000 }
// // ]

// // Inventory Report:
// // {
// //     totalProducts: 4,
// //     totalValue: 17500,
// //     avgPrice: 337.5,
// //     categoryDistribution: { Electronics: 1, Furniture: 1, Clothing: 1, Books: 1 }
// // }



const products = [
    { name: "Laptop", category: "Electronics", price: 1200, quantity: 10, available: true },
    { name: "Chair", category: "Furniture", price: 100, quantity: 20, available: true },
    { name: "Shirt", category: "Clothing", price: 30, quantity: 50, available: false },
    { name: "Book", category: "Books", price: 20, quantity: 100, available: true }
];
// Filtered Products (Available items only):
const filteredProducts = products.filter(product => product.available);
console.log("Filtered Products:");
console.log(filteredProducts);

// Sorted Products by Price:
const sortedProducts = products.sort((a, b) => a.price - b.price);
console.log("\nSorted Products by Price:");
console.log(sortedProducts);

// Products with Total Value:
const productsWithValue = products.map(product => ({
    ...product,
    totalValue: product.price * product.quantity
}));
console.log("\nProducts with Total Value:");
console.log(productsWithValue);

// Inventory Report:
const totalProducts = products.length;
const totalValue = productsWithValue.reduce((acc, product) => acc + product.totalValue, 0);
const avgPrice = totalValue / totalProducts;

const categoryDistribution = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
}, {});

console.log("\nInventory Report:");
console.log({
    totalProducts,
    totalValue,
    avgPrice,
    categoryDistribution
});







// Filtered Products:
// [
//     { name: 'Laptop', category: 'Electronics', price: 1200, quantity: 10, available: true },
// ]

// Sorted Products by Price:
// [
//     { name: 'Book', category: 'Books', price: 20, quantity: 100, available: true },
//     { name: 'Shirt', category: 'Clothing', price: 30, quantity: 50, available: false },
//     { name: 'Chair', category: 'Furniture', price: 100, quantity: 20, available: true },
//     { name: 'Laptop', category: 'Electronics', price: 1200, quantity: 10, available: true }
// ]

// Products with Total Value:
// [
//     { name: 'Laptop', category: 'Electronics', price: 1200, quantity: 10, available: true, totalValue: 12000 },
//     { name: 'Chair', category: 'Furniture', price: 100, quantity: 20, available: true, totalValue: 2000 },
//     { name: 'Shirt', category: 'Clothing', price: 30, quantity: 50, available: false, totalValue: 1500 },
//     { name: 'Book', category: 'Books', price: 20, quantity: 100, available: true, totalValue: 2000 }
// ]

// Inventory Report:
// {
//     totalProducts: 4,
//     totalValue: 17500,
//     avgPrice: 337.5,
//     categoryDistribution: { Electronics: 1, Furniture: 1, Clothing: 1, Books: 1 }
// }

