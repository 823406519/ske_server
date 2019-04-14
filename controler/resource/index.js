
const  createResource = require('./createResource')
const  updateResource= require('./updateResource')

module.exports ={
  ...createResource,
  ...updateResource
}