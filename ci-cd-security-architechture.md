## CI/CD Security Architecture — Responsibility Boundary

CI/CD security is responsible for preventing the promotion of known, fixable, high-risk artifacts into production through environment-aware gating.

The pipeline enforces:
- Artifact integrity
- Risk-based promotion decisions
- Explicit, auditable risk acceptance

CI/CD security does NOT guarantee runtime security, business logic correctness, or protection against zero-day exploits.

Runtime, cloud, and behavioral risks are owned by platform and security operations teams.

A green pipeline means:
“The artifact meets pre-deployment security policy.”
It does NOT mean:
“The system is secure.”
