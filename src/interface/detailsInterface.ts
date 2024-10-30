export interface Details {
    username?: string;
    projectname?: string;
    AlertTriggers?: Array<{
        sitename: string;
        siteurl: string;
        alerttype: string[];
    }>
}