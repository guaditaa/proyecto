export function formDataToJSON(formData) {
  var object = {};
  formData.forEach(function(value, key){
      object[key] = value;
  });
  return object;
}