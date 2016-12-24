import { GithubIssue } from "../github-issue";

export interface GithubIssueEvent {
    selected: boolean;
    issue: GithubIssue;
}
