// Simple SharePoint list type def
export type SharePointList = {
    siteUrl: string,
    listName:string,
    listId: string,
};

// Define all your list here
export const DemandeList:SharePointList = {
    siteUrl: 'https://yourdomain.sharepoint.com/sites/demosite',
    listName: 'DemandeList',
    listId: 'f1c18c87-19e9-4fbb-9b0c-329bc1c0bd64',
};