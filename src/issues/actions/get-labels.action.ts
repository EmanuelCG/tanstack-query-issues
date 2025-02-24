import { githubApi } from "../../api/github.api"
import { GitHubLabel } from "../interfaces"

export const getLabels = async():Promise<GitHubLabel[]> => {
  // const res = await fetch('https://api.github.com/repos/facebook/react/labels')
  // .then(r => r.json())
  // console.log(res)
  // return res

  const {data} = await githubApi.get<GitHubLabel[]>('/labels')
  return data
}
