const generateUniqueId = require ('../../src/utils/generateUniqueId')

describe ('Generate Unique ID', () => {
   it( 'Teste' , () => {
       const id = generateUniqueId();
       expect(id).toHaveLength(8);
   });

});