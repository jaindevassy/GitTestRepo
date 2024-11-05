import { expect, Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class gitHomeTestPage extends HelperBase {
  constructor(page: Page) {
    super(page);
  }

  async navigateToSignIn(gitURL: string) {
    await this.page.goto(gitURL);
    await this.page.getByRole("link", { name: "Sign in" }).click();
    //await this.waitForNumberOfSecs(2); //'HelperBase' method
  }
}
