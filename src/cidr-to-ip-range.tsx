import { ActionPanel, Detail, List, Action } from "@raycast/api";
import { useState } from "react";

interface CIDRArgument {
  cidrStr: string;
}

export default function CIDRToIPRange(props: { arguments: CIDRArgument }) {
  const { cidrStr } = props.arguments;
  const [cidr, setCidr] = useState<string>(cidrStr);

  return (
    <List>
      <List.Item
        icon="list-icon.png"
        title="Greeting"
        actions={
          <ActionPanel>
            <Action.Push title="Show Details" target={<Detail markdown="# Hey! 👋" />} />
          </ActionPanel>
        }
      />
    </List>
  );
}
