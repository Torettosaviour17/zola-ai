"use client";

import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const { getCurrentUser } = useAuth();

  useEffect(() => {
    void getCurrentUser();
  }, [getCurrentUser]);

  return <>{children}</>;
}
