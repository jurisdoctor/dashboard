"use-client";

import { useSession } from "next-auth/react";

const useClientSession = () => {
  const { data: session } = useSession();

  return { session };
};

export default useClientSession;
