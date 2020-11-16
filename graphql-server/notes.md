# Graphql

1. describe data
2. ask for what you want
3. get predictable results
4. GraphQL APIs get all the data your app needs in a single request

## Notes
building a type schema
serving queries against that type schema

A received query is first checked to ensure it only refers to the types and fields defined, then runs the provided functions to produce a result.

Fragments ???
Variables ??

Directives - a way to dynamically change the structure and shape of our queries using variables

Mutations - any operations that cause writes should be sent explicitly via a mutation.

A mutation can contain multiple fields, just like a query. There's one important distinction between queries and mutations, other than the name:

While query fields are executed in parallel, mutation fields run in series, one after the other.



## Q
1. error handling ?
2. Graphql vs Restful
	1. In a system like REST, you can only pass a single set of arguments - the query parameters and URL segments in your request. But in GraphQL, every field and nested object can get its own set of arguments, making GraphQL a complete replacement for making multiple API fetches.
	2. In a system like REST, you can only pass a single set of arguments - the query parameters and URL segments in your request. But in GraphQL, every field and nested object can get its own set of arguments, making GraphQL a complete replacement for making multiple API fetches. You can even pass arguments into scalar fields, to implement data transformations once on the server, instead of on every client separately.
	3.
