"use client";

import { useEffect } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useUser } from "@clerk/nextjs";

export default function SyncClerkToConvex() {
  const { user } = useUser();
  const syncUser = useMutation(api.users.syncUser);

  useEffect(() => {
    if (!user) return;

    syncUser({
      username: user.username || user.firstName || "Anonymous",
      avatarUrl: user.imageUrl,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      platforms: [],
      games: [],
      playstyles: [],
      bio: "",
      clerkId: user.id,
    }).catch((err) => console.error("Sync user failed:", err));
  }, [user, syncUser]);

  return null;
}
