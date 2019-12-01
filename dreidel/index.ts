import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const dreidelTrigger: AzureFunction = async function(
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("Dreidel trigger function processed a request.");

  const randomInt = Math.floor(Math.random() * 4);
  const values = ["נ(Nun)", "ג(Gimmel)", "ה(Hay)", " ש(Shin)"];

  const value = values[randomInt];

  if (value) {
    context.res = {
      status: 200,
      body: value
    };
  } else {
    context.res = {
      status: 400,
      body: "Something went wrong!"
    };
  }
};

export default dreidelTrigger;
