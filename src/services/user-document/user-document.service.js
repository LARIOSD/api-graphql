const userDocumentModel =  require('./user-document.ops');

module.exports = {
  getAllUserDocument: async () => {
    const response = await userDocumentModel.getAllUserDocument();
    return response
  },

  createUserDocument: async (userDocumentData) => {
    const response = await userDocumentModel.createUserDocument({
      ...userDocumentData
    });

    return response
  }
}