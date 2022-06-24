import './App.css';
import Blog from './components/blog/Blog';
import Card from './components/card/Card';
import ImageCard from './components/image-card/ImageCard';
import Navbar from './components/navbar/Navbar';
import PostCard from './components/post-card/PostCard';
import StatisticExampleValue from './components/semantic/Sematic';
import Sliders from './components/slider/Slider';



function App() {
	
  return (
    <div className="App">
      <div className='head'>
        <Navbar/>
          <div className='header'>
            <ImageCard href='#' src='/assets/images/gerb.png' title='Ўзбекистон Республикаси Президентининг Виртуал қабулхонаси'/>
            <ImageCard href='#' src='/assets/images/O_zbs.png' title='Ўзбекистон Республикаси Президентининг Матбуот хизмати'/>
            <ImageCard href='#' src='/assets/images/mygov.png' title='Ўзбекистон Республикаси Президентининг Виртуал қабулхонаси'/>
          </div>
      </div>
      <div className=''>
        <div className='container'>
          <div className='left-side'>
            <div className='carusel'>
              <Sliders/>
            </div>
            <div className='posts'>
              <h2>Янгиликлар</h2>
              <hr></hr>
              <div  className='container-post'>
                <PostCard src='/assets/images/2088.jpg' title='Янгиликлар ' text='13.06.2022. Ўзбекистон касаба уюшмалари Федерацияси Ижроия қўмитасининг навбатдаги мажлиси бўлиб ўтди.'/>
                <PostCard src='/assets/images/2089.jpg' title='Янгиликлар' text='13.06.2022. Ўзбекистон касаба уюшмалари Федерацияси Ижроия қўмитасининг навбатдаги мажлиси бўлиб ўтди.'/>
                <PostCard src='/assets/images/2090.jpg' title='Янгиликлар' text='13.06.2022. Ўзбекистон касаба уюшмалари Федерацияси Ижроия қўмитасининг навбатдаги мажлиси бўлиб ўтди.'/>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right-side'>
              <h3>Сўнги янгиликлар</h3>
              <Card src='/assets/images/2090.jpg' title='Долзарб вазифалар таҳлили' text='13.06.2022. Ўзбекистон касаба уюшмалари Федерацияси Ижроия қўмитасининг навбатдаги мажлиси бўлиб ўтди.'/>
              <Card src='/assets/images/2091.jpg' title='Касаба уюшмалари тарихи музейи янги материаллар билан бойитилмоқда' text='10.06.2022. Касаба уюшмалари фаоллари Ўзбекистон касаба уюшмалари тарихи музейи фаолияти билан танишдилар.'/>
              <Card src='/assets/images/2088.jpg' title='Ен сонги янгиликлар' text='Lorem ipsum lorem ipsum lorem ipsum'/>
              <Card src='/assets/images/2089.jpg' title='Ен сонги янгиликлар' text='Lorem ipsum lorem ipsum lorem ipsum'/>
            </div>
            <div className='blog'>
              <h3>Савол ва жавоблар</h3>
              <Blog src='/assets/images/laywer.png' title='Юридик консултатция'/>
              <Blog src='/assets/images/hummer.png' title='Касаба уюшмалари акциялари'/>
              <Blog src='/assets/images/world.png' title='Халқаро фаолият'/>
            </div>
          </div>
        </div>
        <div className='numbers'>
           
        </div>
      </div>
    </div>
  );
}

export default App;
