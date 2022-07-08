import { UserStats } from "./user-stats.model";

export interface User {
    id: string;
    displayName: string;
    photoUrl: string;
    email: string;
    phoneNumber: string;
    userStats: UserStats;
}