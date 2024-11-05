import { Page } from "@playwright/test";
import { gitHomeTestPage } from "./gitHomePage";
import { gitSignInTestPage } from "./gitSignInPage";
import { gitDashboardTestPage } from "./gitDashboard";
import { gitCodeRepoTestPage } from "./gitCodeRepo";

export class PageManager {
  //*first, create field for each page object
  private readonly page: Page;
  private readonly gitHomePage: gitHomeTestPage;
  private readonly gitSignInPage: gitSignInTestPage;
  private readonly gitDashboardPage: gitDashboardTestPage;
  private readonly gitCodeRepoPage: gitCodeRepoTestPage;

  //*second, call all pages in constructor
  constructor(page: Page) {
    this.page = page;
    this.gitHomePage = new gitHomeTestPage(this.page);
    this.gitSignInPage = new gitSignInTestPage(this.page);
    this.gitDashboardPage = new gitDashboardTestPage(this.page);
    this.gitCodeRepoPage = new gitCodeRepoTestPage(this.page);
  }
  //*third, create methods that return all instances of pages
  onGitHome() {
    return this.gitHomePage;
  }
  onSignIn() {
    return this.gitSignInPage;
  }
  onGitDashboard() {
    return this.gitDashboardPage;
  }
  onGitCodeRepo() {
    return this.gitCodeRepoPage;
  }
}
