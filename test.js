const operation = (n) => {
  if (n % 3 === 0 && n % 5 === 0) {
    return "GarçonFille";
  } else if (n % 3 === 0) {
    return "Garçon";
  } else if (n % 5 === 0) {
    return "Fille";
  } else {
    return n;
  }
};

const operationOnList = (list) => {
  list.forEach((n) => {
    console.log(operation(n));
  });
};
