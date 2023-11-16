"use client";

import type { Session } from "@auth0/nextjs-auth0";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";
import { http } from "../../src/api-utils/http";

function SessionPage(): JSX.Element {
  const [session, setSession] = useState<Partial<Session>>();

  useEffect(() => {
    const fetchSession = async (): Promise<void> => {
      const data = await http<Partial<Session>>("/auth/session");

      setSession(data);
    };

    fetchSession().catch(() => null);
  }, []);

  return (
    <div>
      <h2>Session</h2>
      <div>Must be authenticated to view.</div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}

export default withPageAuthRequired(SessionPage);
