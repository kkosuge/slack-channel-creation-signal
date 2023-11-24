import { Trigger } from "deno-slack-api/types.ts";
import { TriggerEventTypes, TriggerTypes } from "deno-slack-api/mod.ts";
import workflow from "../workflows/channel_created.ts";
import { EventTriggerContextData } from "https://deno.land/x/deno_slack_api@2.1.1/typed-method-types/workflows/triggers/event-data/mod.ts";

const ChannelCreatedTrigger: Trigger<typeof workflow.definition> = {
  type: TriggerTypes.Event,
  name: "Channel Created Trigger",
  description: "Triggered when a channel_created",
  workflow: `#/workflows/${workflow.definition.callback_id}`,
  inputs: {
    new_channel_id: {
      value: EventTriggerContextData.ChannelCreated.channel_id,
    },
    new_channel_name: {
      value: EventTriggerContextData.ChannelCreated.channel_name,
    },
  },
  event: {
    event_type: TriggerEventTypes.ChannelCreated,
  },
};

export default ChannelCreatedTrigger;
