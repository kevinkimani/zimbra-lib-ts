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

import {ZmController} from "./ZmController";
import {ZmToolBar} from "../view/ZmToolBar";
import {ZmZimletAppView} from "../view/ZmZimletAppView";
import {ZmApp} from "../../core/ZmApp";
import {DwtShell} from "../../../ajax/dwt/widgets/DwtShell";

export class ZmZimletAppController extends ZmController {

  public isZmZimletAppController: boolean;

  public static getDefaultViewType(): string { return undefined; }

  constructor(name: string, container: DwtShell, app: ZmApp) {
    super(container, app);
  }

  public getView(): ZmZimletAppView { return undefined; }
  public getToolbar(): ZmToolBar { return undefined; }
  public show(): boolean { return undefined; }
  public getDefaultViewType(): string { return undefined; }

}
