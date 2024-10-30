export interface DetailedProjectItemProps {
    label: string;
    details: {
        username?: string;
        projectname?: string;
        AlertTriggers?: Array<{
            sitename: string;
            siteurl: string;
            alerttype: string[];
        }>
    };
    projects: string[];
    setProjects: any;
}