function gamesToSelect(data) {
  let response = [];
  data.forEach((element) => {
    response.push({
      label: element.id + "(" + element.api_name + "): " + element.name,
      value: element.id
    });
  });
  return response;
}

export { gamesToSelect as g };
//# sourceMappingURL=games-df2660b2.js.map
