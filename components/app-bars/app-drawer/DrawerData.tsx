import { ReactNode } from "react";

export type DrawerChildItem = {
  label: string;
  path: string;
};

export type DrawerItem = {
  id: string;
  label: string | ReactNode;
  path?: string;
  children?: Array<DrawerChildItem>;
};

const DrawerItems: Array<DrawerItem> = [
  {
    id: "navbar.home",
    label: "navbar.home",
    path: "/home",
  },
  {
    id: "navbar.asean",
    label: "navbar.asean",
    children: [
      {
        label: "navbar.aseanEconomicCommunity",
        path: "/asean-economic-community",
      },
      {
        label: "navbar.aseanIntraExtraTrade",
        path: "/asean-intra-extra-trade",
      },
    ],
  },
  {
    id: "navbar.theASEANPostInsights",
    label: "navbar.theASEANPostInsights",
    children: [
      {
        label: "navbar.focusASEAN",
        path: "/focus-asean",
      },
    ],
  },
  {
    id: "navbar.orangeAlerts",
    label: "navbar.orangeAlerts",
    path: "/orange-alerts",
  },
];

export default DrawerItems;
