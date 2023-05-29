import { ActionPanel, Detail, List, Action } from "@raycast/api";
import { useState } from "react";
import { IpEmptyView } from "./components/ip-empty-view";
import { isEmpty, validateCIDR } from "./utils/validation-utils";
import { splitCIDR, CIDRDetail } from "./utils/cidr-utils";

interface CIDRArgument {
  cidrStr: string;
}

export default function CIDRToIPRange(props: { arguments: CIDRArgument }) {
  const { cidrStr } = props.arguments;
  const [searchContent, setSearchContent] = useState<string>(cidrStr);
  const res = validateCIDR(searchContent);

  function convertCIDRToMap(detail: CIDRDetail) {
    return JSON.parse(JSON.stringify(detail));
  }

  return (
    <List
      searchBarPlaceholder={"Input IPv4 CIDR that needs to be converted"}
      searchText={searchContent}
      onSearchTextChange={setSearchContent}
      throttle={true}
    >
      {
        isEmpty(searchContent) ? <IpEmptyView title={"Waiting for CIDR input"} /> :
          !res.ok ? <IpEmptyView title={`${res.val.msg}`} /> :
            Object.entries(convertCIDRToMap(splitCIDR(res.val))).map(
              ([key, value], index) => {
                return <List.Item
                  key={index}
                  // icon={listIcons[index]}
                  title={key}
                  subtitle={`${value}`}
                />
              }
            )
      }
    </List>
  );
}
