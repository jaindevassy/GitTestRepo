import { Page } from "@playwright/test";

export class HelperBase {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async waitForNumberOfSecs(timeInSecs: number) {
    await this.page.waitForTimeout(timeInSecs * 1000);
  }
}
