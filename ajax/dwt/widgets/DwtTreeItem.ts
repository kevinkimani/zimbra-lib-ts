/*
 * T4Z - TypeScript 4 Zimlet
 * Copyright (C) 2017 ZeXtras S.r.l.
 *
 * This file is part of T4Z - TypeScript 4 Zimlet.
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation, version 2 of
 * the License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with T4Z - TypeScript 4 Zimlet. If not, see <http://www.gnu.org/licenses/>.
 */

import {DwtComposite, DwtCompositeParams} from "./DwtComposite";
import {DwtMenu} from "./DwtMenu";
import {DwtSelectionEvent} from "../events/DwtSelectionEvent";

export class DwtTreeItem extends DwtComposite {

  public actionMenu: DwtMenu;
  public _nodeCell: HTMLElement;
  public _treeItemExtraImgClass: string;
  public isDwtTreeItem: boolean;

  constructor(params: DwtTreeItemParams) {
    super(params);
  }

  public enableSelection(enableSelection: boolean): void {}
  public enableAction(enableSelection: boolean): void {}
  public setExpanded(expanded: boolean, recurse?: boolean, skipNotify?: boolean): void {}
  public setVisible(visible?: boolean, itemOnly?: boolean, childOnly?: boolean): void {}
  public _setSelected(selected: boolean, noFocus?: boolean): void {}
  public getText(): string { return null; };
  public setText(text: string): void {};
  public setImage(image: string): void {};
  public onAction(event: DwtSelectionEvent): void {};
  public getData(key: string): any { return undefined; }
  public setData(): void {};
  public getChildren(): DwtTreeItem[] { return undefined; };
  public _initialize(index?: number, realizeDeferred?: boolean, forceNode?: boolean): void {}

}

export interface DwtTreeItemParams extends DwtCompositeParams {
  text: string;
  selectable?: boolean;
  dndScrollCallback?: Function;
  dndScrollId?: string;
}
