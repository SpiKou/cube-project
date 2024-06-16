import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Credentials, User } from "../interfaces/user";
import { environment } from "src/environments/environment.development";

const API_URL = `${environment.apiURL}/user`;

@Injectable({
    providedIn: 'root'
})
export class UserService {

    http: HttpClient = inject(HttpClient);

    registerUser(user: User) {
        return this.http.post<{msg: string}>(`${API_URL}/register`, user);
    }

    loginUser(credentials: Credentials) {
        return this.http.post<{ }>
    }
}
