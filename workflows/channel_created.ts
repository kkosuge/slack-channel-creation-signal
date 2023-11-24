import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";
import { ChannelCreatedFunctionDefinition } from "../functions/channel_created.ts";

const ChannelCreatedWorkflow = DefineWorkflow({
  callback_id: "channel_created_workflow",
  title: "Channel Created Workflow",
  description: "Notify new channel created",
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
});

ChannelCreatedWorkflow.addStep(ChannelCreatedFunctionDefinition, {
  new_channel_id: ChannelCreatedWorkflow.inputs.new_channel_id,
  new_channel_name: ChannelCreatedWorkflow.inputs.new_channel_name,
});

export default ChannelCreatedWorkflow;
