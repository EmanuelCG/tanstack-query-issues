import { githubApi } from "../../api/github.api"
import { GithubIssue } from "../interfaces"

export const getIssues = async():Promise<GithubIssue[]> => {
    const { data } = await githubApi.get<GithubIssue[]>('/issues')
    return data

}