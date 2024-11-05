import { test, expect } from "@playwright/test";
import { PageManager } from "../pageObjects/pageManager";
import { faker } from "@faker-js/faker";

test.use({
  launchOptions: {
    slowMo: 1000,
  },
});

test("UpdateGitTextFile", async ({ page }) => {
  const pageManager = new PageManager(page);
  const textToUpdate = "Test from Jain- " + faker.random.alphaNumeric(10);
  const thisDay = new Date().toString().trim();
  console.log(`${process.env.URL}`);
  await pageManager.onGitHome().navigateToSignIn(`${process.env.GITURL}`);
  //`${process.env.GITURL}`
  //"https://github.com/"
  await pageManager
    .onSignIn()
    .gitSignIn(`${process.env.USER_NAME}`, `${process.env.PASSWORD}`);
  //`${process.env.USER_NAME}`, `${process.env.PASSWORD}`
  //"jaindevassy", "Prius@2020"
  await pageManager
    .onGitDashboard()
    .searchRepository("Resolver-pw-jain-devassy");
  await pageManager.onGitCodeRepo().updateTextFile(textToUpdate, thisDay);
});
