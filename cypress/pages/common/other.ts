import { BasePage } from "../base";

export class OtherCommon extends BasePage {
  private locator = {
    loadingState: "[aria-busy='true']",
  };

  waitForLoadingDisappear() {
    this.getLocator(this.locator.loadingState).should("not.exist");
  }
}
