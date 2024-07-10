import { atom, selector } from "recoil";

export const networkAtom=atom({
    key:"networkAtom",
    default:14

});
export const jobAtom=atom({
    key:"jobAtom",
    default:0

});
export const messagingAtom=atom({
    key:"messagingAtom",
    default:0

});
export const notiAtom=atom({
    key:"notiAtom",
    default:10

});

export const totalnotificationSelector=selector({
    key:"totalnoti",
   get:({get})=>{
        const networkcount=get(networkAtom);
        const jobcount=get(jobAtom);
        const noticount=get(notiAtom);
        const messagcount=get(messagingAtom);

        return networkcount+jobcount+noticount+messagcount;

    }
})
