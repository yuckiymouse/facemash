import {
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2,
  Handler,
} from "aws-lambda";
import { model } from "../core/model";

// import { model } from "@catan-discord/core/model";
// import { z } from "zod";

// const eventSchema = z.object({
//   mapId: z.string(),
//   data: z.string(),
// });

export const handler: Handler<
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2
> = async (event) => {
  await model.entities.PictureEntity.create({
    characterName: "cloud",
    game: "ff7"
  }).go()
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "lol",
      event,
    }),
  };
}