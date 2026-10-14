import { Page } from "playwright-core"

export class LoginPageElemente {
    private page:Page
    
    constructor(page: Page){
        this.page = page
    }

    get textboxes() {
        return {
            username: this.page.locator('[data-test="username"]'),
            password: this.page.locator('[data-test="password"]')
        }
    }

    get button(){
        return {
            login: this.page.locator('#login-button')
        }
    }




}