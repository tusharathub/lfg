
export default function CreatePage() {
    return (
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm max-w-lg mx-auto">
            <h1>Create a Game Session</h1>
            <form className="space-y-4">
                <input type="text" placeholder="valo, fortnite, roblox, etc" className="w-full border rounded p-2" />
                <select className="w-full border rounded p-2">
                    <option >PC</option>
                    <option >Play Station</option>
                    <option >Xbox</option>
                    <option >Mobile</option>
                </select>
                <input type="text" placeholder="time to play" className="w-full border rounder p-2" />
                <input type="number"  placeholder="players needed" className="w-full border rounder p-2"/>
                 <input type="text" placeholder="Tags (comma separated)" className="w-full border rounded p-2" />
                <textarea placeholder="Notes" className="w-full border rounded p-2"></textarea>
                <input type="url" placeholder="Discord/Steam link" className="w-full border rounded p-2" />
                <button type="submit" className="bg-lime-500 hover:bg-lime-600  py-2 px-4 rounded">
                    Create Session
                </button>
            </form>
        </div>
    )
}