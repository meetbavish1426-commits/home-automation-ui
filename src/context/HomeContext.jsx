

// import { createContext, useState } from "react";

// export const HomeContext = createContext();

// export function HomeProvider({ children }) {
//   const [rooms, setRooms] = useState([
//     {
//       id: 1,
//       name: "Living Room",
//       devices: [
//         { id: 1, name: "Light", on: true },
//         { id: 2, name: "Fan", on: false },
//         { id: 3, name: "AC", on: true },
//       ],
//     },
//     {
//       id: 2,
//       name: "Bedroom",
//       devices: [
//         { id: 1, name: "Light", on: false },
//         { id: 2, name: "Fan", on: true },
//       ],
//     },
//     {
//       id: 3,
//       name: "Kitchen",
//       devices: [
//         { id: 1, name: "Light", on: true },
//         { id: 2, name: "Gas Sensor", on: true },
//       ],
//     },
//   ]);

//   // 🔁 Toggle single device
//   const toggleDevice = (roomId, deviceId) => {
//     setRooms(
//       rooms.map((room) =>
//         room.id === roomId
//           ? {
//               ...room,
//               devices: room.devices.map((device) =>
//                 device.id === deviceId
//                   ? { ...device, on: !device.on }
//                   : device
//               ),
//             }
//           : room
//       )
//     );
//   };

//   // 🔁 Toggle full room (ALL ON / ALL OFF)
//   const toggleRoom = (roomId) => {
//     setRooms(
//       rooms.map((room) =>
//         room.id === roomId
//           ? {
//               ...room,
//               devices: room.devices.map((d) => ({
//                 ...d,
//                 on: !room.devices.every((x) => x.on),
//               })),
//             }
//           : room
//       )
//     );
//   };

//   return (
//     <HomeContext.Provider value={{ rooms, toggleRoom, toggleDevice }}>
//       {children}
//     </HomeContext.Provider>
//   );
// }

import { createContext, useState } from "react";

export const HomeContext = createContext();

export function HomeProvider({ children }) {
  const [rooms, setRooms] = useState([
    {
      id: 1,
      name: "Living Room",
      devices: [
        { id: 1, name: "Light", on: true },
        { id: 2, name: "Fan", on: false },
        { id: 3, name: "AC", on: false },
      ],
    },
    {
      id: 2,
      name: "Bedroom",
      devices: [
        { id: 1, name: "Light", on: true },
        { id: 2, name: "Fan", on: true },
      ],
    },
  ]);

  /* 🔘 Toggle all devices in a room */
  const toggleRoom = (roomId) => {
    setRooms((prev) =>
      prev.map((room) =>
        room.id === roomId
          ? {
              ...room,
              devices: room.devices.map((d) => ({
                ...d,
                on: !room.devices.every((x) => x.on),
              })),
            }
          : room
      )
    );
  };

  /* 🔘 Toggle single device */
  const toggleDevice = (roomId, deviceId) => {
    setRooms((prev) =>
      prev.map((room) =>
        room.id === roomId
          ? {
              ...room,
              devices: room.devices.map((d) =>
                d.id === deviceId ? { ...d, on: !d.on } : d
              ),
            }
          : room
      )
    );
  };

  /* ➕ ADD ROOM */
  const addRoom = (roomName) => {
    setRooms((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: roomName,
        devices: [
          { id: 1, name: "Light", on: false },
          { id: 2, name: "Fan", on: false },
          { id: 3, name: "AC", on: false },
        ],
      },
    ]);
  };

  return (
    <HomeContext.Provider
      value={{ rooms, toggleRoom, toggleDevice, addRoom }}
    >
      {children}
    </HomeContext.Provider>
  );
}
