function currenciesToSelect(data) {
  let response = [];
  data.forEach((element) => {
    response.push({
      label: element.id + ": " + element.title + " (" + element.code_alpha + ")",
      value: element.code_alpha
    });
  });
  return response;
}

export { currenciesToSelect as c };
//# sourceMappingURL=currency-56b90870.js.map
