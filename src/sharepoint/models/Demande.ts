import { IMapper } from "./IMapper";

// Define internal type for your data
export type Demande = {
    label: string,
    id: number,
    user: string,
}
// Define Sharepoint type
export type SharePointDemande = {
    Label: string,
    Id: number,
    Validated_X020_by: any,
}

// Class used to create Demande object by making mapping of properties
export class DemandeMapper implements IMapper<Demande, SharePointDemande> {

    map(args: SharePointDemande): Demande {
        return {
            id: args.Id,
            label: args.Label,
            user: args.Validated_X020_by,
        }
    }

    mapBack(args: Demande): SharePointDemande {
        return {
            Id: args.id,
            Label: args.label,
            Validated_X020_by: args.user
        }
    }
}