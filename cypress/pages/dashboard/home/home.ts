import { BasePage } from "../../base";
import { OtherCommon } from "../../common/other";

// let common = new OtherCommon();

export class HomePage extends BasePage {
  private common: OtherCommon = new OtherCommon();
  private locator = {
    vntIntro: "vntDashBoard__intro",
    yourTodoList: ".vntDashBoard__tab",
    listPreApproval: ".listPreApproval:only-child",
  };
  verifyShowHomePage() {
    this.common.waitForLoadingDisappear();
    this.waitForElementEnable(this.locator.vntIntro);
    this.waitForElementEnable(this.locator.yourTodoList);
    this.waitForElementEnable(this.locator.listPreApproval);
  }
}
