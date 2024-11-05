import { expect, Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class gitCodeRepoTestPage extends HelperBase {
  constructor(page: Page) {
    super(page);
  }

  async updateTextFile(inputText: string, thisDay: string) {
    await this.page.getByRole("link", { name: "textFile" }).click();
    await this.page.getByLabel("Edit file").click();
    await this.page.locator(".cm-line").last().fill(inputText);
    await this.page.getByRole("button", { name: "Commit changes..." }).click();
    await this.page.locator("#commit-message-input").last().fill(inputText);
    await this.page
      .getByPlaceholder("Add an optional extended description..")
      .fill("Last update on- " + thisDay);
    await this.page.getByLabel("Create a").check();
    await this.page.getByRole("button", { name: "Propose changes" }).click();
    await this.page
      .getByRole("button", { name: "Create pull request" })
      .click();
    await this.page.locator("#pull-requests-tab").click();
    const isPRisOpen = await this.page
      .locator("#js-issues-search")
      .inputValue();
    expect(isPRisOpen).toEqual("is:pr is:open ");
    const pullRequestInfo = await this.page
      .locator('[data-hovercard-type="pull_request"]', {
        hasText: inputText,
      })
      .first()
      .textContent();
    expect(pullRequestInfo).toContain(inputText);
  }
}
