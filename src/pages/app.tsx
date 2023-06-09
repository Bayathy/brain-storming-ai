import { Menu } from "../feature/menu";
import { RootLayout } from "../shared/Layout/RootLayout";
import { globalStyle } from "../style/global";

import { Home } from "./home";

export function App() {
  return (
    <div className={globalStyle}>
      <RootLayout
        menu={
          <Menu
            menuListItems={[
              {
                id: 1,
                icon: "ic:baseline-chat",
                itemTitle: "Home",
                acitveState: "active",
              },
              {
                id: 2,
                icon: "ic:twotone-event-note",
                itemTitle: "Memo",
                acitveState: "none",
              },
              {
                id: 3,
                icon: "ic:baseline-settings",
                itemTitle: "Settings",
                acitveState: "none",
              },
              {
                id: 4,
                icon: "ic:baseline-account-circle",
                itemTitle: "Account",
                acitveState: "none",
              },
            ]}
          />
        }
        content={<Home />}
      />
    </div>
  );
}
