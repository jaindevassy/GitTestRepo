import { expect, Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class gitDashboardTestPage extends HelperBase {
  constructor(page: Page) {
    super(page);
  }

  async searchRepository(searchText: string) {
    await this.page
      .locator('[data-target="qbsearch-input.inputButton"]')
      .click();
    const searchRepo = this.page.locator("#query-builder-test");
    await searchRepo.fill(searchText);
    await searchRepo.press("Enter");
    await this.page
      .locator('[class="prc-Link-Link-85e08"]', {
        hasText: "jaindevassy/Resolver-pw-jain-devassy",
      })
      .click();
  }
}
