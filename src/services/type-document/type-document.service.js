const typeDocumentModal = require('./type-document.ops');


module.exports = {
  getAllTypeDocument: async () => {
    const response = await typeDocumentModal.getAllTypeDocument();
    return response
  },

  createTypeDocument: async (typeDocumentData) => {
    const response = await typeDocumentModal.createTypeDocument(typeDocumentData);
    return response;
  },
}