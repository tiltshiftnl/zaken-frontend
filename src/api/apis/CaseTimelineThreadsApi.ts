// tslint:disable
/**
 * Zaken Backend Gateway API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Observable } from "rxjs"
import { BaseAPI, HttpHeaders, HttpQuery, throwIfNullOrUndefined, encodeURI } from "../runtime"
import {
    CaseTimelineThread,
    PaginatedCaseTimelineThreadList,
    PatchedCaseTimelineThread,
    TimelineUpdate
} from "../models"

export type CaseTimelineThreadsAddTimelineItemCreateRequest = {
    timelineUpdate: TimelineUpdate
}

export type CaseTimelineThreadsCreateRequest = {
    caseTimelineThread: CaseTimelineThread
}

export type CaseTimelineThreadsDestroyRequest = {
    id: number
}

export type CaseTimelineThreadsListRequest = {
    page?: number
    subjectCaseIdentification?: string
}

export type CaseTimelineThreadsPartialUpdateRequest = {
    id: number
    patchedCaseTimelineThread?: PatchedCaseTimelineThread
}

export type CaseTimelineThreadsRemoveTimelineItemCreateRequest = {
    threadId: string
    caseTimelineThread: CaseTimelineThread
}

export type CaseTimelineThreadsRetrieveRequest = {
    id: number
}

export type CaseTimelineThreadsUpdateRequest = {
    id: number
    caseTimelineThread: CaseTimelineThread
}

export type CaseTimelineThreadsUpdateTimelineItemCreateRequest = {
    timelineUpdate: TimelineUpdate
}

/**
 * no description
 */
export class CaseTimelineThreadsApi extends BaseAPI {
    /**
     * Add item to timeline of case (endpoint for automation)
     */
    caseTimelineThreadsAddTimelineItemCreate = ({ timelineUpdate }: CaseTimelineThreadsAddTimelineItemCreateRequest): Observable<CaseTimelineThread> => {
        throwIfNullOrUndefined(timelineUpdate, "caseTimelineThreadsAddTimelineItemCreate")

        const headers: HttpHeaders = {
            "Content-Type": "application/json",
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${ btoa(this.configuration.username + ":" + this.configuration.password) }` } : undefined)
        }

        return this.request<CaseTimelineThread>({
            path: "/api/v1/case-timeline-threads/add-timeline-item/",
            method: "POST",
            headers,
            body: timelineUpdate
        })
    };

    /**
     */
    caseTimelineThreadsCreate = ({ caseTimelineThread }: CaseTimelineThreadsCreateRequest): Observable<CaseTimelineThread> => {
        throwIfNullOrUndefined(caseTimelineThread, "caseTimelineThreadsCreate")

        const headers: HttpHeaders = {
            "Content-Type": "application/json",
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${ btoa(this.configuration.username + ":" + this.configuration.password) }` } : undefined)
        }

        return this.request<CaseTimelineThread>({
            path: "/api/v1/case-timeline-threads/",
            method: "POST",
            headers,
            body: caseTimelineThread
        })
    };

    /**
     */
    caseTimelineThreadsDestroy = ({ id }: CaseTimelineThreadsDestroyRequest): Observable<void> => {
        throwIfNullOrUndefined(id, "caseTimelineThreadsDestroy")

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${ btoa(this.configuration.username + ":" + this.configuration.password) }` } : undefined)
        }

        return this.request<void>({
            path: "/api/v1/case-timeline-threads/{id}/".replace("{id}", encodeURI(id)),
            method: "DELETE",
            headers
        })
    };

    /**
     */
    caseTimelineThreadsList = ({ page, subjectCaseIdentification }: CaseTimelineThreadsListRequest): Observable<PaginatedCaseTimelineThreadList> => {
        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${ btoa(this.configuration.username + ":" + this.configuration.password) }` } : undefined)
        }

        const query: HttpQuery = {}

        if (page != null) { query["page"] = page }
        if (subjectCaseIdentification != null) { query["subject__case__identification"] = subjectCaseIdentification }

        return this.request<PaginatedCaseTimelineThreadList>({
            path: "/api/v1/case-timeline-threads/",
            method: "GET",
            headers,
            query
        })
    };

    /**
     */
    caseTimelineThreadsPartialUpdate = ({ id, patchedCaseTimelineThread }: CaseTimelineThreadsPartialUpdateRequest): Observable<CaseTimelineThread> => {
        throwIfNullOrUndefined(id, "caseTimelineThreadsPartialUpdate")

        const headers: HttpHeaders = {
            "Content-Type": "application/json",
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${ btoa(this.configuration.username + ":" + this.configuration.password) }` } : undefined)
        }

        return this.request<CaseTimelineThread>({
            path: "/api/v1/case-timeline-threads/{id}/".replace("{id}", encodeURI(id)),
            method: "PATCH",
            headers,
            body: patchedCaseTimelineThread
        })
    };

    /**
     * Update item from timeline of case (endpoint for automation)
     */
    caseTimelineThreadsRemoveTimelineItemCreate = ({ threadId, caseTimelineThread }: CaseTimelineThreadsRemoveTimelineItemCreateRequest): Observable<CaseTimelineThread> => {
        throwIfNullOrUndefined(threadId, "caseTimelineThreadsRemoveTimelineItemCreate")
        throwIfNullOrUndefined(caseTimelineThread, "caseTimelineThreadsRemoveTimelineItemCreate")

        const headers: HttpHeaders = {
            "Content-Type": "application/json",
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${ btoa(this.configuration.username + ":" + this.configuration.password) }` } : undefined)
        }

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            "thread_id": threadId
        }

        return this.request<CaseTimelineThread>({
            path: "/api/v1/case-timeline-threads/remove-timeline-item/",
            method: "POST",
            headers,
            query,
            body: caseTimelineThread
        })
    };

    /**
     */
    caseTimelineThreadsRetrieve = ({ id }: CaseTimelineThreadsRetrieveRequest): Observable<CaseTimelineThread> => {
        throwIfNullOrUndefined(id, "caseTimelineThreadsRetrieve")

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${ btoa(this.configuration.username + ":" + this.configuration.password) }` } : undefined)
        }

        return this.request<CaseTimelineThread>({
            path: "/api/v1/case-timeline-threads/{id}/".replace("{id}", encodeURI(id)),
            method: "GET",
            headers
        })
    };

    /**
     */
    caseTimelineThreadsUpdate = ({ id, caseTimelineThread }: CaseTimelineThreadsUpdateRequest): Observable<CaseTimelineThread> => {
        throwIfNullOrUndefined(id, "caseTimelineThreadsUpdate")
        throwIfNullOrUndefined(caseTimelineThread, "caseTimelineThreadsUpdate")

        const headers: HttpHeaders = {
            "Content-Type": "application/json",
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${ btoa(this.configuration.username + ":" + this.configuration.password) }` } : undefined)
        }

        return this.request<CaseTimelineThread>({
            path: "/api/v1/case-timeline-threads/{id}/".replace("{id}", encodeURI(id)),
            method: "PUT",
            headers,
            body: caseTimelineThread
        })
    };

    /**
     * Update item from timeline of case (endpoint for automation)
     */
    caseTimelineThreadsUpdateTimelineItemCreate = ({ timelineUpdate }: CaseTimelineThreadsUpdateTimelineItemCreateRequest): Observable<CaseTimelineThread> => {
        throwIfNullOrUndefined(timelineUpdate, "caseTimelineThreadsUpdateTimelineItemCreate")

        const headers: HttpHeaders = {
            "Content-Type": "application/json",
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${ btoa(this.configuration.username + ":" + this.configuration.password) }` } : undefined)
        }

        return this.request<CaseTimelineThread>({
            path: "/api/v1/case-timeline-threads/update-timeline-item/",
            method: "POST",
            headers,
            body: timelineUpdate
        })
    };
}
