export default (caseEvents: Components.Schemas.CaseEvent[]) =>
  caseEvents
    .filter(({ type }) => type === "DEBRIEFING")
    .filter(({ event_values }) => event_values.violation === "NO")
    .length > 0
