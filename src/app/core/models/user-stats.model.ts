import { User } from "./user.model";

export interface UserStats {
    highestWpm: number;
    fastestTime: number;
    user: User;
}