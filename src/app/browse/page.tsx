"use client";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function BrowsePage() {
  const sessions = useQuery(api.session.getSessions);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">🎮 Browse Sessions</h1>

        {!sessions && <p className="text-gray-400">Loading sessions...</p>}
        {sessions?.length === 0 && (
          <p className="text-gray-500">No sessions available yet.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sessions?.map((s: any) => (
            <div
              key={s._id}
              className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition"
            >
              <p className="font-medium text-lg">{s.title}</p>
              <p className="font-medium text-lg">Game : {s.game}</p>
              <p className="font-medium text-lg">{s.notes}</p>
              <p className="text-sm text-gray-500">{s.platform}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
