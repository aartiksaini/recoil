
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import { jobAtom, messagingAtom, networkAtom, notiAtom, totalnotificationSelector } from './atom'
import { useMemo } from 'react'

function App() {

  return <RecoilRoot>
  <Mainapp></Mainapp>
  </RecoilRoot>
  
}


 function Mainapp(){
  const networkcount=useRecoilValue(networkAtom)
  const jobcount=useRecoilValue(jobAtom)
  const noticount=useRecoilValue(notiAtom)
  const [messagcount,setmessacount]=useRecoilState(messagingAtom)
const finatvalue=networkcount>=100 ? "99+":networkcount;
 const totalnotification=useRecoilValue(totalnotificationSelector);
// const totalnotification=useMemo(()=>{
//   return networkcount+jobcount+noticount+messagcount;
// },[networkcount,jobcount,noticount,messagcount])
  return (
    <>
  <button>home  </button>
  <button>my network ({finatvalue})</button>
  <button>jobs({jobcount})</button>
  <button>messaging({messagcount})</button>
  <button>notifications({noticount})</button>
  <button >Me({totalnotification})</button>
  </>
  )
 }


export default App
