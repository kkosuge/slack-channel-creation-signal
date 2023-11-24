import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";

export const ChannelCreatedFunctionDefinition = DefineFunction({
  callback_id: "channel_created_function",
  title: "Send Message by channel_created event",
  description: "Send Message by channel_created event",
  source_file: "functions/channel_created.ts",
  input_parameters: {
    properties: {
      new_channel_id: {
        type: Schema.types.string,
      },
      new_channel_name: {
        type: Schema.types.string,
      },
    },
    required: ["new_channel_id", "new_channel_name"],
  },
  output_parameters: {
    properties: {
      notified: {
        type: Schema.types.boolean,
      },
      message: {
        type: Schema.types.string,
      },
    },
    required: ["notified", "message"],
  },
});

export default SlackFunction(
  ChannelCreatedFunctionDefinition,
  async ({ inputs, env, client }) => {
    const { new_channel_id, new_channel_name } = inputs;
    const channel = env["NOTIFY_CHANNEL_CREATED_CHANNEL_ID"];

    if (!channel) {
      return {
        outputs: {
          notified: false,
          message: "NOTIFY_CHANNEL_CREATED_CHANNEL_ID is empty",
        },
      };
    }

    const message =
      `新しいチャンネルが作成されました <#${new_channel_id}|${new_channel_name}>`;

    await client.chat.postMessage({
      channel,
      text: message,
    });

    return { outputs: { notified: true, message: message } };
  },
);
