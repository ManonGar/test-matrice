const operation = (n) => {
  if (n % 3 === 0 && n % 5 === 0) {
    console.log("GarçonFille");
  } else if (n % 3 === 0) {
    console.log("Garçon");
  } else if (n % 5 === 0) {
    console.log("Fille");
  } else {
    console.log(n);
  }
};

const operationOnList = (list) => {
  list.forEach((n) => {
    return operation(n);
  });
};

