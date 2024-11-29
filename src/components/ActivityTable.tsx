import { useActivityStore } from "../stores";

export function ActivityTable() {
  const activities = useActivityStore((state) => state.activities);

  return (
    <div className="h-[calc(100vh_-_100px)] overflow-y-scroll">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-white uppercase bg-orange-500 sticky top-0 z-10">
          <tr>
            <th scope="col" className="px-6 py-3">
              Activity
            </th>
            <th scope="col" className="px-6 py-3">
              Availability
            </th>
            <th scope="col" className="px-6 py-3">
              Type
            </th>
            <th scope="col" className="px-6 py-3">
              Participants
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Accessibility
            </th>
            <th scope="col" className="px-6 py-3">
              Duration
            </th>
            <th scope="col" className="px-6 py-3">
              Kid-Friendly
            </th>
            <th scope="col" className="px-6 py-3">
              Link
            </th>
          </tr>
        </thead>
        <tbody className="mt-8">
          {activities.map((activity, index) => (
            <tr key={index} className="bg-white border-b">
              <td className="w-full px-6 py-4">{activity.activity}</td>
              <td className="px-6 py-4">{activity.availability}</td>
              <td className="px-6 py-4">{activity.type}</td>
              <td className="px-6 py-4">{activity.participants}</td>
              <td className="px-6 py-4">{activity.price}</td>
              <td className="px-6 py-4">{activity.accessibility}</td>
              <td className="px-6 py-4">{activity.duration}</td>
              <td className="px-6 py-4">
                {activity.kidFriendly ? "Yes" : "No"}
              </td>
              <td className="px-6 py-4 text-blue-500 cursor-pointer">
                <a href={activity.link} target="_blank">
                  {activity.link}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
