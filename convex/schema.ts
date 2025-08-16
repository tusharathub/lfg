import { defineSchema, defineTable } from "convex/server";
import {v} from "convex/values"


export default defineSchema({
    users: defineTable({
        username: v.string(),
        avatarUrl :v.optional(v.string()) ,
        timezone : v.optional(v.string()),
        platforms: v.optional(v.array(v.string())),
        games: v.optional(v.array(v.string())),
        playstyles: v.optional(v.array(v.string())),
        bio: v.optional(v.string()),
        clerkId : v.string(),
    }).index("by_clerk_id", ["clerkId"]),

    sessions: defineTable({
        hostId : v.string(),
        title : v.string(),
        game : v.string(),
        platform : v.string(),
        time: v.number(),
        tags: v.array(v.string()),
        notes: v.optional(v.string()),
        links: v.optional(v.string()),
        createdAt: v.number(),
    }).index("by_game", ["game"]),

    session_members : defineTable({
        sessionId : v.id("sessions"),
        userId : v.string(),
        joinedAt: v.number(),
    }).index("by_session", ["sessionId"])
})