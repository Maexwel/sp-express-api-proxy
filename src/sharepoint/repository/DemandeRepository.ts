import { IRepository } from "./IRepository";
import { Demande } from "../models/Demande";

export default class DemandeRepository implements IRepository<Demande> {
    
    fetch(): Demande[] {
        throw new Error("Method not implemented.");
    }

}