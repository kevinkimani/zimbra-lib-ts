/*
 * ZeXtras' Zimbra API for Zimlet building
 * Copyright (C) 2017 ZeXtras S.r.l.
 *
 * This file is part of ZeXtras' Zimbra API for Zimlet building.
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
 * along with ZeXtras' Zimbra API for Zimlet building. If not, see <http://www.gnu.org/licenses/>.
 */

import {DwtDialog, DwtDialog_ButtonDescriptor} from "../../ajax/dwt/widgets/DwtDialog";
import {DwtComposite} from "../../ajax/dwt/widgets/DwtComposite";
import {DwtPoint} from "../../ajax/dwt/graphics/DwtPoint";
import {XFormObjectBase} from "../../ajax/dwt/xforms/XFormItem";
import {XModelParams, XModel} from "../../ajax/dwt/xforms/XModel";
import {XForm} from "../../ajax/dwt/xforms/XForm";

export class ZaXDialog extends DwtDialog {

  public static XFormModifiers: {[name: string]: Function[]};

  public _standardButtons: number[];
  public _extraButtons: DwtDialog_ButtonDescriptor[];
  public supportMinimize: boolean;
  public _helpURL: string;
  public _containedObject: any;
  public _localXForm: XForm;
  public _localXModel: XModel;

  constructor(parent: DwtComposite, className: string, title: string, w?: string, h?: string, iKeyName?: string, contextId?: string) {
    super({
      parent: parent,
      className: className,
      title: title,
      standardButtons: [DwtDialog.OK_BUTTON],
      extraButtons: [],
      id: void 0
    });
  }

  public setObject(entry: any): void {}
  public getObject(): any {}
  public popup(loc?: DwtPoint): void {}
  public getMyXForm(entry: any): XFormObjectBase {
    return void 0;
  }
  public initForm(xModelMetaData: XModelParams, xFormMetaData: XFormObjectBase, defaultInstance?: any): void {}

}
