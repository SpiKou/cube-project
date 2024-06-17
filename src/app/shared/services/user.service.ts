import { HttpClient } from "@angular/common/http";
import { Injectable, effect, inject, signal } from "@angular/core";
import { Credentials, LoggedInUser, User } from "../interfaces/user";
import { environment } from "src/environments/environment.development";
import { Router } from "@angular/router";

const API_URL = `${environment.apiURL}/user`;

@Injectable({
    providedIn: 'root'
})
export class UserService {

    http: HttpClient = inject(HttpClient);
    router: Router = inject(Router);

    user = signal<LoggedInUser | null>(null);

    constructor() {
        effect(() => {
            if (this.user()) {
                console.log('User is logged in', this.user().fullName);
            } else {
                console.log('User is not logged in');
            }
        });
    }

    registerUser(user: User) {
        return this.http.post<{msg: string}>(`${API_URL}/register`, user);
    }

    check_duplicate_email(email: string) {
        return this.http.get<{msg: string}>(
            `${API_URL}/check_duplicate_email/${email}`, 
        );
    }

    loginUser(credentials: Credentials) {
        return this.http.post<{ access_token: string }>(
            `${API_URL}/login`, credentials,
        );
    }
}
