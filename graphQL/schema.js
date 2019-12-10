var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

let schema = buildSchema( `
    type Query { 

    }
`)