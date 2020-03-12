import faunadb from "faunadb";

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
});

exports.handler = async (event, context, callback) => {
  const data = JSON.parse(event.body);
  console.log(data);
  try {
    const response = await client.query(
      q.Create(q.Collection("anunturi"), { data })
    );
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(response)
    });
  } catch (error) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify(error)
    });
  }
};

// fnADmwuIdLACC5TSemvGv-7MFrX2Y1gX4rComPXn
