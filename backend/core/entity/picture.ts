import { Dynamo } from "../dynamo";
import { Entity, EntityItem } from "electrodb";
import { ulid } from "ulid";
//

export const PictureEntity = new Entity(
  {
    indexes: {
      picture: {
        pk: {
          field: "pk",
          composite: ["pictureId"],
        },
        sk: {
          field: "sk",
          composite: [],
        },
      },

      game_: {
        // collection: "picture",
        index: "gsi1",
        pk: {
          field: "gsi1pk",
          composite: ["game"],
        },
        sk: {
          field: "gsi1sk",
          composite: ["pictureId"],
        },
      },
    },

    attributes: {
      pictureId: {
        type: "string",
        required: true,
        default: () => ulid()
      },

      game: {
        type: "string",
        required: true,
      },

      characterName: {
        type: "string",
        required: true,
      },

      score: {
        type: "number",
        required: true,
        default: 0
      }
    },

    model: {
      version: "1",
      entity: "Picture",
      service: "facemash",
    },
  },
  Dynamo.Configuration
);

export type PictureEntityType = EntityItem<typeof PictureEntity>;