function emailTemplateToSelect(data) {
  let response = [];
  data.forEach((element) => {
    response.push({
      label: element.id + "(" + element.language + "): " + element.name,
      value: element.id
    });
  });
  return response;
}
export {
  emailTemplateToSelect as e
};
