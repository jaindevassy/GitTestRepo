import { expect, Page } from "@playwright/test";
import { HelperBase } from "./helperBase";
//import ENV from "../utilities/env";

export class gitSignInTestPage extends HelperBase {
  constructor(page: Page) {
    super(page);
  }

  async gitSignIn(username: string, password: string) {
    await this.page.getByLabel("Username or email address").clear();
    await this.page.getByLabel("Username or email address").fill(username);
    await this.page.getByLabel("Password").clear();
    await this.page.getByLabel("Password").fill(password);
    await this.page.getByRole("button", { name: "Sign in" }).first().click();
  }
}
