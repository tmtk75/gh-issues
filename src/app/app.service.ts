import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

    getAccessToken(): string {
        return localStorage.getItem("GITHUB_TOKEN");
    }

    saveAccessToken(token: string) {
        localStorage.setItem("GITHUB_TOKEN", token);
    }

}
