import useApiRequest from "./hooks/useApiRequest"
import { getHeaders, makeGatewayUrl, useErrorHandler } from "./hooks/utils/utils"

type APIListResponse<T> = {
  count: number
  results: T[]
}

export type ApiGroup =
  | "cases"
  | "caseTypes"
  | "caseStates"

/**
 * Please configure your endpoints here:
 */
export const useCases = () => {
  const handleError = useErrorHandler()
  return useApiRequest<APIListResponse<API.Case>>({
    url: makeGatewayUrl("cases"),
    groupName: "cases",    // NOTE: "cases" and "cases/:id" share the same group config. Cache will be cleared for the whole group.
    handleError,
    getHeaders
  })
}

export const useCase = (id: API.Case["identification"]) => {
  const handleError = useErrorHandler()
  return useApiRequest<API.Case>({
    url: makeGatewayUrl("cases", id!),
    groupName: "cases",
    handleError,
    getHeaders
  })
}


export const useCaseTypes = () => {
  const handleError = useErrorHandler()
  return useApiRequest<APIListResponse<API.CaseType>>({
    url: makeGatewayUrl("case-types"),
    groupName: "caseTypes",
    handleError,
    getHeaders
  })
}

export const useCaseStates = () => {
  const handleError = useErrorHandler()
  // TODO fix when API.CaseState is reintroduced
  return useApiRequest<APIListResponse<any>>({
    url: makeGatewayUrl("states"),
    groupName: "caseStates",
    handleError,
    getHeaders
  })
}