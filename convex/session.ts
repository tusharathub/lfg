import {mutation, query} from "./_generated/server"
import {v} from "convex/values"

export const createSession = mutation({
  args: {
    hostId: v.string(),
    title: v.string(),
    game: v.string(),
    platform: v.string(),
    time: v.number(),
    playersNeeded: v.number(),
    tags: v.array(v.string()),
    notes: v.optional(v.string()),
    link: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("sessions", {
      ...args,
      createdAt: Date.now(),
    });
  },
});

export const getSessions = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("sessions").order("desc").collect();
    }
})

export const joinSession = mutation({
    args: {
        sessionId : v.id("sessions"),
        userId : v.string(),
    }, 
    handler: async (ctx, {sessionId, userId}) => {
        const alreadyJoind = await ctx.db
        .query("session_members")
        .withIndex("by_session", (q) => q.eq("sessionId", sessionId))
        .filter((q) => q.eq(q.field("userId"), userId))
        .first()

        if(!alreadyJoind){
            await ctx.db.insert("session_members", {
                sessionId,
                userId,
                joinedAt: Date.now(),
            })
        }

        return {success : true};
    }
})