
const order = {
  customer: {
    address: {
      street: "Via Milano,5",
      city: "Castrolibero"
    }
  }
};

if (order?.customer?.address && !order.customer.address.city) {
  console.log('City is required');
} else console.log("Correct!");

