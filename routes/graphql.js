var express = require('express');
var router = express.Router();

var {
  buildSchema
} = require('graphql');

console.log(buildSchema);

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = {
  hello: () => 'Hello world!'
};

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('graphQL', {
    title: 'GraphQL',
    schema: schema,
    rootValue: root,
    graphiql: true,
  });
});


module.exports = router;
