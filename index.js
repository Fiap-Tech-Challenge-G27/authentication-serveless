module.exports.handler = async (event) => {
  if (!event?.body) {
    return {
      statusCode: 422,
      body: JSON.stringify({ error: "Missing body" }),
    };
  }

  const { cpf } = JSON.parse(event.body);

  console.log("cpf", cpf);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        document: cpf,
        input: event,
      },
      null,
      2
    ),
  };
};
