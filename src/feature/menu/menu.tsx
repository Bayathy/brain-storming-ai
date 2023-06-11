import { css } from "@linaria/core";
import { useRecoilState } from "recoil";

import { menuActiveStore } from "./api/active-state";
import { MenuListItem } from "./components/menu-list-item";

import type { MenuListItemProps } from "./components/menu-list-item";

type MenuProps = {
  menuListItems: MenuListItemProps[];
};

const menu = css`
  position: fixed;
  display: grid;
  height: 100%;
  width: var(--menu-width);
  background-color: white;
  justify-content: center;
`;

const menuList = css`
  padding-inline: var(--spacing-sm);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 4rem;
`;

export function Menu({ menuListItems }: MenuProps) {
  const [activeState] = useRecoilState(menuActiveStore);

  return (
    <nav className={menu}>
      <ul className={menuList}>
        {menuListItems.map((index) => (
          <MenuListItem
            key={index.id}
            {...index}
            acitveState={activeState === index.id ? "active" : "none"}
          />
        ))}
      </ul>
    </nav>
  );
}
