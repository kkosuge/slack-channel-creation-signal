import { Manifest } from "deno-slack-sdk/mod.ts";
import ChannelCreatedWorkflow from "./workflows/channel_created.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/automation/manifest
 */
export default Manifest({
  name: "Slack Channel Creation Signal",
  description: "Slackのチャンネル作成イベントを通知する君",
  longDescription:
    `このBotは、Slackのチャンネル作成イベントを通知するための便利なツールです。新しいチャンネルが作成されると、その情報をリアルタイムでお知らせします。これにより、あなたが興味を持つかもしれないパブリックチャンネルに気づくことができ、スムーズにコミュニケーションを取り入れることができます。
     積極的に関心のあるパブリックチャンネルに参加することで、同じ興味を持つ仲間や情報交換の場を増やすことができ、知識やスキルの向上につながります。このようなチャンネルで活発にディスカッションに参加することで、プロジェクトや業務に関するアイデアや知見も得ることができるでしょう。
  
  Powerd by: Slack Next-gen Platform
  https://github.com/kkosuge/slack-channel-creation-signal`,
  icon: "assets/icons8-slack-512.png",
  workflows: [ChannelCreatedWorkflow],
  outgoingDomains: [],
  datastores: [],
  botScopes: [
    "channels:read",
    "chat:write",
    "chat:write.public",
  ],
});
