import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const syncUser = mutation({
  args: {
    username: v.string(),
    avatarUrl: v.optional(v.string()),
    timezone: v.optional(v.string()),
    platforms: v.optional(v.array(v.string())),
    games: v.optional(v.array(v.string())),
    playstyles: v.optional(v.array(v.string())),
    bio: v.optional(v.string()),
    clerkId: v.string(),
  },
  handler: async (ctx, { username, avatarUrl, timezone, platforms, games, playstyles, bio, clerkId }) => {
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", clerkId))
      .first();

    if (existingUser) {
      await ctx.db.patch(existingUser._id, {
        username,
        avatarUrl,
      });
      return existingUser._id;
    }

    return await ctx.db.insert("users", {
      username,
      avatarUrl,
      timezone,
      platforms: platforms ?? [],
      games: games ?? [],
      playstyles: playstyles ?? [],
      bio: bio ?? "",
      clerkId,
    });
  },
});