import { Team } from "../../team/models/team";

export interface League {
    name: string;
    description: string;
    team:Team
}
