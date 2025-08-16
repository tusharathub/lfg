"use client"
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import React from "react";

export default function CreatePage() {
  const createSession = useMutation(api.session.createSession);
  const { user } = useUser();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const form = new FormData(e.currentTarget as HTMLFormElement);

    await createSession({
      hostId: user?.id!,
      title: form.get("title") as string,
      game: form.get("game") as string,
      platform: form.get("platform") as string,
      time: Date.now(), 
      tags: (form.get("tags") as string).split(",").map((t) => t.trim()),
      notes: form.get("notes") as string,
    });

    console.log({
  game: form.get("game"),
  platform: form.get("platform"),
  tags: form.get("tags"),
});

  }

  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-sm max-w-lg mx-auto">
      <h1>Create a Game Session</h1>
      <form  className="space-y-4" onSubmit={handleSubmit}>
        <input name="title"  type="text" placeholder="Need 3 Players for valo" className="w-full border rounded p-2"/>
        <input name="game" type="text" placeholder="Game (Valorant, Fortnite, Roblox, etc)" className="w-full border rounded p-2" />
        <select name="platform" className="w-full border rounded p-2">
          <option>PC</option>
          <option>Play Station</option>
          <option>Xbox</option>
          <option>Mobile</option>
          <option>Other</option>
        </select>
        <input name="time" type="time" placeholder="time to play" className="w-full border rounder p-2"/>
        <input name="tags" type="text" placeholder="Tags (comma separated)" className="w-full border rounded p-2"/>
        <textarea name="notes" placeholder="Notes or Discord/Steam link" className="w-full border rounded p-2"></textarea>
        <button name="submit" type="submit" className="bg-lime-500 hover:bg-lime-600  py-2 px-4 rounded"> Create Session</button>
      </form>
      
    </div>
  );
}

