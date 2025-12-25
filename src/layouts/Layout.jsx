import MapEngine from 'src/components/modules/MapEngine';
import MapSelectModal from 'src/components/modules/MapSelectModal';
import { useSelector } from 'react-redux';
import Header from './Header';
import Footer from './Footer';



 export default function Layout({children}){
const selectorOpen = useSelector(s=>s.location.selectorOpen);
return (
<>
<Header />


{selectorOpen && <MapSelectModal />}
<main>{children}</main>
<Footer />
</>
)
}