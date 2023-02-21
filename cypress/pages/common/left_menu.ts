import { BasePage } from "../base";

export class LeftMenu extends BasePage {
  private locator = {
    btnMember: "[aria-label='usergroup-add'] + span",
  };

  clickBtnMember() {
    this.clickElement(this.locator.btnMember);
  }
}
