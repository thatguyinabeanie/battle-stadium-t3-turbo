"use server";

import type { FetchOptions } from "openapi-fetch";

import type { paths } from "~/lib/api/openapi-v1";
import { BattleStadiumApiClient, defaultConfig } from "~/lib/api";

export async function getOrganizationTournaments(
  slug: string,
  options?: FetchOptions<paths["/organizations/{slug}/tournaments"]["get"]>,
) {
  const organizationTournamentsOptions = {
    ...defaultConfig(`getOrganizationTournaments(${slug})`),
    ...options,
    params: {
      path: { slug },
      ...options?.params,
    },
  };

  const tours =
    (
      await BattleStadiumApiClient().GET(
        "/organizations/{slug}/tournaments",
        organizationTournamentsOptions,
      )
    ).data ?? [];
  return tours;
}
