import { atom, selector } from "recoil";
import axios from 'axios';

export const notifications = atom({
  key: "networkAtom",
  default: selector({
    key: "networkAtomSelector",
    get: async () => {
        await new Promise(r=>setTimeout(r,5000));
      const res = await axios.get("https://sum-server.100xdevs.com/notifications");
      return res.data || {
        network: 0,
        jobs: 0,
        notifications: 0,
        messaging: 0
      };
    }
  })
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const allNotifications = get(notifications);
    return (
      allNotifications.network +
      allNotifications.jobs +
      allNotifications.notifications +
      allNotifications.messaging
    );
  }
});
